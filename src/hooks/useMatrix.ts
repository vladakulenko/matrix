import { useContext } from 'react';
import { MatrixContext } from '../types/MatrixContext';

export const useMatrix = () => {
    const context = useContext(MatrixContext);
    if (!context) {
        throw new Error('useMatrix must be used within a MatrixProvider');
    }
    return context;
};
