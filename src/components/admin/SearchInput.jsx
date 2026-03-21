function SearchInput({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border px-3 py-2 rounded w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}

export default SearchInput;