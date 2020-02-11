#include "stdafx.h"

#include <iostream>
using namespace std;



int main()

{

	//Initialzatoin area

	int factorial = 1;

	long factorial_long = 1;

	double factorial_double = 1;

	float factorial_float = 1;

	short fact = 1;

	int number;



	cout << "Please enter a number" << endl; //Choosing the value for finding the factorial

	cin >> number;

	cout << "The oder for the output will be int ,long,float,double,short"<<endl;

		for (int i = 0; i < number; i++)		//Loop that will demonstrate the values of each factorial

		{

			factorial += (factorial*i);

			factorial_long += (factorial_long*i);

			factorial_float += (factorial_float*i);

			factorial_double += (factorial_double*i);

			fact += (fact*i);



			cout << i+1 << "!=" << factorial <<"  "<< factorial_long << "  "<< factorial_float <<"  "<< factorial_double <<" "<< fact << endl;

		}

	return 0;

}

