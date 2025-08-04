## Custom Classes
In Java collections can store custom objects allowing you to define your own classes & use them within collctions such as list, set & map

```java
import java.util.*;

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return name + " (" + age + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));

        System.out.println(people);
    }
}
```

Now in above code we have used the Person class to define our custom type and then we have store our new type of data in an ArrayList in a very simple manner.

Means the people arraylist will have data like this 
```txt title="Output" 
[Alice (30), Bob (25)] 
```

What actually happens is that when new Person is called with some values `("Alice",30)` then a new object is created and that calls the constructor of People class and it then stores the data for that object into `name` and `age` variables. And for each objects it does the same thing.

:::note Question
Okay I have understood the logic but why is the output coming like this then?
:::

Actually the reason for this kind of output is we have `@Override` the actual toString so our method will be used for any string conversion and printing using toString method.

## Collections

### List
> A list is an ordered collection that allows duplicate elements it provides positional access & is commonly used in scenarios where order matters.

### i. ArrayList
Arraylist is a reusable array of the list interface. It offers random access very fast but slower insertion and deletion as elements needed to be shifted.

```java
List<String> arr = new String<>();
arr.add("Hello");
arr.add("World");
System.out.println(arr); // [Hello, World]
```
:::note Articles reference
Please check these articles for more information:
- [Java ArrayList GFG](https://www.geeksforgeeks.org/java/arraylist-in-java/)
- [Java ArrayList W3 schools](https://www.w3schools.com/java/java_ref_arraylist.asp)
:::

### ii. LinkedList
Linkedlist is a doubly linkedlist implementation to the list interface. It provides fast insertion & deletion but slower random access compared to arraylist.

```java 
LinkedList<Integer> ls = new LinkedList<>();
ls.add(1);
ls.add(2);
ls.add(3);
System.out.println(ls); // [1, 2, 3]
```
:::note Article reference
- [LinkedList GFG](https://www.geeksforgeeks.org/java/linked-list-in-java/)
- [LinkedList W3 schools](https://www.w3schools.com/java/java_linkedlist.asp)
:::

