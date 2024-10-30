import React from "react";
import { folderNodeIntF } from "../../utils/file.interface";

const FolderNode = ({
  nodeData,
  parent,
  onToggleExpand,
  getPopUpDetails,
}: folderNodeIntF) => {
  const { name } = nodeData ?? {};
  return (
    <div
      className="folder"
      onClick={onToggleExpand}
      onContextMenu={(e) => getPopUpDetails({ e, nodeData, parent })}
    >
      {name}
    </div>
  );
};

export default FolderNode;
