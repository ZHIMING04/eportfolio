//TAN ZHI MING A23CS0189

public class LAB2 {
    public static void main (String[] args) {
        System.out.println("Q1");
        Employee e1 = new Employee();
        e1.setEmpNum(101);
        e1.setEmpName("Ali");
        System.out.println("Employee Number: " + e1.getEmpNum());
        System.out.println("Employee Name: " + e1.getEmpName());

        System.out.println("Q2");
        Car c1 = new Car();
        c1.setBrand("Toyota");
        System.out.println("Car Brand: " + c1.getBrand());
        System.out.println("Car Year: " + c1.getYear());

        System.out.println("Q3");
        Book b1 = new Book("Java 101", "John Doe");
        b1.display();

        System.out.println("Q4");
        Student s1 = new Student();
        s1.setName("Sara");
        System.out.println("Student Name: " + s1.getName());
        System.out.println("Student Age: " + s1.getAge());

        System.out.println("Q5");
        Message m1 = new Message();
        m1.display();
        System.out.println("Message: " + m1.display("Welcome to Java!"));

        System.out.println("Q6");
        new User();
        new User();
        System.out.println("Total Users: " + User.getUserCount());

        System.out.println("Q7");
        Employees e = new Employees();
        e.setSalary(5000.00);
        System.out.println("Salary: " + e.getSalary());

    }
}

class Employee {
    private int empNum;
    private String empName;

    public void setEmpNum(int empNum) {
        this.empNum = empNum;
    }
    public int getEmpNum() {
        return empNum;
    }
    public void setEmpName(String empName) {
        this.empName = empName;
    }
    public String getEmpName() {
        return empName;
    }
}

class Car {
    private String brand;
    private int year = 1998;
    public void setBrand(String brands) {
        brand = brands;
    }
    public int getYear() {
        return year;
    }
    public String getBrand() {
        return brand;
    }
}

class Book {
    private String title;
    private String author;

    // TODO: Add a constructor
    public Book(String titles, String authors) {
        title = titles;
        author = authors;
    }

    public void display() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
    }
}

class Student {
    private String name;
    private int age;

    // TODO: Implement setter for name
    public void setName(String names) {
        name = names;
    }

    // TODO: Implement getter for age
    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }
}

class Message {
    // TODO: Write a method display() that prints "Hello!"
    public void display() {
        System.out.println("Hello!");
    }
    // TODO: Overload display(String msg) to print "Message: msg"
    public String display(String msg) {
        return msg;
    }
}

class User {
    // TODO: Declare a static counter variable
    private static int counter = 0;

    public User() {
        // TODO: Increment counter
        counter++;

    }

    public static int getUserCount() {
        // TODO: Return counter
        return counter;
    }
}

class Employees {
    // TODO: Make salary private
    private double salary;

    // TODO: Write setSalary() and getSalary() methods
    public void setSalary(double sal) {
        salary = sal;
    }
    public double getSalary() {
        return salary;
    }
}