// Lab 1 - SECJ2013 - 24251 (Student.h)
// Group Members:
// 1. TAN ZHI MING (A23CS0189)
// 2. NG YU HIN (A23CS0148)

#include <iostream>
#include <string>
#include <fstream>

using namespace std;

// Class defintion
class Student {
    private:
    string name;
    int cwMark;
    int feMark;
    public:
    Student(string n,int cw,int fe):name(n),cwMark(cw),feMark(fe){}
    ~Student(){
        cout<<"Destroy student object - "<<name<<endl;
    }

    int getTotalMark(){
        return cwMark+feMark;
    }

    string getGrade(){
        int total=this->getTotalMark();
        if (total<=100 && total>=75){
            return "A";
        }else if (total<=74 && total>=65){
            return "B";
        } if (total<=64 && total>=50){
            return "C";
        } if (total<=49 && total>=35){
            return "D";
        }else {
            return "E";
        }
    }

    void printInfo(){
        cout<<"Name: "<<name<<endl;
        cout<<"Coursework: "<<cwMark<<endl;
        cout<<"Final Exam: "<<feMark<<endl;
    }

    void printResult(){
        cout<<name<<" "<<cwMark+feMark<<" "<<this->getGrade()<<endl;
    }

    void printResultFile(fstream &ofile){
        ofile<<name<<" "<<cwMark+feMark<<" "<<this->getGrade()<<endl;
    }
};
