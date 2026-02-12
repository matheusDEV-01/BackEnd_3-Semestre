using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exercicio08
{
    public class Usuario:Autenticavel
    {
                    private string senha = "123";

        public bool Autenticar(string senha)
        {
            return this.senha == senha;
        }
    }

    
}