import type { Edge, Node } from 'vis-network';

const nodes: Node[] = [
    { id: 1, label: "root" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" },
];

// create an array with edges
const edges: Edge[] = [
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 3 },
];

export const data = {
    nodes,
    edges
}