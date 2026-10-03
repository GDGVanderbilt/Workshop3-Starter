import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const sayHello = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();

    alert(data.message);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <button
        onClick={sayHello}
        className="rounded-lg bg-red-500 px-4 py-2 font-medium"
      >
        Call Backend
      </button>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);