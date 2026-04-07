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
        try
        {
            Filme filmeBuscado = _context.Filmes.Find(filmeAtualizado.IdFilme)!; // Busca o filme pelo ID
            if (filmeBuscado != null)
            {
                filmeBuscado.Titulo = filmeAtualizado.Titulo;
                filmeBuscado.IdGenero = filmeAtualizado.IdGenero;
            }
            _context.Filmes.Update(filmeBuscado!); // Atualiza o filme no contexto
            _context.SaveChanges(); // Salva as alterações no banco de dados

        }
        catch (Exception)
        {
            throw;
        }
    }

    public void AtualizarIdUrl(Guid id, Filme filmeAtualizado)
    {
        try
        {
            Filme filmeBuscado = _context.Filmes.Find(id.ToString())!; // Busca o filme pelo ID

            if (filmeBuscado != null)
            {
                filmeBuscado.Titulo = filmeAtualizado.Titulo;
                filmeBuscado.IdGenero = filmeAtualizado.IdGenero;
            }
            _context.Filmes.Update(filmeBuscado!); // Atualiza o filme no contexto
            _context.SaveChanges(); // Salva as alterações no banco de dados
        }
        catch (Exception)
        {
            throw;
        }
    }

    public Filme BuscarPorId(Guid id)
    {
        try
        {
                        Filme filme = _context.Filmes.Find(id.ToString())!;
            return filme;

        }
        catch (Exception)
        {
            throw;
        }
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
        try
        {
            Filme filmeBuscado = _context.Filmes.Find(id.ToString())!; // Busca o filme pelo ID
            if (filmeBuscado != null)
            {
                _context.Filmes.Remove(filmeBuscado); // Remove o filme do contexto
                _context.SaveChanges(); // Salva as alterações no banco de dados
            }

        }
        catch (Exception)
        {
            throw;
        }
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
