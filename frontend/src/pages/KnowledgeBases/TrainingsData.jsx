import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrainingsData = () => {
  const navigate = useNavigate();
  const [knowledgeBase, setKnowledgeBase] = useState("");
  const [dataSource, setDataSource] = useState("");
  const [knowledgeBases, setKnowledgeBases] = useState([]);
  const [dataSources, setDataSources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock fetching data
  useEffect(() => {
    // Mock knowledge bases
    setKnowledgeBases([
      { id: 1, title: "Customer Support KB" },
      { id: 2, title: "Technical Docs KB" },
    ]);

    // Mock data sources
    setDataSources([
      { id: 101, name: "YouTube Video", type: "youtube" },
      { id: 102, name: "Product Docs", type: "file" },
    ]);
  }, []);

  const handleSubmit = () => {
    if (!knowledgeBase || !dataSource) return;

    setIsLoading(true);

    setTimeout(() => {
      console.log("Training Started with:", {
        knowledgeBaseId: knowledgeBase,
        dataSourceId: dataSource,
      });
      setIsLoading(false);
      navigate("/knowledge-bases");
    }, 1000); // Simulate loading time
  };

  const handleCancel = () => {
    setKnowledgeBase("");
    setDataSource("");
    navigate("/knowledge-bases");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 border border-gray-200">
      <h1 className="text-2xl font-semibold text-[#1a237e] mb-6">
        Select Knowledge Base for Training
      </h1>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Select a Knowledge Base
        </label>
        <select
          value={knowledgeBase}
          onChange={(e) => setKnowledgeBase(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Choose an option
          </option>
          {knowledgeBases.map((kb) => (
            <option key={kb.id} value={kb.id}>
              {kb.title}
            </option>
          ))}
        </select>
      </div>

      <h1 className="text-2xl font-semibold text-[#1a237e] mb-6">
        Select Data Source for Training
      </h1>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Select a Data Source
        </label>
        <select
          value={dataSource}
          onChange={(e) => setDataSource(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Choose an option
          </option>
          {dataSources.map((ds) => (
            <option key={ds.id} value={ds.id}>
              {ds.name} ({ds.type})
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={handleCancel}
          className="px-5 py-2 bg-gray-600 text-white rounded-md"
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-[#224289] text-white rounded-md"
          disabled={isLoading}
        >
          {isLoading ? "Starting Training..." : "Start Training"}
        </button>
      </div>
    </div>
  );
};

export default TrainingsData;
