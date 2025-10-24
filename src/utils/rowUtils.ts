import type { Cell } from '../types/matrix';

export function calculateRowPercentages(row: Cell[]): number[] {
    const total = row.reduce((sum, cell) => sum + cell.amount, 0);
    return row.map((cell) => (cell.amount / total) * 100);
}

export function getHeatmapColor(percentage: number): string {
    // Convert percentage to a value between 0 and 1
    const intensity = percentage / 100;

    // Create a color gradient from light blue to dark blue
    const red = Math.floor(135 + 120 * intensity); // 135 to 255
    const green = Math.floor(206 + 49 * intensity); // 206 to 255
    const blue = Math.floor(235 + 20 * intensity); // 235 to 255

    return `rgb(${red}, ${green}, ${blue})`;
}
