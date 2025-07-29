import { useEffect, useRef } from 'react'
import { Network } from 'vis-network';
import { data } from './data.ts';
import { options } from './options.ts';
function Timeline() {
    const timelineRef = useRef(null);
    useEffect(() => {
        if (timelineRef.current) {
            new Network(timelineRef.current, data, options);
        }
    });

    return <div ref={timelineRef} style={{
        width: '100vw',
        height: '100vh'
    }}></div >
}

export default Timeline
