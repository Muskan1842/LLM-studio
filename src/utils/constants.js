import InputNode from "../node-components/InputNode";
import LLMNode from "../node-components/LLMNode";
import OutputNode from "../node-components/OutputNode";

export const NODE_TYPES = {
    input: InputNode,
    default: LLMNode,
    output: OutputNode,
}

export const debounce = (fn) => {
    let timer;
    return (input, key) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(input, key);
        }, 300);
    };
};