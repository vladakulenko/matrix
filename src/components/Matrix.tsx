import { useMatrix } from '../hooks/useMatrix';
import { getColumnPercentiles, getRowSums } from '../utils/calculateStats';
import { MatrixCell } from './MatrixCell';

export const Matrix = () => {
    const { matrix, setRowHover, removeRow, addRow } = useMatrix();
    if (!matrix) return <p>Enter parameters and generate matrix</p>;

    const rowSums = getRowSums(matrix);
    const percentiles = getColumnPercentiles(matrix, 60);

    return (
        <div>
            <table
                style={{
                    borderCollapse: 'collapse',
                    border: '1px solid #888',
                    minWidth: '400px',
                    textAlign: 'center',
                }}
            >
                <thead>
                    <tr>
                        <th
                            style={{
                                border: '1px solid #ccc',
                                padding: '6px 10px',
                                background: '#f5f5f5',
                            }}
                        >
                            {/* Empty cell - top left corner */}
                        </th>
                        {matrix[0].map((_, j) => (
                            <th
                                key={j}
                                style={{
                                    border: '1px solid #ccc',
                                    padding: '6px 10px',
                                    background: '#f5f5f5',
                                }}
                            >
                                Cell values N = {j + 1}
                            </th>
                        ))}
                        <th
                            style={{
                                border: '1px solid #ccc',
                                padding: '6px 10px',
                                background: '#f5f5f5',
                            }}
                        >
                            Sum values
                        </th>
                        <th
                            style={{
                                border: '1px solid #ccc',
                                padding: '6px 10px',
                                background: '#f5f5f5',
                            }}
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {matrix.map((row, i) => (
                        <tr key={i}>
                            {/* Row name */}
                            <td
                                style={{
                                    border: '1px solid #ccc',
                                    padding: '6px',
                                    fontWeight: 'bold',
                                    background: '#fafafa',
                                }}
                            >
                                Cell Value M = {i + 1}
                            </td>

                            {/* Row values */}
                            {row.map((cell) => (
                                <MatrixCell
                                    key={cell.id}
                                    cell={cell}
                                    rowIndex={i}
                                />
                            ))}

                            {/* Row sum */}
                            <td
                                onMouseEnter={() => setRowHover(i)}
                                onMouseLeave={() => setRowHover(null)}
                                style={{
                                    border: '1px solid #ccc',
                                    padding: '6px',
                                    background: '#fafafa',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                            >
                                {rowSums[i]}
                            </td>

                            {/* Delete button */}
                            <td
                                style={{
                                    border: '1px solid #ccc',
                                    padding: '6px',
                                    background: '#fafafa',
                                    textAlign: 'center',
                                }}
                            >
                                <button
                                    onClick={() => removeRow(i)}
                                    disabled={matrix.length <= 1}
                                    style={{
                                        background:
                                            matrix.length <= 1
                                                ? '#ccc'
                                                : '#ff4444',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        padding: '4px 8px',
                                        cursor:
                                            matrix.length <= 1
                                                ? 'not-allowed'
                                                : 'pointer',
                                        fontSize: '12px',
                                    }}
                                    title={
                                        matrix.length <= 1
                                            ? 'Cannot delete the last row'
                                            : 'Delete row'
                                    }
                                >
                                    ✕
                                </button>
                            </td>
                        </tr>
                    ))}

                    {/* Percentile row */}
                    <tr>
                        <td
                            style={{
                                border: '1px solid #ccc',
                                padding: '6px',
                                fontStyle: 'italic',
                                background: '#eef',
                                fontWeight: 'bold',
                            }}
                        >
                            60th percentile
                        </td>

                        {percentiles.map((p, j) => (
                            <td
                                key={j}
                                style={{
                                    border: '1px solid #ccc',
                                    padding: '6px',
                                    fontStyle: 'italic',
                                    background: '#eef',
                                }}
                            >
                                {p.toFixed(1)}
                            </td>
                        ))}

                        {/* last empty cell under "Sum values" */}
                        <td
                            style={{
                                border: '1px solid #ccc',
                                background: '#eef',
                            }}
                        ></td>
                        {/* last empty cell under "Actions" */}
                        <td
                            style={{
                                border: '1px solid #ccc',
                                background: '#eef',
                            }}
                        ></td>
                    </tr>
                </tbody>
            </table>

            <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <button
                    onClick={addRow}
                    style={{
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '8px 16px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 'bold',
                    }}
                    title='Add a new row to the matrix'
                >
                    + Add Row
                </button>
            </div>
        </div>
    );
};
