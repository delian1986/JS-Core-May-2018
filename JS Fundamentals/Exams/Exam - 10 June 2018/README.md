# JS Fundamentals Exam - 10 June 2018
test your solution here https://judge.softuni.bg/Contests/1066/JS-Fundamentals-Exam-10-June-2018

# Problem 1 – Travel Plans

_Mariyka really wishes to go on a world trip, but so far she&#39;s never had the chance and so she finally decided to give it a try. But as beginning she need to collect some money, right?_

Write a JavaScript program that calculates the **total amount** of **gold** Mariyka managed to collect. Mariyka is **specialized** in some professions, **average** in others and **clumsy** at yet others. Your program will receive an **array with professions and the amount of gold** for each activity. Mariyka is so good at her **Specialized** professions that **every second** customer of Specialized profession gives her **additional gold of cost: 200 gold right after she spend the gold mentioned below for candies**. She&#39;s as well so bad at her **Clumsy** professions that every **second** customer from the Clumsy professions gives her **5% less** of the first given amount and **every third – 10%.**

Also, Mariyka is **spending 20% of every** activity she does that she&#39;s **specialized** in, of course she spends them for candies.

Have in mind that Mariyka **does not** accept to work for **less** than **200 gold** in her **specialized** professions.

As **input** you will receive an array of strings.

Each string will consist of the following information with format:

&quot;Professions : Gold offered&quot;

Professions will be as follows:

Specialized:
Programming, Hardware maintenance, Cooking, Translating, Designing.
Average:
Driving, Managing, Fishing, Gardening.

Clumsy:
Singing, Accounting, Teaching, Exam-Making, Acting, Writing, Lecturing, Modeling, Nursing.

As output you need  to print the total cash Mariyka has made.

If the amount is less than 1000 gold , she need to collect more gold until she get enough. Else she will be able to move to the next task and start planning her travel!

### Input

You will receive **one argument–** an **array strings** as shown above.

### Output

Print on the **console** the total amount of **gold** and if Mariyka has collected **enough or not**.

The output should be **formatted** to the second delimiter.

### Constraints

- The **number** of **elements** in the **input argument** will be in range **[1..100] inclusive**
- There **will** be **no invalid**** input**
- There **will** be **no negative Gold**

### Examples

| **Input** |
| --- |
| [&quot;Programming : 500&quot;, &quot;Driving : 243&quot;, &quot;Singing : 100&quot;, &quot;Cooking : 199&quot;] |
| **Output** |
| Final sum: 743.00Mariyka need to earn 257.00 gold more to continue in the next task. |

