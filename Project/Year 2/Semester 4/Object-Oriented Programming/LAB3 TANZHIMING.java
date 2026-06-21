//tan zhi ming a23cs0189
import java.util.*;

public class ArrayLab {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        //question 1 part a
        double gpa[] = new double[4];

        //question 2 part a
        int[] points = {90,85,88};

        //question 4 part b
        int [][] matrix = {
            {1,2,3},
            {4,5,6},
            {7,8,9}
        };

        //question 5 part b
        ArrayList<Double> grades = new ArrayList<>();
        grades.add(90.5);
        grades.add(87.2);
        grades.add(77.7);

        //question 6 part c
        printAverage(new int[] {10,20,30,40});

        // 1D array for student scores
        int[] scores = new int[5];
        for (int i = 0; i < scores.length; i++) {
            System.out.print("Enter score " + (i + 1) + ": ");
            scores[i] = input.nextInt();
        }

        //question 7 part c
        int highest = findHighestScore(scores);
        System.out.println("Highest score: " + highest);

        // 2D array for marks of 3 students and 3 subjects
        int[][] marks = {
            {85, 78, 90},
            {88, 92, 79},
            {75, 80, 85}
        };

        // ArrayList of subjects
        ArrayList<String> subjects = new ArrayList<>();
        subjects.add("Math");
        subjects.add("Science");
        subjects.add("English");

        // Array of Student objects
        Student[] students = new Student[3];
        students[0] = new Student("Ali", 20);
        students[1] = new Student("Siti", 21);
        students[2] = new Student("Raj", 19);

        //question 8 part c
        printStudentInfo(students);

        //question 9 part c
        int totalMarks = sumSubjectMarks(marks);
        System.out.println("Total marks: " + totalMarks);


        input.close();
    }

    // question 3 part a
    public static void printTotal(String title, int... values) { 
        int total = 0;
        for (int v : values)
            total +=v;
        System.out.println(title + ":" + total);
    }

    // question 6 part c
    public static void printAverage(int[] numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        double average = (double) sum / numbers.length;
        System.out.println("Average: " + average);
    }

    // question 7 part c
    public static int findHighestScore(int[] scores) {
        int highest = scores[0];
        for (int score : scores) {
            if (score > highest) {
                highest = score;
            }
        }
        return highest;
    }

    // question 8 part c
    public static void printStudentInfo(Student[] students) {
        for (Student student : students) {
            System.out.println("Name: " + student.getName() + ", Age: " + student.getAge());
        }
    }

    // question 9 part c
    public static int sumSubjectMarks(int[][] marks) {
        int sum = 0;
        for (int[] studentMarks : marks) {
            for (int mark : studentMarks) {
                sum += mark;
            }
        }
        return sum;
    }
}

// Student class
class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}