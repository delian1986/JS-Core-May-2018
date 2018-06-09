# Problem 1 – Gladiator Expenses

As a gladiator, Pesho has to repair his broken equipment when he loses a fight. His equipment consists of helmet, sword, shield and armor. You will receive the Pesho`s **lost fights count**.

Every **second** lost game, his helmet is broken.

Every **third** lost game, his sword is broken.

When both **his sword and helmet are broken** in the same lost fight, his **shield also brakes**.

**Every**** second time**, when his shield brakes, his armor also needs to be repaired.

You will receive the price of each item in his equipment. Calculate his expenses for the yearfor renewing his equipment.

## Input / Constraints

You will receive 5 parameters to your function:

- First parameter – **lost fights count** – integer in the range **[0****, **** 1000]**.
- Second parameter – **helmet price** - floating point number in range **[0, 100****0****]**.
- Third parameter – **sword price** - floating point number in range **[0, 100****0****]**.
- Fourth parameter – **shield price** - floating point number in range **[0, 100****0****]**.
- Fifth parameter – **armor price** - floating point number in range **[0, 100****0****]**.

## Output

- As output you must print Pesho`s total expenses for new equipment: **&quot;Gladiator expenses: {expenses} aureus&quot;**

- Allowed working **time** / **memory** : **100ms** / **16MB**.

## Examples

| **Input** | **Output** | **Comment** |
| --- | --- | --- |
| 72345 | Gladiator expenses: 16.00 aureus | Trashed helmet -&gt; 3 timesTrashed sword -&gt; 2 timesTrashed shield -&gt; 1 timeTotal: 6 + 6 + 4 = 16.00 aureus; |
| 2312.5021.5040200 | Gladiator expenses: 608.00 aureus |   |




# Problem 2 – Gladiator Inventory

As a gladiator, Pesho has cool Inventory. He loves to buy new equipment. You are given Pesho`s inventory with allof his equipment -&gt; strings, separated by whitespace. Until you receive **&quot;Fight!&quot;** you will be receiving commands which Pesho does with his inventory.

You may receive the following commands:

- Buy {equipment}
- Trash {equipment}
- Repair {equipment}
- Upgrade {equipment}-{upgrade}

If you receive **Buy command** , you should **add** the equipment at last position in the inventory, but only if it isn`t bought already.

If you receive **Trash command** , **delete** the equipment if it exists.

If you receive **Repair command** , you should **Repair** the equipment if it exists and place it on **last position**.

If you receive **Upgrade command** , you should check if the equipment exists and **insert** after it the upgrade in the following format: &quot; **{equipment}:{upgrade}&quot;;**

## Input / Consrtaints

You will receive an **array of strings**. Each element of the array is a command.

- In the **first input element,** you will receive Pesho`s **inventory** – sequence of equipment names, separated by space.
- Each following element, until you receive **&quot;Fight!&quot;** will be a **command**.

## Output

- As output you must print Pesho`s **inventory**.

## Constraints

- The **command will always be valid.**
- The **equipment** and **Upgrade** will be strings and will contain any character, except **&#39;-&#39;**.

- Allowed working **time** / **memory** : **100ms** / **16MB**.

**_Scroll down to see examples._**

## Examples

| **Input** | **Output** | **Comment** |
| --- | --- | --- |
| SWORD Shield SpearBuy BagTrash ShieldRepair SpearUpgrade SWORD-SteelFight! | SWORD SWORD:Steel Bag Spear | We receive the inventory =&gt; SWORD, Shield, SpearWe Buy Bag =&gt; SWORD, Shield, Spear, BagTrash Shield =&gt; SWORD, Spear, BagRepair Spear =&gt; SWORD, Bag, SpearWe add Upgrade =&gt; SWORD, SWORD:Steel, Bag,SpearWe print the inventory. |
| SWORD Shield SpearTrash BowRepair ShieldUpgrade Helmet-VFight! | SWORD Spear Shield |   |



# Problem 3 – Ancient VS Memory

