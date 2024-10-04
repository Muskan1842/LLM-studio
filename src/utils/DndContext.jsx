import { createContext } from "react";

const DNDContext = createContext({
  type: null,
  setType: () => {},
  nodeLabel: null,
  setNodeLabel: () => {},
});

export default DNDContext;
