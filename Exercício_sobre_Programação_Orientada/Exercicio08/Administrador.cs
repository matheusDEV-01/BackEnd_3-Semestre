using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exercicio08
{
    public class Administrador:Autenticavel
    {
         private string senha = "admin";

        public bool Autenticar(string senha)
        {
            return this.senha == senha;
        }
    }
}