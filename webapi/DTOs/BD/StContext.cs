using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace webapi.DTOs.BD;

public partial class StContext : DbContext
{
    public StContext()
    {
    }

    public StContext(DbContextOptions<StContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Articulo> Articulos { get; set; }

    public virtual DbSet<ArticuloTiendum> ArticuloTienda { get; set; }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<ClienteArticulo> ClienteArticulos { get; set; }

    public virtual DbSet<Tiendum> Tienda { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-1RHDH3N; Database=ST; Trusted_Connection=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Articulo>(entity =>
        {
            entity.HasKey(e => e.IdArticulo);

            entity.Property(e => e.Articulo1)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Articulo");
            entity.Property(e => e.Codigo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Descripcion)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.FecIng)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.FkTienda).HasColumnName("FK_Tienda");
            entity.Property(e => e.Imagen)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.FkTiendaNavigation).WithMany(p => p.Articulos)
                .HasForeignKey(d => d.FkTienda)
                .HasConstraintName("FK_Articulos_Tienda");
        });

        modelBuilder.Entity<ArticuloTiendum>(entity =>
        {
            entity.HasKey(e => e.IdArticuloTienda);

            entity.ToTable("Articulo_Tienda");

            entity.Property(e => e.Fecha)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.FkArticulo).HasColumnName("FK_Articulo");
            entity.Property(e => e.FkTienda).HasColumnName("FK_Tienda");
        });

        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.HasKey(e => e.IdCliente);

            entity.Property(e => e.Apellidos)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Calle)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Ciudad)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Colonia)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Contrasena)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Correo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Cp)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("CP");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ClienteArticulo>(entity =>
        {
            entity.HasKey(e => e.IdClienteArticulo);

            entity.ToTable("Cliente_Articulo");

            entity.Property(e => e.Fecha)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.FkArticulo).HasColumnName("FK_Articulo");
            entity.Property(e => e.FkCliente).HasColumnName("FK_Cliente");

            entity.HasOne(d => d.FkArticuloNavigation).WithMany(p => p.ClienteArticulos)
                .HasForeignKey(d => d.FkArticulo)
                .HasConstraintName("FK_Cliente_Articulo_Articulos");

            entity.HasOne(d => d.FkClienteNavigation).WithMany(p => p.ClienteArticulos)
                .HasForeignKey(d => d.FkCliente)
                .HasConstraintName("FK_Cliente_Articulo_Clientes");
        });

        modelBuilder.Entity<Tiendum>(entity =>
        {
            entity.HasKey(e => e.IdTienda);

            entity.Property(e => e.Activo).HasDefaultValueSql("((1))");
            entity.Property(e => e.Calle)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Ciudad)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Colonia)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Cp)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("CP");
            entity.Property(e => e.Sucursal)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
