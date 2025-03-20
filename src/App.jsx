import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(Function("return " + input)().toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Calculator</h2>
      <input 
        type="text" 
        value={input} 
        readOnly 
        style={{ width: "200px", fontSize: "20px", textAlign: "right" }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 50px)", gap: "10px", marginTop: "10px" }}>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button 
            key={char} 
            onClick={() => char === "=" ? handleCalculate() : handleClick(char)}
            style={{ padding: "15px", fontSize: "18px" }}
          >
            {char}
          </button>
        ))}
        <button onClick={handleClear} style={{ padding: "15px", fontSize: "18px", gridColumn: "span 4" }}>C</button>
      </div>
      
      {/* Chatbot Integration */}
      <div style={{ marginTop: "50px" }}>
        <h2>Chat with AI Assistant</h2>
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/BQ44XySk8fthRrzHQzoWh"
          width="100%"
          style={{ height: "700px", minHeight: "700px", border: "none" }}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
