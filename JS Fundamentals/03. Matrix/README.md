# 1.Exercises: Arrays, Matrices, Multi-Dimensional Arrays

Problems for exercises and homework for the [&quot;JavaScript Fundamentals&quot; course @ SoftUni](https://softuni.bg/courses/javascript-fundamentals). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/313/](https://judge.softuni.bg/Contests/313/).

1. 1.Print an Array with a given Delimiter

Write a JS function that prints a given array.

The **input** comes as array of strings. The last element of the array is the delimiter.

The **output** is the same array, printed on the console, each element **separated** from the others by the **given delimiter**.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| OneTwoThreeFourFive- | One-Two-Three-Four-Five |   | How about no?Iwillnotdoit!\_ | How about no?\_I\_will\_not\_do\_it! |

### Hints

- Let&#39;s start by extracting the delimiter from the input array:

 ![](data:image/*;base64,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)

- Now that we have the element, we need to delete it from the array, because we don&#39;t need it in the output. Thankfully, the Array in JavaScript has a **built-in function** for **removing the last element** , which is **Array.pop()**.

 ![](data:image/*;base64,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)

- And last but not least, let&#39;s print each element of the array, separated with the next one by the delimiter:

 ![](data:image/*;base64,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)

- The **result** variable holds our final string. The **if** check in the loop is necessary so that we don&#39;t **attach an**** unneeded delimiter** somewhere in the result string.

1. 2.Print every N-th Element from an Array

Write a JS function that prints every element of an array, on a given step.

The **input** comes as array of strings. The last element is **N - the step**.

The **output** is every element on the **N-th** step **starting from the first one**. If the step is &quot; **3**&quot;, you need to print the **1-st** , the **4-th** , the **7-th** … and so on, until you reach the end of the array. The elements must be printed each on a new line.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 520314202 | 53120 |   | dsaasdtesttset2  | dsatest | 123456 | 1 |

### Hints

- Use what you&#39;ve seen from the **previous problem** to **extract the last element** of the array.
- Create a **step** variable to hold the **given step** of the array. Then **print all the elements** with a **for** loop, **incrementing** the **loop variable** with the value of the **step** variable.

1. 3.\*Add and Remove Elements from Array

Write a JS function that **adds** and **removes** numbers **to / from** an array. You will receive a command which can either be &quot; **add**&quot; or &quot; **remove**&quot;.

The **initial number** is **1**. Each input command should **increase that number** , regardless of what it is.

Upon receiving an &quot; **add**&quot; command you should add the current number to your array.
Upon receiving the &quot; **remove**&quot; command you should remove the last entered number, currently existent in the array.

The **input** comes as array of strings. Each element holds a **command**.

The **output** is the array itself, with each element printed on a new line. In case of an empty array, just print &quot; **Empty**&quot;.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| addaddaddadd  | 1234 |   | addaddremoveaddadd | 145 | removeremoveremove | Empty |

1. 4.Rotate Array

Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation.

The **input** comes as array of strings. The **last element** of the array is the amount of rotation you need to perform.

The **output** is the resulted array after the rotations. The elements should be printed on one line, separated by a **single space**.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| 12342 | 3 4 1 2 |   | BananaOrangeCoconutApple15 | Orange Coconut Apple Banana |

### Hints

- Check if there is a **built-in function** for inserting elements **at the**** start** of the array.

1. 5.Extract an Non-decreasing Subsequence from an Array

Write a JS function that extracts only those numbers that **form a**** non-decreasing subsequence **. In other words, you start from the** first element **and continue to** the end **of the** given array of numbers **. Any number which is** LESS THAN **the** current biggest one **is** ignored **, alternatively if it&#39;s equal or higher than the** current biggest one **you set it as the** current biggest one** and you continue to the next number.

The **input** comes as array of numbers.

The **output** is the processed array after the filtration, which should be a non-decreasing subsequence. Each element should be printed on a new line.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 138410123224 | 138101224 |   | 1234 | 1234 | 20321561 | 20 |

### Hints

- The **Array.filter()** built-in function might help you a lot with this problem.

1. 6.Sort an Array by 2 Criteria

Write a JS function that orders a **given array of strings** , by **length** in **ascending order** as **primary criteria** , and by **alphabetical value** in **ascending order** as **second criteria**. The comparison should be **case-insensitive**.

The **input** comes as array of strings.

The **output** is the ordered array of strings.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| alphabetagamma | betaalphagamma |   | IsaccTheodorJackHarrisonGeorge  | JackIsaccGeorgeTheodorHarrison  | testDenyomenDefault | DenyomentestDefault |

### Hints

- An array can be sorted by passing a comparing function to the **Array.sort()** function.
- Creating a comparing function by 2 criteria can be achieved by first comparing by the **main criteria** , if the 2 items are different (the result of the compare is not 0) - return the result as the result of the comparing function. If the two items are the same by the **main criteria** (the result of the compare is 0), we need to compare by the **second criteria** and the result of that comparison is the result of the comparing function.
- You can check more about **Array.sort()** here - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Array/sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort%20)

# 2.Multidimensional Arrays

We will mainly work with 2-dimensional arrays. The concept is as simple as working with a simple 1-dimensional array. It is just an array of arrays.

1. 7.Magic Matrices

Write a JS function that checks if a given matrix of numbers is magical. A matrix is magical if the **sums of the cells** of **every row** and **every column** are **equal**.

The **input** comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will **always be positive**.

The **output** is a Boolean result indicating whether the matrix is magical or not.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[4, 5, 6], [6, 5, 4], [5, 5, 5]] | true |   | [[11, 32, 45], [21, 0, 1], [21, 1, 1]] | false  | [[1, 0, 0], [0, 0, 1], [0, 1, 0]] | true |

1. 8.\*Spiral Matrix

Write a JS function that generates a **Spirally-filled** matrix with numbers, with given dimensions.

The **input** comes as 2 numbers that represent the **dimension of the matrix**.

The **output** is the matrix filled spirally starting from **1**. You need to print **every row on a new line** , with the cells **separated by a space**. Check the examples below.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| 5, 5 | 1 2 3 4 516 17 18 19 615 24 25 20 714 23 22 21 813 12 11 10 9 |   | 3, 3 | 1 2 38 9 47 6 5 |

1. 9.\*Diagonal Attack

Write a JS function that reads a given matrix of numbers, and checks if both **main diagonals have equal sum**. If they do, set every element that is **NOT** part of **the main diagonals** to that sum, alternatively just print the matrix unchanged.

The **input** comes as array of strings. Each element represents a **string of numbers** , with **spaces** between them. Parse it into a **matrix of numbers** , so you can work with it.

The **output** is either the new matrix, with all cells not belonging to a main diagonal changed to the diagonal sum or the original matrix, if the two diagonals have different sums. You need to print **every row on a new line** , with cells **separated by a space**. Check the examples below.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| [&#39;5 3 12 3 1&#39;,&#39;11 4 23 2 5&#39;,&#39;101 12 3 21 10&#39;,&#39;1 4 5 2 2&#39;,&#39;5 22 33 11 1&#39;] | 5 15 15 15 115 4 15 2 1515 15 3 15 1515 4 15 2 155 15 15 15 1 |   | [&#39;1 1 1&#39;,&#39;1 1 1&#39;&#39;1 1 0&#39;]  | 1 1 11 1 11 1 0 |

1. 10.\*\*Orbit

You will be given an empty rectangular space of cells. Then you will be given the position of a star. You need to build the orbits around it.

You will be given a coordinate of a cell, which will **always be**** inside the matrix **, on which you will put the value –** 1 **. Then you must set the values of the cells** directly surrounding that cell **, including the** diagonals **,** to **** 2**. After which you must set the values of the next surrounding cells to 3 and so on. Check the pictures for more info.

For example we are given a matrix which has 5 rows and 5 columns and the star is at coordinates – **0, 0**. Then the following should happen:

| 1 |   |   |   |   |   |   | 1 | 2 |   |   |   |   |   | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|   |   |   |   |   |   |   | 2 | 2 |   |   |   |   |   | 2 | 2 | 3 | 4 | 5 |
|     |   |   |   |   |   |   |   |   |   |   |   |   |   | 3 | 3 | 3 | 4 | 5 |
|   |   |   |   |   |   |   |   |   |   |   |   |   |   | 4 | 4 | 4 | 4 | 5 |
|   |   |   |   |   |   |   |   |   |   |   |   |   |   | 5 | 5 | 5 | 5 | 5 |

If the coordinates of the star are somewhere in the middle of the matrix for example – **2, 2** , then it should look like this:

|   |   |   |   |   |   |   |   |   |   |   |   |   |   | 3 | 3 | 3 | 3 | 3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|   |   |   |   |   |   |   |   | 2 | 2 | 2 |   |   |   | 3 | 2 | 2 | 2 | 3 |
|     |   | 1 |   |   |   |   |   | 2 | 1 | 2 |   |   |   | 3 | 2 | 1 | 2 | 3 |
|   |   |   |   |   |   |   |   | 2 | 2 | 2 |   |   |   | 3 | 2 | 2 | 2 | 3 |
|   |   |   |   |   |   |   |   |   |   |   |   |   |   | 3 | 3 | 3 | 3 | 3 |

The **input** comes as an array of 4 numbers **[width, height, x, y]** which represents the **dimensions of the matrix** and the **coordinates of the star.**

The **output** is the filled matrix, with the cells **separated by a space** , each **row on a new line**.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [4, 4, 0, 0] | 1 2 3 42 2 3 43 3 3 44 4 4 4 |   | [5, 5, 2, 2]  | 3 3 3 3 33 2 2 2 33 2 1 2 33 2 2 2 33 3 3 3 3 | [3, 3, 2, 2] | 3 3 33 2 23 2 1 |

### Hints

- Check if there is some **dependency** or **relation** between the **position of the numbers** and the **rows** and **columns** of those positions.
