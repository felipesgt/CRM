using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Mapping
{
    public class CustomerMap : IEntityTypeConfiguration<CustomerEntity>
    {
        public void Configure(EntityTypeBuilder<CustomerEntity> builder)
        {
            builder.ToTable("Customer");

            builder.HasKey(u => u.Id);

            builder.HasIndex(u => u.CPF)
                   .IsUnique();

            builder.Property(u => u.Nome)
                   .IsRequired()
                   .HasMaxLength(60);

            builder.Property(u => u.Data)
                .HasMaxLength(11);

            builder.Property(u => u.Phone)
                .HasMaxLength(11);

            builder.Property(u => u.Cep)
                .HasMaxLength(11);

            builder.Property(u => u.Estado)
                .HasMaxLength(11);

            builder.Property(u => u.Cidade)
                .HasMaxLength(11);

            builder.Property(u => u.Rua)
                 .HasMaxLength(11);

            builder.Property(u => u.Bairro)
                .HasMaxLength(11);

        }
    }

 
}
