using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WorkSim.Models.Authenticacao;
using WorkSim.Models.Banco;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace WorkSim
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      ConfigurationAuthentication(services);

      services.AddMvc();

      var connectionString = Configuration.GetConnectionString("DbWorksim");

      //#if DEBUG
      //MigrationRunner.Down(connectionString);
      // MigrationRunner.Up(connectionString);
      //#endif

      services.AddDbContext<DbWorkFlow>(
  options => options.UseMySql(connectionString));

      var logger = services
          .BuildServiceProvider()
          .GetService<DbWorkFlow>();

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
      if (env.IsDevelopment())
      {
        //app.UseBrowserLink();
        app.UseDeveloperExceptionPage();
      }

      loggerFactory.AddConsole(Configuration.GetSection("Logging"));
      loggerFactory.AddDebug();

      app.Use(async (context, next) =>
      {
        await next();

        if (context.Response.StatusCode == 404 &&
                  !Path.HasExtension(context.Request.Path.Value) &&
                  !context.Request.Path.Value.StartsWith("/api"))
        {
          context.Request.Path = "/index.html";
          context.Response.StatusCode = 200;
          await next();
        }
      });

      app.UseDefaultFiles();
      app.UseStaticFiles();

      app.UseMvc();
    }

    private void ConfigurationAuthentication(IServiceCollection services)
    {
      var tokenConfigurations = new TokenConfigurations();

      new ConfigureFromConfigurationOptions<TokenConfigurations>(
          Configuration.GetSection("TokenConfigurations"))
          .Configure(tokenConfigurations);

      services.AddSingleton(tokenConfigurations);

      services.AddAuthentication(authOptions =>
      {
        authOptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        authOptions.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(bearerOptions =>
      {
        var paramsValidation = bearerOptions.TokenValidationParameters;
        paramsValidation.IssuerSigningKey =
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenConfigurations.SymmetricSecurityKey));

        paramsValidation.ValidAudience = tokenConfigurations.Audience;
        paramsValidation.ValidIssuer = tokenConfigurations.Issuer;
        paramsValidation.ValidateIssuerSigningKey = true;
        paramsValidation.ValidateLifetime = true;
        paramsValidation.ClockSkew = TimeSpan.Zero;

        bearerOptions.Events = new JwtBearerEvents()
        {
          OnTokenValidated = OnTokenValidated,
          OnAuthenticationFailed = OnAuthenticationFailed
        };
      });

      services.AddAuthorization(auth =>
      {
        auth.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
                  .RequireAuthenticatedUser()
                  .Build();
      });

    }

    static async Task OnTokenValidated(TokenValidatedContext arg)
    {
      Debug.Write(arg);
    }

    static async Task OnAuthenticationFailed(AuthenticationFailedContext context)
    {
      Debug.Write(context);
    }


  }
}
