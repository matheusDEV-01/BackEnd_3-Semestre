using Veiculos.WebApi.Interfaces;
using Veiculos.WebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace Veiculos.WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]

public class TipoVeiculoController : ControllerBase
{
    private readonly ITipoVeiculoRepository _tipoVeiculoRepository;

    public TipoVeiculoController(ITipoVeiculoRepository tipoVeiculoRepository)
    {
        _tipoVeiculoRepository = tipoVeiculoRepository;
    }

    [HttpGet("{id}")]
    public IActionResult GetById(Guid id)
    {
        try
        {
            return Ok(_tipoVeiculoRepository.BuscarPorId(id));
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            return Ok(_tipoVeiculoRepository.Listar());
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpPost]
    public IActionResult Post(TipoVeiculo novoTipoVeiculo)
    {
        try
        {
            _tipoVeiculoRepository.Cadastrar(novoTipoVeiculo);

            return StatusCode(201);
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpPut("{id}")]
    public IActionResult Put(Guid id, TipoVeiculo tipoVeiculoAtualizado)
    {
        try
        {
            _tipoVeiculoRepository.AtualizarIdUrl(id, tipoVeiculoAtualizado);

            return NoContent();
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpPut]
    public IActionResult PutBody(TipoVeiculo tipoVeiculoAtualizado)
    {
        try
        {
            _tipoVeiculoRepository.AtualizarIdCorpo(tipoVeiculoAtualizado);

            return NoContent();
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        try
        {
            _tipoVeiculoRepository.Deletar(id);

            return NoContent();
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
}
