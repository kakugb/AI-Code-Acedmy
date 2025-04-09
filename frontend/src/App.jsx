import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Chatlogs from "./pages/Chatlogs/Chatlogs";
import Chatbot from "./pages/Chatbot/Chatbot";
import Knowledgebases from "./pages/KnowledgeBases/Knowledgebases";
import TrainingData from "./pages/TrainingData/TrainingData";
import Account from "./pages/Accounts/Account";
import ChatbotDetail from "./pages/Chatbot/ChatbotDetail";
import AddDataSource from "./pages/TrainingData/AddDataSource";
import AddKnowledgeBases from "./pages/KnowledgeBases/AddKnowledgeBases";
import TrainingsData from "./pages/KnowledgeBases/TrainingsData";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

const AppLayout = ({ children, isSidebarCollapsed, onToggle }) => {
  return (
    <>
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={onToggle} />
      <Navbar isCollapsed={isSidebarCollapsed} />
      <main
        className={`transition-all duration-300 ${
          isSidebarCollapsed ? "ml-20" : "ml-64"
        } pt-20 p-6 bg-[#FFFFFF]`}
      >
        {children}
      </main>
    </>
  );
};

const LayoutWrapper = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const handleToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <AppLayout isSidebarCollapsed={isSidebarCollapsed} onToggle={handleToggle}>
      {children}
    </AppLayout>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <LayoutWrapper>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/chatbot/:id" element={<ChatbotDetail />} />
            <Route path="/knowledge-bases" element={<Knowledgebases />} />
            <Route path="/knowledge-trainingdata" element={<TrainingsData />} />
            <Route path="/add-newknowledge" element={<AddKnowledgeBases />} />
            <Route path="/training-data" element={<TrainingData />} />
            <Route path="/add-datasource" element={<AddDataSource />} />
            <Route path="/chat-logs" element={<Chatlogs />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<Chatbot />} />
          </Routes>
        </LayoutWrapper>
      </div>
    </Router>
  );
}

export default App;