As a gladiator, Pesho is thrilled with ancient scrolls and is excited to have deeper understanding of the encoded knowledge, so he started digging. But because he can`t read the ancient computer codes, you should write a programm which transforms it in readable form.

You will receive lines from the ancient memory view in 2-byte integer unsigned display. Each line consists of exactly 22 integers, separated by whitespace. You should find every string in the whole input and print them on the console.

Every string starts with -&gt; **&quot;**** 32656 19759 32763 ****&quot;**

After the pointer there is one zero and the size of the string -&gt; **&quot;0 5&quot;**

After the size of string there is one more zero and on the next n columns are the integers for

each character -&gt; **&quot; 0 80 101 115 104 111&quot;**

The above example is the string &quot;Pesho&quot;.

You must find all strings and display them on the console, using the ASCII code for each character **.**

## Input

- The input will consist of **an array of strings, containing 22 integers each, separated by whitespaces**.

## Output

- You should print on a new line every string you`ve found in the input in their order of appearance.

## Constraints

- The lines of the input may contain any 32-bit integer.

- Allowed working **time** / **memory** : **100ms** / **16MB**.

## Examples

| **Input** | **Output** |
| --- | --- |
| 32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 00 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0 | PeshoSoftuni |
| 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 05 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 075 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 | GoshoKiroVeronika |


# Problem 4 – Arena Tier

Pesho is a pro gladiator, he is struggling to become master of the Arena. // TODO some more story

You will receive **several input lines** in one of the following formats:

&quot;{gladiator} -&gt; {technique} -&gt; {skill}&quot;

&quot;{gladiator} vs {gladiator}&quot;

The **gladiator and technique** are strings, the given **skill** will be an integer number. You need to keep track of **every gladiator**.

When you receive a **gladiator and his technique and skill** , add him to the gladiator pool, if he isn`t present, else add his technique or update his skill, only if the current technique skill is lower than the new value.

If you receive **&quot;{gladiator} vs {gladiator}&quot;** and both gladiators exist in the tier, they duel with the following rules:

Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted from the tier -&gt; remove him.

If they don`t have techniques in common, the duel isn`t happening and both continue in the Season.

You should end your program when you receive the command **&quot;Ave Cesar&quot;**. At that point you should print the gladiators, **ordered by total skill in desecending order, then ordered by name in ascending order**. Foreach gladiator print their technique and skill, **ordered desecending, then ordered by technique name in ascending order**

## Input / Constraints

You will receive an **array of strings** as a parameter to your solution.

- The input comes in the form of commands in one of the formats specified above.
- Gladiator and technique **will always be one word string, containing no whitespaces**.
- Skill will be an **integer** in the **range [0, 1000]**.
- There will be **no invalid** input lines.
- The programm ends when you receive the command **&quot;Ave Cesar&quot;**.


## Output

- The output format for each gladiator is:

&quot;{gladiator}: {totalSkill} skill&quot;

&quot;- {technique} &lt;!&gt; {skill}&quot;

**Scroll down to see examples.**

## Examples

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| Pesho -&gt; BattleCry -&gt; 400Gosho -&gt; PowerPunch -&gt; 300Stamat -&gt; Duck -&gt; 200Stamat -&gt; Tiger -&gt; 250Ave Cesar | Stamat: 450 skill- Tiger &lt;!&gt; 250- Duck &lt;!&gt; 200Pesho: 400 skill- BattleCry &lt;!&gt; 400Gosho: 300 skill- PowerPunch &lt;!&gt; 300 | We order the gladiators by total skill points descending, then by name. We print every technique along its skill ordered descending by skill, then by technique name. |
| **Input** | **Output** |   |
| Pesho -&gt; Duck -&gt; 400Julius -&gt; Shield -&gt; 150Gladius -&gt; Heal -&gt; 200Gladius -&gt; Support -&gt; 250Gladius -&gt; Shield -&gt; 250Pesho vs GladiusGladius vs JuliusGladius vs GoshoAve Cesar | Gladius: 700 skill- Support &lt;!&gt; 250- Shield &lt;!&gt; 250- Heal &lt;!&gt; 200Pesho: 400 skill- Duck &lt;!&gt; 400 | Gladius and Pesho don`t have common technique, so the duel isn`t valid.Gladius wins vs Julius /common technique: &quot;Shield&quot;. Julius is demoted.Gosho doesn`t exist so the duel isn`t valid.We print every gladiator left in the tier. |
