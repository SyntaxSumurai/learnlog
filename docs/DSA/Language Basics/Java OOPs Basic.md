# Java OOPs Basics

## Classes and Objects

### Class
- A class is simply a blueprint or template for creating objects. A class encapsulates (hides the data and functions) data and functions that operate on the data or manipulate it.

### Object
- An object is an instance (copy) of a class. When a class is defined, only the description for the object is defined; no memory or storage is allocated.
- When an object is created, the memory is allocated and the objects now contain the actual data stored in the attributes or variables and also can manipulate that data using the methods defined in the class.

## Access Specifiers

Access specifiers determine the visibility & accessibility of methods, variables & classes.

### Most common are:

- **public** 
   - When a class/method/variable is declared as public, it can be accessed from `anywhere` in the program.
- **private**
  - When a class/method/variable is declared as private, it can only be accessed within the class. And to use it outside the class, we need to `inherit` the class.
- **protected**
  - When a class/method/variable is declared as protected, it can be accessed within the `package` and in `subclasses`.
  
:::info Default Access Specifier
If no access specifier is declared, then Java by default sets a `package-private` access modifier, which means the class or method is only accessible within its own package.
:::

## Main Method & Its Role

```java title="Simple Hello World Program"
class Basics {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

- `class` is a keyword used to declare a class in Java.
- `Basics` is the name of the class. The name of the Java file should be the same as the class name.
- `public` is an access specifier. It means that the class is accessible by any other class.
- `static` is a keyword which allows us/JVM to call the methods directly without creating an instance/object of the class.
- `void` is a keyword which means that the method does not return any value.
- `main` is the name of the method.
- `String[] args` is the parameter of the method. It is an array of strings named as `args`, and it is used to store command line arguments.

:::note
To access the static methods use this syntax:
```java
className.methodName();
```
:::

## Creating & Using Objects

Objects are instances of a class. To access a non-static method, an object of that class needs to be created using the `new` keyword.

```java
className objectName = new className(); 
```

Once the object is created, it now contains actual data in the form of attributes and can also manipulate the data using the methods defined in the class.

```java title="Creating & Using Objects"
class Test {
    int age;
    
    public void assignAge(int num) {
        age = num;
    }
}

class Basics {
    public static void main(String[] args) {
        Test test1 = new Test(); // object1 created
        test1.assignAge(20);
        
        Test test2 = new Test(); // object2 created
        test2.assignAge(25);

        System.out.println(test1.age); // Output: 20
        System.out.println(test2.age); // Output: 25
    }
}
```

In the above example, we created two objects of the class `Test` and called the `assignAge` method. One object is `test1` with value `20` and the other is `test2` with value `25`.

So when we printed the value of `test1.age` it printed `20` and when we printed the value of `test2.age` it printed `25`. This is because each object has its own copy of the attributes. This means that the value of the attribute `age` is different for each object.

Hence, we can say that the objects are independent of each other.

## Constructors

Constructors are special methods that are used to initialize objects. They are automatically called when an object is created.

The main role of a constructor is to set initial values for object attributes & perform any necessary setup tasks.

### Key Points:
- Constructors have the same name as the class name.
- Constructors do not have a return type.
- Constructors are called automatically when an object is created.

### Types of Constructors

#### Default Constructor
A default constructor is a constructor that has no parameters. If no constructor is defined, Java automatically provides a default constructor that initializes the object attributes to their default values.

```java title="Default Constructor Example"
class Student {
    String name;
    int age;
    
    // Default constructor
    public Student() {
        name = "Unknown";
        age = 0;
    }
}

class Main {
    public static void main(String[] args) {
        Student student1 = new Student();
        System.out.println("Name: " + student1.name); // Output: Name: Unknown
        System.out.println("Age: " + student1.age);   // Output: Age: 0
    }
}
```

#### Parameterized Constructor
A parameterized constructor is a constructor that has parameters. It is used to initialize the object attributes with specific values.

```java title="Parameterized Constructor Example"
class Student {
    String name;
    int age;
    
    // Parameterized constructor
    public Student(String studentName, int studentAge) {
        name = studentName;
        age = studentAge;
    }
}

class Main {
    public static void main(String[] args) {
        Student student1 = new Student("John", 20);
        System.out.println("Name: " + student1.name); // Output: Name: John
        System.out.println("Age: " + student1.age);   // Output: Age: 20
    }
}
```

:::note Constructor Overloading
Constructor overloading is a feature that allows a class to have multiple constructors with different parameters.

```java title="Constructor Overloading Example"
class Student {
    String name;
    int age;
    String course;
    
    // Default constructor
    public Student() {
        name = "Unknown";
        age = 0;
        course = "Not Assigned";
    }
    
    // Constructor with name and age
    public Student(String studentName, int studentAge) {
        name = studentName;
        age = studentAge;
        course = "Not Assigned";
    }
    
    // Constructor with all parameters
    public Student(String studentName, int studentAge, String studentCourse) {
        name = studentName;
        age = studentAge;
        course = studentCourse;
    }
}
```
:::
