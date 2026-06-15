
using Veiculos.WebApi.Models;

namespace Veiculos.WebApi.Interfaces;

public interface IUsuarioRepository
{
    void Cadastrar(Usuario novoUsuario);

    void AtualizarIdCorpo(Usuario usuarioAtualizado);

    void AtualizarIdUrl(Guid id, Usuario usuarioAtualizado);

    List<Usuario> Listar();

    void Deletar(Guid id);

    Usuario BuscarPorId(Guid id);
}