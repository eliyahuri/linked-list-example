import LinkedList from "./LinkedList";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Analytics />
      <header className="text-center py-6 bg-blue-600 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Understanding Linked Lists
        </h1>
        <p className="mt-2 text-lg">An Interactive Guide by Eliyahu</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            What are Linked Lists?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            A linked list is a fundamental data structure that represents a
            sequence of elements, called nodes. Each node contains two main
            components:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Data: The actual value stored in the node</li>
              <li>Reference: A pointer to the next node in the sequence</li>
            </ul>
          </p>
        </section>

        {/* Types of Linked Lists Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Types of Linked Lists
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Single Linked List */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">Single Linked List</h3>
              <p>
                Each node points to the next node in the sequence. The last node
                points to null.
              </p>
            </div>

            {/* Doubly Linked List */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">Doubly Linked List</h3>
              <p>
                Each node has two references: one to the next node and one to
                the previous node.
              </p>
            </div>

            {/* Circular Linked List */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">Circular Linked List</h3>
              <p>
                The last node points back to the first node, creating a circular
                structure.
              </p>
            </div>
          </div>
        </section>
        {/* Interactive Demo Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Interactive Demo
          </h2>
          <LinkedList />
        </section>

        {/* Linked List Implementation Examples Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Linked List Implementation Examples
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* JavaScript Example */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">JavaScript</h3>
              <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-sm">
                <code>{`class Node {
                            constructor(data) {
                              this.data = data;
                              this.next = null;
                              }
                              }
                                          
                          class LinkedList {
                            constructor() {
                              this.head = null;
                            }
                          }`}</code>
              </pre>
            </div>

            {/* TypeScript Example */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">TypeScript</h3>
              <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-sm">
                <code>{`class Node<T> {
  data: T;
  next: Node<T> | null;
  
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}`}</code>
              </pre>
            </div>

            {/* Python Example */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">Python</h3>
              <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-sm">
                <code>{`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None`}</code>
              </pre>
            </div>

            {/* Java Example */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">Java</h3>
              <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-sm">
                <code>{`public class Node<T> {
    T data;
    Node<T> next;
    
    public Node(T data) {
        this.data = data;
        this.next = null;
    }
}`}</code>
              </pre>
            </div>

            {/* C# Example */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">C#</h3>
              <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-sm">
                <code>{`public class Node<T>
{
    public T Data { get; set; }
    public Node<T> Next { get; set; }
    
    public Node(T data)
    {
        Data = data;
        Next = null;
    }
}`}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-4 bg-gray-100">
        <p className="text-sm sm:text-base text-gray-600">
          &copy; {new Date().getFullYear()} Eliyahu Huri - All Rights Reserved
        </p>
        <p className="text-sm sm:text-base text-gray-600">
          <a
            href="https://github.com/eliyahuri/linked-list-example"
            className="text-blue-600 underline"
          >
            {" "}
            Please star me on GitHub
          </a>
          !
        </p>
      </footer>
    </div>
  );
}

export default App;
