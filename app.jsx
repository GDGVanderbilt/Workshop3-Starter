import React from "react";
import ReactDOM from "react-dom/client";
import "./colors.css";

function App() {
  const sayHello = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();

    alert(data.message);
  };

  return (
    <main className="flex min-h-screen items-start justify-center bg-dark text-muted p-8">
      <div className="w-full max-w-[600px] rounded-xl bg-surface border-2 border-outline p-3">
        <input type="text" placeholder="Any thoughts..." className="outline-0 focus:outline-0 w-full mb-2">
        </input>
        <div className="ml-auto px-2.25 py-1 w-fit rounded-lg bg-accent flex justify-center items-center text-dark text-sm cursor-pointer" onClick={sayHello}>
          Save
        </div>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
