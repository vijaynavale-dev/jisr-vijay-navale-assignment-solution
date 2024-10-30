export interface fileIntf {
  type: string;
  name: string;
  data?: fileIntf[];
}

export interface nodePopUpDetailsIntF {
  xPosition: number;
  yPosition: number;
  nodeData: fileIntf;
  parent: fileIntf;
}

export interface treeNodeIntF {
  nodeData: fileIntf;
  parent: fileIntf | null;
  getPopUpDetails: ({e: React.MouseEvent<HTMLDivElement, MouseEvent>, nodeData: fileIntf, parent: fileIntf}) => (void)
}
export interface folderNodeIntF {
  nodeData: fileIntf;
  parent: fileIntf | null;
  getPopUpDetails: ({e: React.MouseEvent<HTMLDivElement, MouseEvent>, nodeData: fileIntf, parent: fileIntf}) => (void);
  onToggleExpand: () => void
}
