import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setChatHistory((prev) => [...prev, userMessage]);
    setInput("");
    setHasStarted(true);
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      const data = await res.json();
      console.log("Bot Response:", data);

      const botMessage = {
        from: "bot",
        text: data.answer.description,
        url: data.answer.url || "",
        all_links: data.answer.all_links || [],
      };

      setChatHistory((prev) => [...prev, botMessage]);
    } catch (err) {
      setChatHistory((prev) => [
        ...prev,
        { from: "bot", text: "Maaf, terjadi kesalahan." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="app">
      <header className="header">
        <img src="./logo1.png" alt="Logo" className="logo" />
        <h1>
          <span>Agrobot</span> PTPN IV
        </h1>
      </header>

      <main className={`chat-area ${hasStarted ? "active" : "centered"}`}>
        {!hasStarted && (
          <div className="welcome-card">
            <h2>Selamat Datang di Agrobot PTPN IV! 🌾</h2>
            <p>
              Tanyakan apa saja seputar sistem, aplikasi, atau layanan PTPN IV
            </p>
          </div>
        )}

        {chatHistory.map((msg, idx) => {
          const isDuplicate =
            msg.all_links?.length === 1 &&
            msg.all_links[0].description === msg.text &&
            msg.all_links[0].url === msg.url;

          return (
            <div key={idx} className={`message ${msg.from}`}>
              {msg.text && (
                <p style={{ marginBottom: msg.url ? "6px" : "0" }}>
                  <strong>{msg.text}</strong>
                </p>
              )}

              {/* Main link button */}
              {msg.url && msg.url.trim() !== "" && (
                <a
                  href={msg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  🌐 Buka Dashboard
                </a>
              )}

              {/* Additional Links if any */}
              {msg.all_links?.length > 0 && !isDuplicate && (
                <ul className="link-list">
                  {msg.all_links.map((link, i) => (
                    <li key={i}>
                      <strong>{link.description}</strong>
                      <br />
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-button"
                      >
                        🌐 Buka Dashboard
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}

        {/* Typing bubble */}
        {isTyping && (
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <div ref={bottomRef} />
      </main>

      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          placeholder="Tulis pertanyaan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default App;
