import { useMatrix } from '../hooks/useMatrix';
import { validateInputs } from '../utils/validateInputs';
import { Input } from './UI/Input';
import { Button } from './UI/Button';

export const InputForm = () => {
    const { m, n, x, setM, setN, setX, generate } = useMatrix();

    const handleGenerate = () => {
        if (validateInputs(m, n)) generate();
        else alert('M and N must be in the range 0–100');
    };

    return (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            <Input value={m} onChange={setM} placeholder='M' />
            <Input value={n} onChange={setN} placeholder='N' />
            <Input value={x} onChange={setX} placeholder='X' />
            <Button onClick={handleGenerate}>Generate Matrix</Button>
        </div>
    );
};
