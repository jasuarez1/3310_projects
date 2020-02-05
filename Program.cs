using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Factorial
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Factorial of?");
            int input = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("You entered: " + input);
            int intans = 1;
            float floatans = 1;
            double doubleans = 1;
            long longans = 1;

            for(int i = 1; i <= input; i++)
            {
                intans = intans * i;
                floatans = floatans * i;
                doubleans = doubleans * i;
                longans = longans * i;
                
            }
            Console.WriteLine("Int: "+intans);
            Console.WriteLine("Float: " + floatans);
            Console.WriteLine("Double: " + doubleans);
            Console.WriteLine("Long: " + longans);
        }
    }
}
