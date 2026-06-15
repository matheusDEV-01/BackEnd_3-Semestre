using Veiculos.WebApi.Interfaces;
using Veiculos.WebApi.Repositories;

UsuarioRepository.cs
using Veiculos.WebApi.Contexts;
using Veiculos.WebApi.Interfaces;
using Veiculos.WebApi.Models;

namespace Veiculos.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly VeiculosContext _context;

        public UsuarioRepository(VeiculosContext context)
        {
            _context = context;
        }

        public void AtualizarIdCorpo(Usuario usuarioAtualizado)
        {
            try
            {
                Usuario usuarioBuscado = _context.Usuarios.Find(usuarioAtualizado.IdUsuario)!;

                if (usuarioBuscado != null)
                {
                    usuarioBuscado.Nome = usuarioAtualizado.Nome;
                    usuarioBuscado.Email = usuarioAtualizado.Email;
                    usuarioBuscado.Senha = usuarioAtualizado.Senha;
                }

                _context.Usuarios.Update(usuarioBuscado!);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void AtualizarIdUrl(Guid id, Usuario usuarioAtualizado)
        {
            try
            {
                Usuario usuarioBuscado = _context.Usuarios.Find(id)!;

                if (usuarioBuscado != null)
                {
                    usuarioBuscado.Nome = usuarioAtualizado.Nome;
                    usuarioBuscado.Email = usuarioAtualizado.Email;
                    usuarioBuscado.Senha = usuarioAtualizado.Senha;
                }

                _context.Usuarios.Update(usuarioBuscado!);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Usuario BuscarPorId(Guid id)
        {
            try
            {
                Usuario usuarioBuscado = _context.Usuarios.Find(id)!;

                return usuarioBuscado;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Cadastrar(Usuario novoUsuario)
        {
            try
            {
                _context.Usuarios.Add(novoUsuario);

                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Deletar(Guid id)
        {
            try
            {
                Usuario usuarioBuscado = _context.Usuarios.Find(id)!;

                if (usuarioBuscado != null)
                {
                    _context.Usuarios.Remove(usuarioBuscado);

                    _context.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<Usuario> Listar()
        {
            try
            {
                return _context.Usuarios
                    .OrderBy(u => u.Nome)
                    .ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
