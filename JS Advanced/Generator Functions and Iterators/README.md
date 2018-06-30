# 1.Lab: Generator Functions and Iterators

Problems for in-class lab for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/345/](https://judge.softuni.bg/Contests/345/).

1. 1.Reverse Iterator

Write JS function that takes an array as parameter and returns an Iterator object. The Iterator must iterate over the items of the array in reverse order.

### Input / Output

Your function needs to take an array as a parameter. As output, **return** an object as described in the Iterator JavaScript Protocol.

### Examples

| Sample Input | Output |
| --- | --- |
| let iterator = reverseArrayIterator([10, 20, 30]);while (true) {  let item = iterator.next();  if (item.done) break;  console.log(item.value);} | 302010 |

1. 2.Iterable

Write a JS function that takes an array as parameter and returns an Iterable object. The object must iterate over the items of the array in reverse order.

### Input / Output

Your function needs to take an array as a parameter. As output, **return** an object as described in the Iterable JavaScript Protocol.

### Examples

| Sample Input | Output |
| --- | --- |
| for (let item of reverseArrayIterable([10, 20, 30])) {  console.log(x);} | 302010 |

1. 3.Reverse Generator

Write a JS **Generator** function that takes an array as parameter and **yields** the elements of the array in reverse order.

### Input / Output

Your function needs to take an array as a parameter. As output, **yield** an element of the array.

### Examples

| Sample Input | Output |
| --- | --- |
| let arr = [10, 20, 30];for (let item of reverseArrayGenerator(arr)) {  console.log(item);} | 302010 |

1. 4.Iterate HTML Tags

Write a JS **Generator** function that takes a string as parameter and **yields** all HTML tags from that string.

### Input / Output

Your function needs to take a string as a parameter. As output, **yield** a containing an HTML tag.

### Examples

| Sample Input | Output |
| --- | --- |
| let html = `&lt;html&gt;&lt;body&gt;&lt;p align=&#39;center&#39;&gt;&lt;span lang=&#39;en&#39;&gt;Hello&lt;/span&gt;, HTML&lt;/p&gt; Bye, bye&lt;/body&gt;&lt;/html&gt;`;for (let tag of extractTags(html)) {  console.log(tag);} | &lt;html&gt;&lt;body&gt;&lt;p align=&#39;center&#39;&gt;&lt;span lang=&#39;en&#39;&gt;&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt; |
