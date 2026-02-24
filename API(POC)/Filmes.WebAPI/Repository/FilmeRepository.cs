using Filmes.WebAPI.BdContextFilme;
using Filmes.WebAPI.Interfaces;
using Filmes.WebAPI.Models;

namespace Filmes.WebAPI.Repository;

public class FilmeRepository : IFilmeRepository
{
    private readonly FilmeContext _context;
    public FilmeRepository(FilmeContext context)
    {
        _context = context;
    }

    public void AtualizarIdCorpo(Filme filmeAtualizado)
    {
        throw new NotImplementedException();
    }

    public void AtualizarIdUrl(Guid id, Filme filmeAtualizado)
    {
        throw new NotImplementedException();
    }

    public Filme BuscarPorId(Guid id)
    {
        throw new NotImplementedException();
    }

    public void Cadastrar(Filme NovoFilme)
    {
        try {
            
            NovoFilme.IdFilme = Guid.NewGuid().ToString();

            _context.Filmes.Add(NovoFilme);
            _context.SaveChanges();
        }
        catch (Exception)
        {
            throw;
        }
    }

    public void Delete(Guid id)
    {
        throw new NotImplementedException();
    }

    public List<Filme> Listar()
    {
        try
        {
            List<Filme>listaFilmes = _context.Filmes.ToList();
            return listaFilmes;
        }
        catch (Exception)
        {
            throw;
        }
    }
}
