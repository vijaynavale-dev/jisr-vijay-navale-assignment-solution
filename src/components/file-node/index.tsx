import { treeNodeIntF } from "../../utils/file.interface";

const FileNode = ({ nodeData, parent, getPopUpDetails }: treeNodeIntF) => {
  const { name } = nodeData ?? {};
  return (
    <div
      className="file"
      onContextMenu={(e) => getPopUpDetails({ e, nodeData, parent })}
    >
      {name}
    </div>
  );
};

export default FileNode;
