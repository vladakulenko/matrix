import type { Cell } from '../types/matrix';

export function findNearestCells(
    cells: Cell[],
    targetCell: Cell,
    count: number
): number[] {
    // create a list of differences and sort by proximity
    const sorted = cells
        .filter((cell) => cell.id !== targetCell.id)
        .map((cell) => ({
            id: cell.id,
            diff: Math.abs(cell.amount - targetCell.amount),
        }))
        .sort((a, b) => a.diff - b.diff)
        .slice(0, count);

    // return ids of nearest cells
    return sorted.map((item) => item.id);
}
