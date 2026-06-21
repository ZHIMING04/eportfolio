// Lab 2 - SECJ2013 - 23241 (Lab2.cpp)
// Group Members:
// 1. TAN ZHI MING A23CS0189
// 2. NG YU HIN A23CS0148
#include <iostream>
#include <string>

using namespace std;

void printStar(int n) {
    if (n == 0) {
        cout << endl;
    } else {
        cout << "*";
        printStar(n - 1); 
    }
}

void printNum(int n) {
    if (n == 0) {
        cout << endl;
    } else {
        printNum(n - 1); 
        cout << n << " - ";
        printStar(n);
    }
}

int totalOdd(int list[], int n) {
    if (n == 0) {
        return 0; 
    }
    int total = totalOdd(list, n - 1); 
    if (list[n - 1] % 2 != 0) {
        cout << list[n - 1] << " ";
        total += list[n - 1];
    }
    return total;
}

// Main function
int main(int argc, char *argv[]) {
    printNum(6); // Start from 1 to 6

    cout << "\n\n";

    int num[6] = {0, 1, 2, 3, 4, 5};
    int result = totalOdd(num, 6);
    cout << "= " << result << endl;

    system("pause");
    return 0;
}
