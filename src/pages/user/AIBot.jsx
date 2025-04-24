import React, { useState } from "react";
import { apiChat } from "../../services/auth";
import { useNavigate } from "react-router";

const AIBot = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const res = await apiChat(input);
      const botReply = {
        sender: "bot",
        text: res.data.reply.replace(/\d+\./g, "\n\n$&") // space out numbered points
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur rounded-xl shadow-xl p-6 flex flex-col justify-between h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-800">
            DreloBot <span role="img" aria-label="bot">🤖</span>
          </h2>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back to Home
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 whitespace-pre-line rounded-lg max-w-xl shadow-sm ${
                msg.sender === "user" ? "bg-purple-100 ml-auto text-right" : "bg-gray-100 mr-auto text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="bg-gray-100 mr-auto text-left p-3 rounded-lg max-w-xs shadow-md animate-pulse">
              Thinking...
            </div>
          )}
        </div>

        <div className="flex gap-3 items-center mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask me something like: 'suggest places in Tamale'"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`px-6 py-2 rounded-lg text-white shadow-md transition ${
              loading ? "bg-purple-400" : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIBot;
