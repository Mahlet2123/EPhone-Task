'use client';

import React, { useCallback, useState } from 'react';
import ReactFlow, { MiniMap, Controls, Background, useEdgesState, useNodesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

const ReactFlowGraph = ({ nodes }) => {
  const [nodesState, setNodesState, onNodesChange] = useNodesState(nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowGraph;
