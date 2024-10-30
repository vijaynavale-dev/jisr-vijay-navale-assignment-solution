import { useState } from "react";
import FolderNode from "../folder-node";
import FileNode from "../file-node";
import { treeNodeIntF } from "../../utils/file.interface";

const TreeNode = ({ nodeData, parent, getPopUpDetails }: treeNodeIntF) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tree">
      <FolderNode
        nodeData={nodeData}
        onToggleExpand={onToggleExpand}
        getPopUpDetails={getPopUpDetails}
        parent={parent}
      />
      {isExpanded &&
        nodeData?.data?.map((node) => {
          if (node?.type === "folder") {
            return (
              <TreeNode
                nodeData={node}
                parent={nodeData}
                key={node?.name}
                getPopUpDetails={getPopUpDetails}
              />
            );
          }
          return (
            <FileNode
              nodeData={node}
              parent={nodeData}
              getPopUpDetails={getPopUpDetails}
              key={node?.name}
            />
          );
        })}
    </div>
  );
};

export default TreeNode;
