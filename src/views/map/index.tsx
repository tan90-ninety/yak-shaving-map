import { useEffect, useRef, useState } from 'react'
import { Network, type Edge, type Node } from 'vis-network';
import { data } from './data';

const options = {};
function Timeline() {
    const timelineRef = useRef(null);
    useEffect(() => {
        if (timelineRef.current) {
            const network = new Network(timelineRef.current, data, options);
        }
    });

    return <div ref={timelineRef} style={{
        width: '100vw', height: '100vh'
    }}></div >
}

export default Timeline
