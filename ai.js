import { useState } from "react";
import axios from "axios";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/ai/chat`, { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error fetching AI response", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="border p-2 w-full mb-4"></textarea>
      <button onClick={sendMessage} className="bg-blue-500 text-white p-2">Send</button>
      <p className="mt-4">{response}</p>
    </div>
  );
}