using Veiculos.WebApi.Contexts;

namespace Veiculos.WebApi.Interfaces
{
    public interface IVeiculoRepository
    {
        List<Veiculo> Listar();

        Veiculo BuscarPorId(Guid id);

        void Cadastrar(Veiculo veiculo);

        void Atualizar(Guid id, Veiculo veiculo);

        void Deletar(Guid id);
    }
}