| **Input** |
| --- |
| [&quot;Programming : 500&quot;, &quot;Driving : 243.55&quot;, &quot;Acting : 200&quot;, &quot;Singing : 100&quot;, &quot;Cooking : 199&#39;, &quot;Hardware maintenance : 800&quot;, &quot;Gardening : 700&quot;, &quot;Programming : 500&quot;] |
| **Output** |
| Final sum: 2878.55Mariyka earned 1878.55 gold more. |


# Problem 2 – Travel Investigation

_Mariyka has gathered some money already and now it&#39;s time for our next step. We need to make some investigation about the travel companies and pick some._

Write a JavaScript program that finds **specific unique companies** in a text. We need to **filter** our text so that we **separate** the **valid** and **invalid** sentences. Our **companies** will be separated by **exact delimiter**. The **rest of the input** will be **strings** which will be the text we will have to filter.

As **input** we will receive **array of strings**. On the **first** index of our array we always will be given the **companies** which will be a string ** separated by** the given on the **second** index **delimiter,**** followed by the sentences** we need to process.

The companies will always be given to lower.

Each string will consist of the following information with format:

[ &quot;company1@, company2@, company3&quot;,

&quot;@,  &quot;,

&quot;some text company1 more text company2 some more text company3&quot;]

As output you need  to print the valid sentences in format – &quot;ValidSentences&quot; followed by the numbered sentences each on a new line, a separator between the valid and invalid sentences in this case 30x&quot;=&quot;, followed by the &quot;InvalidSentences&quot; each on a new line and numbered.

Have in mind that there might be case of allValid or all Invalid sentences.

We consider Valid, a sentence which has all of the companies.

### Input

You will receive **one argument –** an **array strings** as shown above.

### Output

Print on the **console** the **Valid** sentences if you found any, the delimiter shown above and the **Invalid** sentences if you found any.

### Constraints

- The **number** of **sentences** in the **input argument** will be in range **[1..15] inclusive**
- There **will** be **no invalid**** input**
- There **will** be **no repeated companies**

### Examples

| **Input** |
| --- |
| [&quot;bulgariatour@, minkatrans@, koftipochivkaltd&quot;,&quot;@,&quot;,&quot;Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour&quot;,&quot;dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans&quot;,&quot;someone continues as no &quot;] |
| **Output** |
| ValidSentences1.mincho  e koftipochivkaltd tip 123  ve minkatrans bulgariaatour==============================InvalidSentences1. dqdo mraz  some text but is koftipochivkaltd minkatrans2. someone continues as no |

| **Input** |
| --- |
| [&quot;bulgariatour@, minkatrans@, koftipochivkaltd&quot;,&quot;@,&quot;,&quot;Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour&quot;,&quot;We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour&quot;,&quot;dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS&quot;] |
| **Output** |
| ValidSentences1. mincho  e koftipochivkaltd tip 123  ve minkatrans bulgariatour2. we will koftipochivkaltd traavel e expenses no minkatrans mu e bulgariatour3. dqdo bulgariatour mraz  some text but is koftipochivkaltd minkatrans |




# Problem 3 – Minke, decode

_Minka was kidnapped by some crazy coders just before her travel. They tasked her to decode her travel destination or she can&#39;t go. She is in dire straits and you have to help her:_

You will recieve a **string** with the еncrypted message which contains **the encrypted country** and the code that need to be decrypted . The **country** will always **starts** with capital letter and **end** with capital letter. You&#39;ll recieve char **starting point** and char **end points** with which you will decode the country.

Example for country is MolgarA which needs to become MoldovA

For **example** in the input we will recieve **char start point**** -3 ** which is the letter** g **and** char end point ****- 5** which is **r**. We need to **replace** everything from g to r with &quot;dov&quot; which will be given in the input aswell.

The final result must be **Moldova** (the last char needs to be lowered).

The second part is to **decode**** the numbers **from the** input string **. To extract the numbers from the input string you need to** match every three-digit number**(**whole **or** fracti ****onal** ).

 If the number is **fractional** you have to  round it up. When you receive all maches they need to be decoded from **ascii to text** and print it next to the country **capitalized** and **separated by &quot; =\&gt;**&quot;.

## Input

- The input will consist of **array of strings, containing** 4 strings:
- First is char **start point** for the country decoding:
- Second is char **end point** for the country decoding:
- Third is the **right word** :
- Fourth is the **encrypted text** :

## Constraints

- There will be always only one country in the input.
- The separator for the fractional num will always be dot
- All inputs in the array will be string

## Examples

| **Input** | **Output** |
| --- | --- |
| [&quot;3&quot;, &quot;5&quot;, &quot;gar&quot;,&quot;114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he&quot;] | Bulgaria =\&gt; Ruse |
| [&quot;1&quot;, &quot;4&quot;,&quot;loveni&quot;, &quot;SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he&quot;] | Slovenia =\&gt; Lom |


# Problem 4 – Travel Time

_It&#39;s finally time for Mariyka__ь_ _to organize her traveling plans. So far we already know that she wishes to go on a world trip and she already collected some money and made some useful research for the traveling destinations. To organize her plans and travel route she need your great help. So, let&#39;s begin….._

Write a JavaScript program that **collects** and **orders** information about traveling destinations.

As **input** you will receive an array of strings.

Each string will consist of the following information with format:

&quot;Country name \&gt; Town name \&gt; Travel cost&quot;

Country name will be unique string, Town name will also be unique string, Travel cost will be a number.

If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one Country may have several Towns to visit.

If you receive Town name starting with lower case letter ,you should make it to upper, as shown in the example above.

After you finish the organizational part, you need to let Mariyka know which destination point to visit first.. The order will be as follows:  First sort Country names **alphabetically** and then sort Town names by **lowest** Travel cost.

### Input

You will receive **one argument–** an **array strings** as shown above.

### Output

Print on the **console** the information you&#39;ve collected, **sorted** by the given rules, **formatted** as seen in the examples.

### Constraints

- The **number** of **elements** in the **input argument** will be in range **[1..100] inclusive**
- There **will** be **no invalid**** input**
- There **will** be **no negative Travel cost**

### Examples

| **Input** |
| --- |
| [&quot;Bulgaria \&gt; Sofia \&gt; 500&quot;,&quot;Bulgaria \&gt; Sopot \&gt; 800&quot;,&quot;France \&gt; Paris \&gt; 2000&quot;,&quot;Albania \&gt; Tirana \&gt; 1000&quot;,&quot;Bulgaria \&gt; Sofia \&gt; 200&quot;]  |
| **Output** |
| Albania -\&gt; Tirana -\&gt; 1000Bulgaria -\&gt; Sofia -\&gt; 200 Sopot -\&gt; 800France -\&gt; Paris -\&gt; 2000 |
