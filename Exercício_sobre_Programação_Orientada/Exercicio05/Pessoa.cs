using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exercicio05
{
    public class Pessoa
    {
         public string Nome;
        public int Idade;

        public Pessoa(string n, int i)
        {
            Nome = n;
            Idade = i;
        }

        public Pessoa()
        {
            Nome = "";
            Idade = 0;
        }

        public void DefinirIdade(int valor)
        {
            if (valor > 0)
            {
                Idade = valor;
            }
            else
            {
                Console.WriteLine("Idade inválida!");
            }
        }

        public int ObterIdade()
        {
            return Idade;
        }

        public void ExibirDados()
        {
            Console.WriteLine($"Olá, meu nome é {Nome}");
            Console.WriteLine($"Idade é {Idade}");
        }
    }
}