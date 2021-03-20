import React from 'react';
import { IFamilyNode, IFamilyExtNode } from 'relatives-tree/lib/types';
interface Props {
    nodes: ReadonlyArray<IFamilyNode>;
    rootId: string;
    width: number;
    height: number;
    placeholders?: boolean;
    className?: string;
    renderNode: (node: IFamilyExtNode) => React.ReactNode;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
