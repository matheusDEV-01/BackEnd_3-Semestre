using Filmes.WebAPI.DTO;
using Filmes.WebAPI.Interfaces;
using Filmes.WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Filmes.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class FilmeController : ControllerBase
{
    private readonly IFilmeRepository _filmeRepository;

    public FilmeController(IFilmeRepository filmeRepository)
    {
        _filmeRepository = filmeRepository;
    }

    [HttpGet("{id}")]
    public IActionResult GetById(Guid id)
    {
        try
        {
            return Ok(_filmeRepository.BuscarPorId(id)); // Retorna o filme encontrado com status 200 OK
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message); // Retorna uma resposta de erro com status 400 Bad Request e a mensagem de erro
        }
    }
    //[Authorize]
    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            return Ok(_filmeRepository.Listar());
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }


    [HttpPost]
    public async Task<IActionResult> Post([FromForm]FilmeDTO filme)
    {
        if (String.IsNullOrWhiteSpace(filme.Nome))
            return BadRequest("É obrigatório que o filme tenha Nome e Gênero");

        Filme NovoFilme = new Filme();
        if (filme.Imagem != null && filme.Imagem.Length != 0)
        {
            var extensao = Path.GetExtension(filme.Imagem.FileName);
            var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

            var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

            //Garante que a pasta exista
            if (!Directory.Exists(caminhoPasta))

                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
              filme.Imagem.CopyTo(stream);
            }
            NovoFilme.Imagem = nomeArquivo;
        }
            
            NovoFilme.IdGenero = filme.IdGenero.ToString();
            NovoFilme.Titulo = filme.Nome;
        

        try
        {
            _filmeRepository.Cadastrar(NovoFilme);
            return StatusCode(201);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(Guid id, FilmeDTO filmeAtualizado)
    {
        var filmeBuscado = _filmeRepository.BuscarPorId(id);
        if (filmeBuscado == null)
            return NotFound("Filme não encontrado");

        if (!String.IsNullOrWhiteSpace(filmeAtualizado.Nome))
            filmeBuscado.Titulo = filmeAtualizado.Nome;

        if (filmeAtualizado.IdGenero != null && filmeBuscado.IdGenero != filmeAtualizado.IdGenero.ToString())
            filmeBuscado.IdGenero = filmeAtualizado.IdGenero.ToString();

        if (filmeAtualizado.Imagem != null && filmeAtualizado.Imagem.Length != 0) 
        { 
        var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

            //Deleta arquivo antigo
            if (String.IsNullOrEmpty(filmeBuscado.Imagem))
            {
                var caminhoAntigo = Path.Combine(caminhoPasta, filmeBuscado.Imagem);

                if (System.IO.File.Exists(caminhoAntigo))
                    System.IO.File.Delete(caminhoAntigo);
            }

            //Salva novo imagem
            var extensao = Path.GetExtension(filmeAtualizado.Imagem.FileName);
            var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

            if (!Directory.Exists(caminhoPasta))
                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

            using(var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await filmeAtualizado.Imagem.CopyToAsync(stream);
            }
            filmeBuscado.Imagem = nomeArquivo;

        }

        try
        {
            _filmeRepository.AtualizarIdUrl(id, filmeBuscado);
            return NoContent();// Retorna status 204 NoContent para indicar que a atualização foi bem-sucedida, sem retornar um corpo de resposta
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
    [HttpPut]
    public IActionResult PutBody(Filme filmeAtualizado)
    {
        try
        {
            _filmeRepository.AtualizarIdCorpo(filmeAtualizado);
            return NoContent();// Retorna status 204 NoContent para indicar que a atualização foi bem-sucedida, sem retornar um corpo de resposta
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var filmeBuscado = _filmeRepository.BuscarPorId(id);
        if (filmeBuscado == null)
            return NotFound("Filme não encontrado");

       var pastaRelativa = "wwwroot/imagens";
        var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

        //Deleta arquivo
        if (!String.IsNullOrEmpty(filmeBuscado.Imagem))
        {
            var caminho = Path.Combine(caminhoPasta, filmeBuscado.Imagem);

            if (System.IO.File.Exists(caminho))
                System.IO.File.Delete(caminho);
          
        }

        try
        {
            _filmeRepository.Delete(id);
            return NoContent(); 
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
}
