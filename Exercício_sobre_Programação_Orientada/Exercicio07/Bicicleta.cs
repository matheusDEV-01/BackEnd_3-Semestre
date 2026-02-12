using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Exercicio07
{
    public class Bicicleta : Veiculo
    {
         public override void Mover()
        {
            Console.WriteLine("A bicicleta está se movendo com pedaladas.");
        }
    }
}