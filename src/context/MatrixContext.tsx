import React, { useState } from 'react';
import type { Cell } from '../types/matrix';
import { generateMatrix } from '../utils/generateMatrix';
import { MatrixContext } from '../types/MatrixContext';
import { updateCellValue } from '../utils/updateCellValue';
import { findNearestCells } from '../utils/findNearestCells';

export const MatrixProvider = ({ children }: { children: React.ReactNode }) => {
    const [m, setM] = useState(0);
    const [n, setN] = useState(0);
    const [x, setX] = useState(0);
    const [matrix, setMatrix] = useState<Cell[][] | null>(null);

    const [highlightedIds, setHighlightedIds] = useState<number[]>([]);
    const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

    const generate = () => {
        setMatrix(generateMatrix(m, n));
        setHighlightedIds([]);
    };

    const incrementCellValue = (id: number) => {
        if (!matrix) return;
        const updated = updateCellValue(matrix, id);
        setMatrix(updated);
    };

    const findAndHighlight = (cell: Cell, count?: number) => {
        if (!matrix) return;
        const c = typeof count === 'number' ? count : x;
        if (!c || c <= 0) {
            setHighlightedIds([]);
            return;
        }
        const nearest = findNearestCells(matrix.flat(), cell, c);
        setHighlightedIds(nearest);
    };

    const clearHighlight = () => setHighlightedIds([]);

    const setRowHover = (rowIndex: number | null) => {
        setHoveredRowIndex(rowIndex);
    };

    const removeRow = (rowIndex: number) => {
        if (!matrix || matrix.length <= 1) return; // Don't remove if only one row left

        const updatedMatrix = matrix.filter((_, index) => index !== rowIndex);
        setMatrix(updatedMatrix);
        setHighlightedIds([]);
        setHoveredRowIndex(null);
    };

    const addRow = () => {
        if (!matrix || matrix.length === 0) return;

        // Get the number of columns from the first row
        const numColumns = matrix[0].length;

        // Find the highest ID in the matrix to generate new IDs
        const maxId = Math.max(...matrix.flat().map((cell) => cell.id));

        // Create a new row with random values
        const newRow: Cell[] = [];
        for (let j = 0; j < numColumns; j++) {
            newRow.push({
                id: maxId + j + 1,
                amount: Math.floor(Math.random() * 900),
            });
        }

        const updatedMatrix = [...matrix, newRow];
        setMatrix(updatedMatrix);
        setHighlightedIds([]);
        setHoveredRowIndex(null);
    };

    return (
        <MatrixContext.Provider
            value={{
                matrix,
                m,
                n,
                x,
                setM,
                setN,
                setX,
                generate,
                incrementCellValue,
                highlightedIds,
                findAndHighlight,
                clearHighlight,
                hoveredRowIndex,
                setRowHover,
                removeRow,
                addRow,
            }}
        >
            {children}
        </MatrixContext.Provider>
    );
};
