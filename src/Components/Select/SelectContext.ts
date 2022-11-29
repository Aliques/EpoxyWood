import { createContext, useContext } from "react";

const SelectContext = createContext<{
  selectedOption?: KeyValuePairInterface<number,string>;
}>({ selectedOption: {key:undefined,value:undefined} });

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};

export { useSelectContext, SelectContext };
