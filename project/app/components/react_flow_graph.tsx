'use client';

import React, { useCallback, useState } from 'react';
import ReactFlow, { MiniMap, Controls, Background, useEdgesState, useNodesState, addEdge, Connection, Edge } from 'reactflow';
import 'reactflow/dist/style.css';

const ReactFlowGraph = ({ initialNodes }: any) => {
  const [nodesState, setNodesState, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params: Edge | Connection) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowGraph;
