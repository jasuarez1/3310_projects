// Homework1ExponentialDataTest.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <iostream>

using namespace std;

int main()
{
	//Initialzatoin area
	int factorial = 1;
	int number;
	//long number;
	//double number;
	//float number;

	cout << "Please enter a number" << endl; //Choosing the value for finding the factorial
	cin >> number;							

	for (int i = 0; i <(number+1); i++)		//Loop that will demonstrate the values of each factorial
	{
		factorial += (factorial*i);
		cout <<i<< "!=" << factorial << endl;
	}
    return 0;
}

