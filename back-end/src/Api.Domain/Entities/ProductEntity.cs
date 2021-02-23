using Domain.Entities;

namespace Data.Context
{
    public class ProductEntity : BaseEntity
    {
        public string Nome { get; set; }
        public string Preco { get; set; }
        public string Quantidade { get; set; }
        public string Categoria { get; set; }
    }
}