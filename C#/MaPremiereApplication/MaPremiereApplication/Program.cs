using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaPremiereApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> chiffres = new List<int>(); // création de la liste
            chiffres.Add(8); // chiffres contient 8
            chiffres.Add(9); // chiffres contient 8, 9
            chiffres.Add(4); // chiffres contient 8, 9, 4, 5

            chiffres.RemoveAt(1); // chiffres contient 8, 4

            foreach (int chiffre in chiffres)
            {
                Console.WriteLine(chiffre);
            }
        }
    }
}
