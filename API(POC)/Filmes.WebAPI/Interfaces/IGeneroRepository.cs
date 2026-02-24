using Filmes.WebAPI.Models;

namespace Filmes.WebAPI.Interfaces;

public interface IGeneroRepository
{
    void Cadastrar(Genero Novogenero);
    void AtualizarIdCorpo(Genero generoAtualizado);
    void AtualizarIdUrl(Guid id, Genero generoAtualizado);
    List<Genero> Listar();
    void Delete(Guid id);
    Genero BuscarPorId(Guid id);
}
