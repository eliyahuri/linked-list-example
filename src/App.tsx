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
      </main>

      <footer className="text-center py-4 bg-gray-100">
        <p className="text-sm sm:text-base text-gray-600">
          &copy; {new Date().getFullYear()} Eliyahu Huri - All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
