type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
            }}
        >
            {children}
        </button>
    );
};
