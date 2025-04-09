import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./scrollbar.css";

const ChatbotDetail = () => {
  const { id } = useParams();
  const [activeKnowledgeBase, setActiveKnowledgeBase] = useState(null);
  const [query, setQuery] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const chatLogRef = useRef(null);

  useEffect(() => {
    // Dummy active knowledge base
    const dummyKB = {
      id: 123,
      title: "Sample Knowledge Base",
    };
    setActiveKnowledgeBase(dummyKB);

    // Dummy chat log
    const dummyLogs = [
      {
        query: "Hello, what can you do?",
        response: "Hi! I can help answer your questions using my knowledge base.",
        reference: {
          file: "intro.pdf",
          start_time: 5,
        },
      },
      {
        query: "What is React?",
        response: "React is a JavaScript library for building user interfaces.",
        reference: {
          file: "react_basics.pdf",
          start_time: 15,
        },
      },
    ];
    setChatLog(dummyLogs);
  }, []);

  const handleQuerySubmit = () => {
    if (query.trim()) {
      const botReply = {
        query,
        response: "This is a dummy response for: " + query,
        reference: {
          file: "dummy.pdf",
          start_time: Math.floor(Math.random() * 100),
        },
      };

      setChatLog((prev) => [...prev, botReply]);
      setQuery("");
    }
  };

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatLog]);

  return (
    <div className="overflow-hidden">
      <div className="flex-1 flex flex-col h-[calc(100vh-105px)] relative overflow-hidden">
        <div className="p-4 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Chatbot Details</h2>
              {activeKnowledgeBase && (
                <div className="text-[20px] text-gray-600 mt-1 font-bold">
                  <div>Chat ID: {activeKnowledgeBase.id}</div>
                  <div>
                    Activated Knowledge Base: {activeKnowledgeBase.title}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div 
          className="flex-1 overflow-y-auto p-10 space-y-6 bg-[#CEE7FE] mb-[80px] rounded-t-3xl rounded-b-3xl custom-scrolbar"
          ref={chatLogRef}
          style={{ marginRight: '4px', paddingRight: '6px' }}
        >
          {chatLog.map((log, index) => (
            <div key={index}>
              {log.query && (
                <div className="flex justify-end">
                  <div className="bg-[#1a237e] text-white p-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg">
                    <p>{log.query}</p>
                  </div>
                </div>
              )}
              {log.response && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 max-w-[80%] shadow-sm rounded-br-lg rounded-tr-lg rounded-bl-lg">
                    <p>{log.response}</p>
                    {log.reference && (
                      <div className="mt-2 text-sm text-gray-500">
                        <p>Reference: {log.reference.file}</p>
                        {log.reference.start_time !== undefined && (
                          <p>Start Time: {log.reference.start_time}s</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white mb-0">
          <div className="flex items-center bg-white rounded-lg border">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter Query"
              className="flex-1 p-3 outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleQuerySubmit();
                }
              }}
            />
            <button className="p-2 hover:bg-gray-50" onClick={handleQuerySubmit}>
              <svg
                className="w-6 h-6 text-[#1a237e]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDetail;
