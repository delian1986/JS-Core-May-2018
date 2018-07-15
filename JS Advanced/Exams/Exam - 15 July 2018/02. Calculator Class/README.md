# 1.JS Advanced: Exam 15 July 2018

# 2.Problem 2. Calculator (Unit Testing)

You are given the following **JavaScript class** :

| Calculator.js |
| --- |
| **class** Calculator {
    constructor() {
         **this**. **expenses** = [];
    }

    add(data) {
         **this**. **expenses**.push(data);
    }

    divideNums() {
         **let** divide;
         **for** ( **let** i = 0; i &lt; **this**. **expenses**.length; i++) {
             **if** ( **typeof** ( **this**. **expenses** [i]) === **&#39;number&#39;** ) {
                 **if** (i === 0 || divide=== **undefined** ) {
                    divide = **this**. **expenses** [i];
                } **else** {
                     **if** ( **this**. **expenses** [i] === 0) {
                         **return**  **&#39;Cannot divide by zero&#39;** ;
                    }
                    divide /= **this**. **expenses** [i];
                }
            }
        }
         **if** (divide !== **undefined** ) {
             **this**. **expenses** = [divide];
             **return** divide;
        } **else** {
           **throw new** Error( **&#39;There are no numbers in the array!&#39;** )
        }
    }
    toString() {
         **if** ( **this**. **expenses**.length &gt; 0)
             **return this**. **expenses**.join( **&quot; -&gt; &quot;** );
         **else return**  **&#39;empty array&#39;** ;
    }
    orderBy() {
         **if** ( **this**. **expenses**.length &gt; 0) {
             **let** isNumber = **true** ;
             **for** ( **let** data **of this**. **expenses** ) {
                 **if** ( **typeof** data !== **&#39;number&#39;** )
                    isNumber = **false** ;
            }
             **if** (isNumber) {
                 **return this**. **expenses**.sort((a, b) =&gt; a - b).join( **&#39;, &#39;** );
            }
             **else** {
                 **return this**. **expenses**.sort().join( **&#39;, &#39;** );
            }
        }
         **else return**  **&#39;empty&#39;** ;
    }
} |

### Functionality

The above code defines a **class** that holds items (of **any** type). An **instance** of the class should support the following operations:

- Contains a property **expenses** that is initialized to an **empty** array.
- Function**add(data)** – **adds** the passed in **item** (of **any** type) to the **expenses**.
- Function **divideNums()** – divides **only** the **numbers** from the **expenses**  and returns the result. If there are no numbers in the array, the function throws the following error: **&quot;**** There are no numbers in the array! ****&quot;**
- Function**toString()**– **returns** a string, containing a list of all items from the expenses, joined with

an **arrow: &quot; -&gt; &quot;**. If there are **no** items stored, it should **return** the string **&quot;empty array&quot;.**

- Function **orderBy()** – **returns a string joined with &quot;, &quot;** which is the **sorted expenses,** sorting them by **two criteria** - one for **numbers** and another for **mixed** data.

### Examples

This is an example how this code is **intended to be used** :

| Sample code usage |
| --- |
| **let**  **output** = **new** Calculator();
**output**.add(10);
**output**.add( **&quot;Pesho&quot;** );
**output**.add( **&quot;5&quot;** );
**console**.log( **output**.toString());
**output**.add(10);
**console**.log( **output**.divideNums());
**output**.add(1);
**console**.log( **output**.orderBy());
**console**.log( **output**.toString()); |
| Corresponding output |
| 10 -&gt; Pesho -&gt; 511, 11 -&gt; 1 |

### Your Task

Using **Mocha** and **Chai** write **JS unit tests** to test the entire functionality of the **Calculator** class. You may use the following code as a template:

| describe( **&quot;**** TODO **** …&quot; **,** function**() {
     **it** ( **&quot;**** TODO … ****&quot;** , **function** () {        _//_ **TODO:** …    });
    _//_ **TODO:** …}); |
| --- |

### Submission

Submit your tests inside a **describe()** statement, as shown above.

### Notes

The methods should function correctly for **positive** , **negative** and **floating point** numbers. In case of **floating point** numbers the result should be considered correct if it is **within 0.01** of the correct value.

**There will be no function chaining.**
