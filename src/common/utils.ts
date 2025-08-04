import type { Edge, Node } from 'vis-network';

type tree2NodesAndEdgesData = Node & { children?: tree2NodesAndEdgesData[] };
function tree2NodesAndEdges(treeList: tree2NodesAndEdgesData[]): { nodes: Node[], edges: Edge[] } {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    const transfer = (list: tree2NodesAndEdgesData[], parentData?: tree2NodesAndEdgesData) => {
        list.forEach(item => {
            nodes.push(item)
            if (parentData){
                edges.push({
                    from: parentData.id,
                    to: item.id
                })
            }

            if (item.children) {
                transfer(item.children, item);
            }
            delete item.children;
        });
    }
    transfer(treeList)
    
    return { nodes, edges }
}

export {
    tree2NodesAndEdges
}