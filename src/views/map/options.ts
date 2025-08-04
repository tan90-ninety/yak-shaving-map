import type { Options } from 'vis-network';

const options: Options = {
    edges: {
        arrows: {
            to: {
                enabled: true,
                // imageHeight: undefined,
                // imageWidth: undefined,
                scaleFactor: 1,
                // src: undefined,
                type: "arrow"
            }
        },
    }
}

export { options }