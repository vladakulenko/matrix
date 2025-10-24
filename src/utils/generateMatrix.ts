import type { Cell } from '../types/matrix';

export function generateMatrix(M: number, N: number): Cell[][] {
    let id = 1;
    const matrix: Cell[][] = [];

    for (let i = 0; i < M; i++) {
        const row: Cell[] = [];
        for (let j = 0; j < N; j++) {
            row.push({
                id: id++,
                amount: Math.floor(Math.random() * 900),
            });
        }
        matrix.push(row);
    }

    return matrix;
}
