# 1.JS Advanced: Exam 18 March 2018

Problems for exam preparation for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/974/](https://judge.softuni.bg/Contests/974/).

# 2.Problem 2. Payment Package (Unit Testing)

You are given the following **JavaScript class** :

| PaymentPackage.js |
| --- |
| **class** PaymentPackage {
  constructor(name, value) {
     **this**.name = name;
     **this**.value = value;
     **this**.VAT = 20;      _// Default value
    _ **this**.active = **true** ; _// Default value
  _ }

   **get** name() {
     **return this**. **\_name** ;
  }

   **set** name(newValue) {
     **if** ( **typeof** newValue !== **&#39;string&#39;** ) {
       **throw new** Error( **&#39;Name must be a non-empty string&#39;** );
    }
     **if** (newValue.length === 0) {
       **throw new** Error( **&#39;Name must be a non-empty string&#39;** );
    }
     **this**. **\_name** = newValue;
  }

   **get** value() {
     **return this**. **\_value** ;
  }

   **set** value(newValue) {
     **if** ( **typeof** newValue !== **&#39;number&#39;** ) {
       **throw new** Error( **&#39;Value must be a non-negative number&#39;** );
    }
     **if** (newValue &lt; 0) {
       **throw new** Error( **&#39;Value must be a non-negative number&#39;** );
    }
     **this**. **\_value** = newValue;
  }

   **get** VAT() {
     **return this**. **\_VAT** ;
  }

   **set** VAT(newValue) {
     **if** ( **typeof** newValue !== **&#39;number&#39;** ) {
       **throw new** Error( **&#39;VAT must be a non-negative number&#39;** );
    }
     **if** (newValue &lt; 0) {
       **throw new** Error( **&#39;VAT must be a non-negative number&#39;** );
    }
     **this**. **\_VAT** = newValue;
  }

   **get** active() {
     **return this**. **\_active** ;
  }

   **set** active(newValue) {
     **if** ( **typeof** newValue !== **&#39;boolean&#39;** ) {
       **throw new** Error( **&#39;Active status must be a boolean&#39;** );
    }
     **this**. **\_active** = newValue;
  }

  toString() {
     **const** output = [
       **`Package:** ${ **this**.name} **`** + ( **this**.active === **false**? **&#39; (inactive)&#39;** : **&#39;&#39;** ),
      **`- Value (excl. VAT):** ${ **this**.value} **`** ,
      **`- Value (VAT** ${ **this**.VAT}**%):** ${ **this**.value \* (1 + **this**.VAT / 100)}**`
    ** ];
     **return** output.join( **&#39;**** \n ****&#39;** );
  }
} |

### Functionality

The above code defines a **class** that contains information about a **payment package**. An **instance** of the class should support the following operations:

- Can be **instantiated** with two parameters – a string name and number value
- Accessor **name** – used to get and set the value of name
- Accessor **value** – used to get and set the value of value
- Accessor **VAT** – used to get and set the value of VAT
- Accessor **active** – used to get and set the value of active
- Function **toString()** – return a string, containing an overview of the instance; if the package is **not active** , append the label &quot;**(inactive)**&quot; to the printed **name**

When creating an instance, or changing any of the property values, the parameters are validated. They must follow these rules:

- **name** – non-empty string
- **value** – non-negative number
- **VAT** – non-negative number
- **active** – Boolean

If any of the requirements aren&#39;t met, the operation must throw an error.

**_Scroll down for examples and details about submitting to Judge._**

### Examples

This is an example how this code is **intended to be used** :

| Sample code usage |
| --- |
| _// Should throw an error_
**try** {
     **const**  **hrPack** = **new** PaymentPackage( **&#39;HR Services&#39;** );
} **catch** (err) {
     **console**.log( **&#39;Error: &#39;** + err. **message** );
}
**const**  **packages** = [
     **new** PaymentPackage( **&#39;HR Services&#39;** , 1500),
     **new** PaymentPackage( **&#39;Consultation&#39;** , 800),
     **new** PaymentPackage( **&#39;Partnership Fee&#39;** , 7000),
];
**console**.log( **packages**.join( **&#39;**** \n ****&#39;** ));

**const**  **wrongPack** = **new** PaymentPackage( **&#39;Transfer Fee&#39;** , 100);
_// Should throw an error_
**try** {
     **wrongPack**.active = **null** ;
} **catch** (err) {
     **console**.log( **&#39;Error: &#39;** + err. **message** );
} |
| Corresponding output |
| Error: Value must be a non-negative numberPackage: HR Services- Value (excl. VAT): 1500- Value (VAT 20%): 1800Package: Consultation- Value (excl. VAT): 800- Value (VAT 20%): 960Package: Partnership Fee- Value (excl. VAT): 7000- Value (VAT 20%): 8400Error: Active status must be a boolean |

### Your Task

Using **Mocha** and **Chai** write **JS unit tests** to test the entire functionality of the **PaymentPackage** class. Make sure instances of it have all the required functionality and validation. You may use the following code as a template:

| describe( **&quot;**** TODO **** …&quot; **,** function**() {
     **it** ( **&quot;**** TODO … ****&quot;** , **function** () {        _//_ **TODO:** …    });
    _//_ **TODO:** …}); |
| --- |

### Submission

Submit your tests inside a **describe()** statement, as shown above.
