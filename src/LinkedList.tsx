import { useState, type JSX } from "react";

interface Node {
  value: number;
  next: Node | null;
}

const LinkedList = () => {
  const [head, setHead] = useState<Node | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [isCircular, setIsCircular] = useState<boolean>(false);

  const addNode = (value: number) => {
    const newNode: Node = { value, next: null };
    if (!head) {
      setHead(newNode);
      if (isCircular) {
        newNode.next = newNode;
      }
    } else {
      let current = head;
      while (current.next && (!isCircular || current.next !== head)) {
        current = current.next;
      }
      current.next = newNode;
      if (isCircular) {
        newNode.next = head;
      }
    }
  };

  const handleRemoveNode = (value: number) => {
    if (!head) return;

    if (head.value === value) {
      if (isCircular && head.next === head) {
        setHead(null);
        return;
      }
      if (isCircular) {
        let current = head;
        while (current.next !== head) {
          current = current.next!;
        }
        current.next = head.next;
      }
      setHead(head.next);
      return;
    }

    let current = head;
    while (
      current.next &&
      (!isCircular || current.next !== head) &&
      current.next.value !== value
    ) {
      current = current.next;
    }

    if (current.next && current.next.value === value) {
      current.next = current.next.next;
    }
  };

  const renderList = (node: Node | null): JSX.Element[] => {
    const elements: JSX.Element[] = [];
    if (!node) return elements;

    let current = node;
    const visited = new Set<Node>();

    do {
      const currentNode = current;
      elements.push(
        <div
          key={`node-${currentNode.value}-${elements.length}`}
          className="node flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md"
        >
          <span className="text-lg font-semibold text-gray-800">
            {currentNode.value}
          </span>
          <button
            onClick={() => handleRemoveNode(currentNode.value)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors duration-200"
          >
            Remove
          </button>
          {currentNode.next && (!isCircular || currentNode.next !== head) && (
            <span className="arrow text-lg text-blue-500">→</span>
          )}
          {isCircular && currentNode.next === head && (
            <span className="arrow text-lg text-green-500">↺</span>
          )}
        </div>
      );

      visited.add(current);
      current = current.next!;
    } while (current && (!visited.has(current) || current === node));

    return elements;
  };

  return (
    <div className="linked-list p-6 max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Linked List Visualization
      </h1>
      <div className="input-container flex flex-wrap gap-4 mb-6">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a number"
        />
        <button
          onClick={() => {
            addNode(Number(inputValue));
            setInputValue("");
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          Add Node
        </button>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isCircular}
            onChange={(e) => setIsCircular(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="text-gray-700">Circular List</span>
        </label>
      </div>
      <div className="list-container flex flex-wrap gap-4 items-center">
        {renderList(head)}
      </div>
    </div>
  );
};

export default LinkedList;
