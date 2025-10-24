import type { Cell } from '../types/matrix';

/**
 * 60th percentile:
 * percentile = sorted[index], where index = (p / 100) * (n - 1)
 */
export const calculatePercentile = (
    values: number[],
    percentile: number
): number => {
    if (values.length === 0) return 0;
    const sorted = [...values].sort((a, b) => a - b);
    const index = (percentile / 100) * (sorted.length - 1);
    const lower = Math.floor(index);
    const upper = Math.ceil(index);
    const weight = index - lower;
    if (upper >= sorted.length) return sorted[lower];
    return sorted[lower] * (1 - weight) + sorted[upper] * weight;
};

export const getRowSums = (matrix: Cell[][]): number[] => {
    return matrix.map((row) => row.reduce((sum, cell) => sum + cell.amount, 0));
};

export const getColumnPercentiles = (
    matrix: Cell[][],
    percentile = 60
): number[] => {
    if (matrix.length === 0) return [];

    const cols = matrix[0].length;
    const result: number[] = [];

    for (let j = 0; j < cols; j++) {
        const columnValues = matrix.map((row) => row[j].amount);
        result.push(calculatePercentile(columnValues, percentile));
    }

    return result;
};
