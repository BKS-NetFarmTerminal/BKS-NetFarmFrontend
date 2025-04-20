export const Grid = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: '12px',
            width: '100%',
            height :'100%',
            margin: '0 auto'
        }}>
            {[...Array(9)].map((_, i) => (
                <div key={i} style={{
                    border: '1px solid #ddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    Ячейка {i+1}
                </div>
            ))}
        </div>
    );
}