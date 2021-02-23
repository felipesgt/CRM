using Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Mapping
{
    public class ProductMap : IEntityTypeConfiguration<ProductEntity>
    {
        public void Configure(EntityTypeBuilder<ProductEntity> builder)
        {
            builder.ToTable("Product");

            builder.HasKey(u => u.Id);

            builder.HasIndex(u => u.Nome)
                   .IsUnique();

            builder.Property(u => u.Preco)
                   .IsRequired()
                   .HasMaxLength(60);

            builder.Property(u => u.Quantidade)
                   .HasMaxLength(5);

            builder.Property(u => u.Categoria)
                   .HasMaxLength(20);
        }
    }
}
