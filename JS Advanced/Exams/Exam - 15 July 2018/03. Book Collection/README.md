# 1.JS Advanced: Exam 15 July 2018

# 2.Problem 3. Book Collection

Write a **JavaScript class**** BookCollection **which holds a list containing shelf information** ( ****shelfGenre, room,**** shelfCapacity****).**

| **class** BookCollection {
    _//_ **TODO: implement this class**
} |
| --- |

Each **BookCollection** is located in specific room, on a shelf with defined capacity and shelf name. Implement the following features:

- **Constructor** – It should contain the following properties – **room** (String), **shelfGenre** (String), **shelf** (an array), **shelfCapacity** (Number). If the room is: &quot; **livingRoom**&quot; or &quot; **bedRoom**&quot; or &quot; **closet**&quot;, create the shelf&#39;s genre, room and shelf capacity. If it **is**** not,** throw &quot;Cannot have book shelf in {room&#39;s name}&quot;. Shelf capacity will always be a valid positive number.
- Method **addBook(bookName,****bookAuthor, genre) **– adds book to the shelf only if there&#39;s enough space in the shelf. If the shelf is full, remove the** first **book to make space for the** new **one.** The genre is optional **. In the end,** sort **our shelf** alphabetically **by** book author&#39;s name**.
- Method **throwAwayBook(bookName) – removes** a book from the shelf by the given name.
- Method **showBooks(genre) –** returns all books by the given genre. You should return a string with the following information:

|    &quot;Results for search &quot;{history}&quot;:&quot;   &quot;\uD83D\uDCD6 {bookAuthor} – &quot;{bookName}&quot;&quot;   … |
| --- |

- Accessor property **shelfCondition** – returns the **count** of **free slots** left in the shelf.
- Method **toString()** – returns the **text**** representation** of the shelf in the following format:
  - Empty shelf:

|   &quot; **It&#39;s an empty shelf**&quot; |
| --- |

-
  - Non-empty shelf:

|    &quot;&quot;{shelfGenre}&quot;shelfin {room} contains:&quot;   &quot;\uD83D\uDCD6 &quot;{bookName}&quot; – {bookAuthor}&quot;   … |
| --- |

### Examples

This is an example of how the **BookCollection** class is **intended to be used** :

| Sample code usage |
| --- |
| **let**  **livingRoom** = **new** BookCollection( **&quot;Programming&quot;** , **&quot;livingRoom&quot;** , 5)
    .addBook( **&quot;Introduction to Programming with C#&quot;** , **&quot;Svetlin Nakov&quot;** )
    .addBook( **&quot;Introduction to Programming with Java&quot;** , **&quot;Svetlin Nakov&quot;** )
    .addBook( **&quot;Programming for .NET Framework&quot;** , **&quot;Svetlin Nakov&quot;** );
**console**.log( **livingRoom**.toString()); |

| Corresponding output |
| --- |
| &quot;Programming&quot; shelf in livingRoom contains:📖 &quot;Introduction to Programming with C#&quot; - Svetlin Nakov📖 &quot;Introduction to Programming with Java&quot; - Svetlin Nakov📖 &quot;Programming for .NET Framework&quot; - Svetlin Nakov |

| Sample code usage |
| --- |
| **let**  **garden** = **new** BookCollection( **&quot;Programming&quot;** , **&quot;garden&quot;** ); |
| Corresponding output |
| &quot;Cannot have book shelf in garden&quot; |

| Sample code usage |
| --- |
| **let**  **bedRoom** = **new** BookCollection( **&#39;Mixed&#39;** , **&#39;bedRoom&#39;** , 5);
**bedRoom**.addBook( **&quot;John Adams&quot;** , **&quot;David McCullough&quot;** , **&quot;history&quot;** );
**bedRoom**.addBook( **&quot;The Guns of August&quot;** , **&quot;Cuentos para pensar&quot;** , **&quot;history&quot;** );
**bedRoom**.addBook( **&quot;Atlas of Remote Islands&quot;** , **&quot;Judith Schalansky&quot;** );
**bedRoom**.addBook( **&quot;Paddle-to-the-Sea&quot;** , **&quot;Holling Clancy Holling&quot;** );
**console**.log( **&quot;Shelf&#39;s capacity: &quot;** + **bedRoom**.shelfCondition);
**console**.log( **bedRoom**.showBooks( **&quot;history&quot;** )); |
| Corresponding output |
| Shelf&#39;s capacity: 1Results for search &quot;history&quot;:📖 Cuentos para pensar - &quot;The Guns of August&quot;📖 David McCullough - &quot;John Adams&quot; |

### Submission

Submit your class **BookCollection** as &quot; **JavaScript code**&quot;.

### Notes

Use the following Unicode for visualizing the book icon: **&quot;\uD83D\uDCD6&quot;.**

**No invalid input will be given.**
