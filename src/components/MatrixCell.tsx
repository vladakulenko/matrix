import type { Cell } from '../types/matrix';
import { useMatrix } from '../hooks/useMatrix';
import { calculateRowPercentages, getHeatmapColor } from '../utils/rowUtils';

type MatrixCellProps = {
    cell: Cell;
    rowIndex: number;
};

export const MatrixCell = ({ cell, rowIndex }: MatrixCellProps) => {
    const {
        incrementCellValue,
        findAndHighlight,
        clearHighlight,
        highlightedIds,
        hoveredRowIndex,
        matrix,
        x,
    } = useMatrix();

    const handleClick = () => {
        incrementCellValue(cell.id);
    };

    const handleMouseEnter = () => {
        findAndHighlight(cell, x);
    };

    const handleMouseLeave = () => {
        clearHighlight();
    };

    const isHighlighted = highlightedIds.includes(cell.id);
    const isRowHovered = hoveredRowIndex === rowIndex;

    // Calculate percentage and heatmap color when row is hovered
    let displayValue = cell.amount;
    let backgroundColor = undefined;

    if (isRowHovered && matrix) {
        const row = matrix[rowIndex];
        const percentages = calculateRowPercentages(row);
        const cellPercentage =
            percentages[row.findIndex((c) => c.id === cell.id)];
        displayValue = Math.round(cellPercentage);

        // Calculate heatmap color based on percentage of max value in row
        const maxValue = Math.max(...row.map((c) => c.amount));
        const heatmapPercentage = (cell.amount / maxValue) * 100;
        backgroundColor = getHeatmapColor(heatmapPercentage);
    }

    return (
        <td
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                border: '1px solid #ccc',
                padding: '8px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'background 0.12s ease, transform 0.08s ease',
                background: isHighlighted ? '#d7f0ff' : backgroundColor,
                transform: isHighlighted ? 'scale(1.02)' : undefined,
                userSelect: 'none',
            }}
        >
            {isRowHovered ? `${displayValue}%` : cell.amount}
        </td>
    );
};
