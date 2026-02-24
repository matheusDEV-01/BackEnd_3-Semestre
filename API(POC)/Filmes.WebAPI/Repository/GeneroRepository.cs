using Filmes.WebAPI.Models;
using Filmes.WebAPI.Interfaces;
using Filmes.WebAPI.BdContextFilme;

namespace Filmes.WebAPI.Repository
{
    public class GeneroRepository : IGeneroRepository
    {
        private readonly FilmeContext _context;
        public GeneroRepository(FilmeContext context)
        {
            _context = context;
        }
        public void AtualizarIdCorpo(Genero generoAtualizado)
        {
            throw new NotImplementedException();
        }

        public void AtualizarIdUrl(Guid id, Genero generoAtualizado)
        {
            throw new NotImplementedException();
        }

        public Genero BuscarPorId(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Genero Novogenero)
        {
            try {

                _context.Generos.Add(Novogenero);

                _context.SaveChanges();
                } 
            catch (Exception ex)
            {
                throw;
            }
           
        }

        public void Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<Genero> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
