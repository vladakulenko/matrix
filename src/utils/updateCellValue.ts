import type { Cell } from '../types/matrix';

export const updateCellValue = (matrix: Cell[][], cellId: number): Cell[][] => {
    return matrix.map((row) =>
        row.map((cell) =>
            cell.id === cellId ? { ...cell, amount: cell.amount + 1 } : cell
        )
    );
};
