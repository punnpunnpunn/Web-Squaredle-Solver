const Grid = ({ GRID_SIZE }: { GRID_SIZE: number }) => {
    return (
        <div className={`grid grid-cols-4 gap-4 max-w-[40%] m-auto`}>
            {[...Array(GRID_SIZE * GRID_SIZE)].map((_, idx) => (
            <input
                key={idx}
                id={`cell-${idx}`}
                type="text"
                maxLength={1}
                className="aspect-square w-full text-center font-bold text-2xl border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 uppercase"
            />
            ))}
        </div>
    )
}

export default Grid