// Lab 1 - SECJ2013 - 24251 (Lab1.cpp)
// Group Members:
// 1. TAN ZHI MING (A23CS0189)
// 2. NG YU HIN (A23CS0148)

#include <iostream>
#include <string>
#include <fstream>
#include "Student.h"

using namespace std;

// main function
int main() {
    const int LIST_SIZE = 10;
    Student* studList[LIST_SIZE];
    ifstream inFile("Marks.txt");
    fstream outFile("Results.txt",ios::out);
    int num=0;
    string name;
    int cwMark,feMark;
    if(!inFile){
        cerr<<"ERROR : Fail to open file "<<endl;
        return 1;
    }
    while(!inFile.eof()){
        inFile>>name;
        inFile>>cwMark;
        inFile>>feMark;
        Student *students = new Student(name,cwMark,feMark);
        studList[num++]=students;
    }
    cout<<"Student mark info:"<<endl;
    for(int i=0;i<num;i++){
        studList[i]->printInfo();
        cout<<endl;
    }
    
    cout<<"\nPrint and save results to file:"<<endl;
    for(int i=0;i<num;i++){
        studList[i]->printResult();
        studList[i]->printResultFile(outFile);
        delete studList[i];
    }
    system("pause");
    return 0;
}
