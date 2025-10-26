import { useState } from "react";
import { generateResponse } from "./api";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const output = await generateResponse(prompt);
      setResponse(output);
    } catch (err) {
      console.error(err);
      setResponse("❌ Error generating response.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🤖 AI Playground</h1>
      <p className="subtitle">
        A tiny, flexible interface to try your prompts with any backend.
      </p>
      <form onSubmit={handleSubmit} className="prompt-form">
        <textarea
          aria-label="Prompt input"
          placeholder="Type your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="actions">
          <button type="submit" disabled={loading}>
            {loading ? "Thinking..." : "Generate"}
          </button>
          <button
            type="button"
            className="secondary"
            onClick={() => { setPrompt(""); setResponse(""); }}
            disabled={loading}
          >
            Clear
          </button>
        </div>
      </form>
      {response && (
        <div className="response-box" role="region" aria-live="polite">
          <h3>Response</h3>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}
