
namespace Filmes.WebAPI.Utils;

public class Criptografia
{
    public static string GerarHash(string senha)
    {
       return BCrypt.Net.BCrypt.HashPassword(senha);
    }

    public static bool CompararHask(string senhaForm, string senhaBanco)
    {
        return BCrypt.Net.BCrypt.Verify(senhaForm, senhaBanco);
    }
}
