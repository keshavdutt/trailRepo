export const DATA = {
    array: [
        {
            type: 'heading',
            title: "Array",
            text: "",
        },
        {
            type: 'subheading',
            title: "1. What is an Array?",
            image: 'https://picsum.photos/seed/picsum/450/300',
            text: "An array is a collection of elements, each identified by an index or key. It stores multiple items of the same type together, enabling efficient access and manipulation. Arrays are one of the most fundamental data structures used in programming.",
        },
        {
            type: 'subheading',
            title: "1.1 Characteristics of Arrays",
            text: "Arrays have a fixed size, meaning the number of elements is defined at the time of creation. Each element in the array is stored in a contiguous memory location, allowing for fast random access via index.",
        },
        {
            type: 'subsubheading',
            title: "1.1.1 Fixed Size",
            text: "Once an array is declared, its size cannot be changed. This is why the size of the array must be known beforehand.",
            image: 'https://picsum.photos/500/250', // Example image for Fixed Size
        },
        {
            type: 'subheading',
            title: "1.1.2 Indexed Access",
            text: "Each element in an array can be accessed directly using its index. This allows for quick access and modification of any element, making arrays ideal for scenarios where speed is crucial.",
        },
        {
            type: 'subheading',
            title: "1.1.3 Homogeneous Elements",
            text: "All elements in an array are of the same data type, ensuring consistency. This makes it easier to perform bulk operations on the array's elements.",
            image: 'https://via.placeholder.com/150', // Example image for Homogeneous Elements
        },
        {
            type: 'subheading',
            title: "1.1.4 Contiguous Memory",
            text: "Arrays are stored in contiguous memory locations, which allows for efficient use of memory and faster access to elements using indexing.",
        },
        {
            type: 'subheading',
            title: "2. Common Operations on Arrays",
            text: "Some of the common operations that can be performed on arrays include insertion, deletion, traversal, searching, and sorting. Arrays are widely used because of their simplicity and ease of access.",
        },
        {
            type: 'subheading',
            title: "2.1 Insertion",
            text: "Elements can be inserted into an array at any given index. However, because arrays are of fixed size, inserting a new element requires shifting existing elements, which can be time-consuming for large arrays.",
        },
        {
            type: 'subheading',
            title: "2.2 Deletion",
            text: "Elements can be removed from an array by shifting other elements to fill the gap. This operation, similar to insertion, requires shifting elements and can be costly depending on the array size.",
        },
        {
            type: 'subheading',
            title: "2.3 Traversal",
            text: "Array traversal involves visiting each element in the array, usually to perform some operation (like printing or modifying values). This is a straightforward operation with a time complexity of O(n).",
        },
        {
            type: 'subheading',
            title: "2.4 Searching",
            text: "Searching involves finding a specific element within an array. There are two common approaches for searching: linear search and binary search. Linear search checks every element sequentially, while binary search is more efficient but requires the array to be sorted.",
        },
        {
            type: 'subheading',
            title: "2.5 Sorting",
            text: "Sorting rearranges the elements of the array in a specific order, often ascending or descending. Popular sorting algorithms include bubble sort, quicksort, and merge sort.",
        },
    ],
    linkedlist: [
        {
            type: 'heading',
            title: "Linked List",
            text: "",
        },
        {
            type: 'subheading',
            title: "1. What is a Linked List?",
            image: 'https://via.placeholder.com/150', // Example image for Fixed Size

            text: "A linked list is a linear data structure where elements are stored in nodes. Each node contains a data field and a reference (or link) to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory locations, allowing for dynamic memory allocation.",
        },
        {
            type: 'subheading',
            title: "2. Characteristics of Linked Lists",
            text: "Linked lists offer several advantages and characteristics, including dynamic size, ease of insertion and deletion, and efficient memory usage compared to arrays.",
        },
        {
            type: 'subheading',
            title: "2.1 Dynamic Size",
            text: "Linked lists can grow and shrink in size dynamically, allowing for efficient use of memory. This is in contrast to arrays, which have a fixed size once declared.",
        },
        {
            type: 'subheading',
            title: "2.2 Ease of Insertion and Deletion",
            image: 'https://via.placeholder.com/150', // Example image for Fixed Size
            text: "Insertion and deletion operations in linked lists are more efficient than in arrays. In a linked list, you can insert or delete nodes without shifting elements, making these operations O(1) in the best case.",
        },
        {
            type: 'subheading',
            title: "2.3 Memory Usage",
            image: 'https://via.placeholder.com/150', // Example image for Fixed Size

            text: "Since linked lists use pointers to connect nodes, they can be more memory-efficient in situations where the size of the data structure is unpredictable, avoiding the need for excess memory allocation as seen in static arrays.",
        },
        {
            type: 'subheading',
            title: "3. Types of Linked Lists",
            text: "There are several types of linked lists, including singly linked lists, doubly linked lists, and circular linked lists.",
        },
        {
            type: 'subheading',
            title: "3.1 Singly Linked List",
            text: "In a singly linked list, each node contains a single link to the next node. This is the simplest form of linked list.",
        },
        {
            type: 'subheading',
            title: "3.2 Doubly Linked List",
            text: "A doubly linked list contains nodes with two links: one to the next node and one to the previous node. This allows for bidirectional traversal.",
        },
        {
            type: 'subheading',
            title: "3.3 Circular Linked List",
            text: "In a circular linked list, the last node points back to the first node, creating a circular structure. This allows for more efficient operations in some scenarios.",
        },
        {
            type: 'subheading',
            title: "4. Common Operations on Linked Lists",
            text: "Common operations performed on linked lists include insertion, deletion, traversal, and searching.",
        },
        {
            type: 'subheading',
            title: "4.1 Insertion",
            text: "Insertion in a linked list can occur at the beginning, end, or at a specified index. Each method involves adjusting pointers to maintain the integrity of the list.",
        },
        {
            type: 'subheading',
            title: "4.2 Deletion",
            text: "Deletion also involves adjusting pointers to remove a node from the list. The time complexity is generally O(1) for deletion if the node to be deleted is known.",
        },
        {
            type: 'subheading',
            title: "4.3 Traversal",
            text: "Traversal of a linked list involves visiting each node, typically starting from the head. This can be done iteratively or recursively.",
        },
        {
            type: 'subheading',
            title: "4.4 Searching",
            text: "Searching for an element in a linked list requires linear time complexity, as each node must be visited until the target element is found.",
        },
    ],
    stack: [
        {
          type: 'heading',
          title: "Stack",
          text: "",
        },
        {
          type: 'subheading',
          title: "1. What is a Stack?",
          text: "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed.",
        },
        {
          type: 'subheading',
          title: "2. Characteristics of Stacks",
          text: "Stacks have several key characteristics, including the ability to perform operations such as push, pop, and peek.",
        },
        {
          type: 'subsubheading',
          title: "2.1 LIFO Principle",
          text: "The LIFO principle ensures that the most recently added element is the first to be removed. This is analogous to a stack of plates; you can only take the top plate off.",
        },
        {
          type: 'subsubheading',
          title: "2.2 Dynamic Size",
          text: "Stacks can be implemented using arrays or linked lists, allowing them to grow and shrink in size dynamically.",
        },
        {
          type: 'subheading',
          title: "3. Operations on Stacks",
          text: "The main operations that can be performed on a stack include pushing an element onto the stack, popping an element off the stack, and peeking at the top element without removing it.",
        },
        {
          type: 'subsubheading',
          title: "3.1 Push Operation",
          text: "The push operation adds an element to the top of the stack. This operation increases the stack's size by one.",
        },
        {
          type: 'subsubheading',
          title: "3.2 Pop Operation",
          text: "The pop operation removes the top element from the stack and returns it. If the stack is empty, this operation may raise an error or return a null value.",
        },
        {
          type: 'subsubheading',
          title: "3.3 Peek Operation",
          text: "The peek operation allows you to view the top element of the stack without removing it, which is useful for examining the most recent entry.",
        },
        {
          type: 'subheading',
          title: "4. Applications of Stacks",
          text: "Stacks are used in various applications, such as expression parsing, backtracking algorithms, and maintaining function calls.",
        },
        {
            type: 'summary',
            title: "Summary of Stacks",
            text: [
              "1. A stack is a LIFO data structure where the last element added is the first to be removed.",
              "2. Key operations include push (adding), pop (removing), and peek (viewing the top element).",
              "3. Stacks can be implemented using arrays or linked lists.",
              "4. Common applications include expression evaluation and function call management.",
            ]
        }
      ]
    // Other data structures can be added here
};
