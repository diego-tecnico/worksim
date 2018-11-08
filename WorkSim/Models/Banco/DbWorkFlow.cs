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

    public DbSet<Chamado> Chamado { get; set; }
    public DbSet<Beneficiario> Beneficiario { get; set; }
    public DbSet<AcoesChamados> AcoesChamados { get; set; }
    public DbSet<Protocolo> Protocolo { get; set; }
    public DbSet<Setor> Setor { get; set; }
    public DbSet<Categoria_setor> Categoria_setor { get; set; }
    public DbSet<Sub_categoria> Sub_categoria { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);
    }

  }
}
