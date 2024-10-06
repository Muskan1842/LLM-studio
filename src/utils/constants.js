import InputNode from "../node-components/InputNode";
import LLMNode from "../node-components/LLMNode";
import OutputNode from "../node-components/OutputNode";

export const NODE_TYPES = {
    input: InputNode,
    default: LLMNode,
    output: OutputNode,
}

export const MODEL_NAMES = {
    GPT_35_TURBO: 'gpt-3.5-turbo',
    GPT_4_TURBO: 'gpt-4-turbo'
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