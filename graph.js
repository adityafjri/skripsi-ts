const { Graph } = require('graphology');
const bfs = require('graphology-traversal/breadth-first');
const connectedComponents = require('graphology-components/connected-components');
const stronglyConnectedComponents = require('graphology-components/strongly-connected-components');
const pagerank = require('graphology-centralities/pagerank');
const fs = require('fs');

// Read JSON files
const nodeData = JSON.parse(fs.readFileSync('./public/data/graphNode.json', 'utf8'));
const edgeMengingatData = JSON.parse(fs.readFileSync('./public/data/graphEdgeMengingat.json', 'utf8'));
const edgeMenimbangData = JSON.parse(fs.readFileSync('./public/data/graphEdgeMenimbang.json', 'utf8'));

// Creating a graph
const graphMengingat = new Graph();
nodeData.forEach(node => graphMengingat.addNode(node.id, node));
edgeMengingatData.forEach(edge => graphMengingat.addEdge(edge.source, edge.target, edge));

const graphMenimbang = new Graph();
nodeData.forEach(node => graphMenimbang.addNode(node.id, node));
edgeMenimbangData.forEach(edge => graphMenimbang.addEdge(edge.source, edge.target, edge));

// Displaying vertices and edges
console.log("Vertices (graphMengingat):", graphMengingat.nodes().toArray());
console.log("Edges (graphMengingat):", graphMengingat.edges().toArray());

// In-degree and Out-degree
const inDegrees = graphMengingat.inDegree();
console.log("In-Degrees:", inDegrees);

const outDegrees = graphMengingat.outDegree();
console.log("Out-Degrees:", outDegrees);

// PageRank
const prOptions = { damping: 0.85, tolerance: 1e-6, maxIterations: 10 };
const pageRank = pagerank(graphMengingat, prOptions);
console.log("PageRank:", pageRank);

// Connected Components
const cc = connectedComponents(graphMengingat);
console.log("Connected Components:", cc);

// Strongly Connected Components
const scc = stronglyConnectedComponents(graphMengingat, { maxIterations: 10 });
console.log("Strongly Connected Components:", scc);

// Breadth-First Search
const bfsResult = bfs(graphMengingat, { start: '1', goal: '2' });
console.log("BFS Result:", bfsResult);
