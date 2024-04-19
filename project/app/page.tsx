'use client';


import Image from "next/image";
import MenuExtraction from "./components/menu_extraction";
import ReactFlowGraph from "./components/react_flow_graph";
import { useState } from "react";

export default function Home() {
  const [extractedNodes, setExtractedNodes] = useState([]);
  
  return (
    <main className="flex min-h-screen flex-row w-[100%]">
      <div className="w-[20%] bg-gray-100">
        <MenuExtraction onExtractedNodes={setExtractedNodes} />
      </div>
      {/* Main area with ReactFlowGraph component */}
      <div className="w-[80%]">
        <ReactFlowGraph initialNodes={extractedNodes} />
      </div>
    </main>
  );
}