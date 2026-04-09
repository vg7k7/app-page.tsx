"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);

  const analyze = () => {
    // Simple logic (you can upgrade later)
    setResult({
      score: 68,
      risk: "Weak differentiation in a crowded market",
      bias: "Possible overconfidence detected",
      action: "Test with 5 real users before building",
      reflection: "What unique value do you offer that competitors don’t?"
    });
  };

  return (
    <main style={{
      maxWidth: "600px",
      margin: "50px auto",
      fontFamily: "Arial, sans-serif",
      padding: "20px"
    }}>
      
      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
        Make better decisions
      </h1>

      <p style={{ color: "gray", marginBottom: "20px" }}>
        Describe your idea and get instant insights
      </p>

      <textarea
        style={{
          width: "100%",
          padding: "12px",
          height: "120px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "15px"
        }}
        placeholder="Describe your idea or decision..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={analyze}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Analyze My Decision
      </button>

      {result && (
        <div style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #eee",
          borderRadius: "10px"
        }}>
          
          <h3>🛡 Decision Score: {result.score} / 100</h3>

          <p><strong>⚠ Risk:</strong> {result.risk}</p>

          <p><strong>🧠 Cognitive Signal:</strong> {result.bias}</p>

          <p><strong>🚀 Suggested Action:</strong> {result.action}</p>

          <p><strong>❓ Reflection:</strong> {result.reflection}</p>

          <div style={{ marginTop: "20px" }}>
            <p>Did this help your decision?</p>
            <button style={{ marginRight: "10px" }}>Yes</button>
            <button>No</button>
          </div>

          <p style={{ marginTop: "15px", fontSize: "12px", color: "gray" }}>
            Supports your decision-making process — does not replace it.
          </p>

        </div>
      )}
    </main>
  );
}
