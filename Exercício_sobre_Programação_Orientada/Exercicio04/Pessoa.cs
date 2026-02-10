using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exercicio04
{
    public class Pessoa
    {
        public string Nome;

        public int Idade;

        public Pessoa(string n, int i)
        {
            Nome = n; //inicializar com o valor de n
            Idade = i;  //inicializar com o valor de i

        }

        public Pessoa()
        {
            idade = 0;
        }


        public void DefinirIdade(int valor)
        {
            if (valor > 0)
            {
                idade = valor;
            }
            else
            {
                Console.WriteLine("Idade inválida!");
            }
            Console.ReadLine();
        }

        public int ObterIdade()
        {
            return idade;
        }

        public void ExibirDados()
        {
            Console.WriteLine($"Olá, meu nome é {Nome}");
            Console.WriteLine($"Idade é {idade}");
        }

    }
}