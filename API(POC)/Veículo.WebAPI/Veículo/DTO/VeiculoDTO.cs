namespace Veiculos.WebApi.DTO;

public class VeiculoDTO
{
    public string? Nome { get; set; }

    public IFormFile? Imagem { get; set; }

    public Guid IdTipoVeiculo { get; set; }
}