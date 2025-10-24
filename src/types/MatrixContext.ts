import { createContext } from 'react';
import type { Cell } from './matrix';

export type MatrixContextType = {
    matrix: Cell[][] | null;
    m: number;
    n: number;
    x: number;
    setM: (m: number) => void;
    setN: (n: number) => void;
    setX: (x: number) => void;
    generate: () => void;
    incrementCellValue: (cellId: number) => void;
    highlightedIds: number[];
    findAndHighlight: (cell: Cell, count?: number) => void;
    clearHighlight: () => void;
    hoveredRowIndex: number | null;
    setRowHover: (rowIndex: number | null) => void;
    removeRow: (rowIndex: number) => void;
    addRow: () => void;
};

export const MatrixContext = createContext<MatrixContextType | null>(null);
