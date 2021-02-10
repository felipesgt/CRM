using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Data.Mapping
{
    public class CustomerMap : IEntityTypeConfiguration<CustomerEntity>
    {
        public void Configure(EntityTypeBuilder<CustomerEntity> builder)
        {
            builder.ToTable("Customer");

            builder.HasKey(u => u.Id);

            builder.HasIndex(u => u.Email)
                   .IsUnique();

            builder.Property(u => u.Name)
                   .IsRequired()
                   .HasMaxLength(60);

            builder.Property(u => u.CPF)
                .HasMaxLength(11);

            builder.Property(u => u.Date)
                .HasMaxLength(11);

            builder.Property(u => u.Phone)
                .HasMaxLength(11);

            builder.Property(u => u.ZipCode)
                .HasMaxLength(11);

            builder.Property(u => u.State)
                .HasMaxLength(11);

            builder.Property(u => u.City)
                .HasMaxLength(11);

            builder.Property(u => u.Neighborhood)
                .HasMaxLength(11);

        }
    }

 
}
