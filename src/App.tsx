import "./style.css";
import { useState } from "react";
import { fileExplorerinitialState } from "./data";
import { fileIntf, nodePopUpDetailsIntF } from "./utils/file.interface";
import TreeNode from "./components/tree-node";
import NodePopUp from "./components/node-pop-up";

const App = () => {
  const [fileExplorerData] = useState<fileIntf>(fileExplorerinitialState);
  const [nodePopUpDetails, setNodePopUpDetails] =
    useState<nodePopUpDetailsIntF | null>(null);

  const getPopUpDetails = ({ e, nodeData, parent }) => {
    e.preventDefault();
    console.log({ e, nodeData, parent });
    setNodePopUpDetails({
      xPosition: e?.pageX,
      yPosition: e?.pageY,
      nodeData,
      parent,
    });
  };

  return (
    <>
      <TreeNode
        nodeData={fileExplorerData}
        parent={null}
        getPopUpDetails={getPopUpDetails}
      />
      <NodePopUp
        nodePopUpDetails={nodePopUpDetails}
        setNodePopUpDetails={setNodePopUpDetails}
      />
    </>
  );
};

export default App;
