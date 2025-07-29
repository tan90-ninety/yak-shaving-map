import { useEffect, useRef, useState } from 'react'
import { Network, type Edge, type Node } from 'vis-network';

const nodes: Node[] = [
    { id: 1, label: "Node 1" },
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
const data = {
    nodes: nodes,
    edges: edges,
};

const options = {};
function Timeline() {
    const timelineRef = useRef(null);
    useEffect(() => {
        console.log(timelineRef);

        if (timelineRef.current) {
            const network = new Network(timelineRef.current, data, options);
        }
    });

    return <div ref={timelineRef} style={{
        width: '100vw', height: '100vh'
    }}></div >
}

export default Timeline
