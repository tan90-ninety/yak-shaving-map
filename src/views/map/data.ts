import { type Edge, type Node } from 'vis-network';
import { tree2NodesAndEdges } from '../../common/utils.ts';

const data = tree2NodesAndEdges([
    {
        id: "原点", label: "原点", children: [
            {
                id: "计算机四大件", label: "计算机四大件", children: [
                    { id: "计网", label: "计网" }
                ]
            },
            {
                id: "unity", label: "unity", meta: {
                    date: "2025-08-09"
                }, children: [
                    {
                        id: "unity1", label: "【SiKi学院Unity】Unity3D零基础入门", meta: {
                            date: "2025-08-09",
                            type: "video"
                        }
                    }
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