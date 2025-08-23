import { type Edge, type Node } from 'vis-network';
import { tree2NodesAndEdges } from '../../common/utils.ts';

const data = tree2NodesAndEdges([
    {
        id: "原点", label: "原点", children: [
            {
                id: "计算机四大件", label: "计算机四大件", children: [
                    { id: "计网", label: "计网" },
                    {
                        id: "操作系统", label: "操作系统", meta: {
                            type: 'video',
                            startDate: '2025-08-21',
                            status: 'pending'
                        }
                    }
                ]
            },
            {
                id: "unity", label: "unity", meta: {
                    startDate: "2025-08-09"
                }, children: [
                    {
                        id: "unity1", label: "【SiKi学院Unity】Unity3D零基础入门", meta: {
                            startDate: "2025-08-09",
                            type: "video",
                            status: 'pending'
                        }
                    }
                ]
            },
            {
                id: 'project', label: '项目', meta: {
                    startDate: '2025-08-23'
                }, children: [
                    {
                        id: 'co-paint', label: '协同画板', meta: {
                            startDate: '2025-08-22',
                            status: 'pending'
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