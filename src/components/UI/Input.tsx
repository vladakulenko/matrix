type InputProps = {
    value: number;
    onChange: (value: number) => void;
    placeholder?: string;
};

export const Input = ({ value, onChange, placeholder }: InputProps) => {
    return (
        <input
            type='number'
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder={placeholder}
            style={{
                padding: '6px 10px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                width: '80px',
            }}
        />
    );
};
