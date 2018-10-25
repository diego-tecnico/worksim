using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models.Banco
{
  public class DbWorkFlow : DbContext
  {
    public DbWorkFlow(DbContextOptions dbContextOptions) : base(dbContextOptions) { }

    public DbSet<Chamados> Chamados { get; set; }
    public DbSet<AcoesChamados> AcoesChamados { get; set; }
    public DbSet<Protocolo> Protocolo { get; set; }



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);
    }

  }
}
