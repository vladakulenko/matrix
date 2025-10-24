import { MatrixProvider } from './context/MatrixContext';
import { InputForm } from './components/InputForm';
import { Matrix } from './components/Matrix';

function App() {
    return (
        <MatrixProvider>
            <div style={{ padding: '20px' }}>
                <h1>Matrix Generator</h1>
                <InputForm />
                <Matrix />
            </div>
        </MatrixProvider>
    );
}

export default App;

