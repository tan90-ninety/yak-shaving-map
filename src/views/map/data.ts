import type { Edge, Node } from 'vis-network';
import { tree2NodesAndEdges } from '../../common/utils.ts';

const data = tree2NodesAndEdges([
    {
        id: "原点", label: "原点", children: [
            {
                id: "计算机四大件", label: "计算机四大件", children: [
                    { id: "计网", label: "计网" }
                ]
            }
        ]
    }
])

export const nodes: Node[] = data.nodes
export const edges: Edge[] = data.edges
export {
    data
}