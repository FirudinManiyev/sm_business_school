function DataTable({ columns, data, actions }) {
    return (
        <div className="bg-white rounded shadow overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key} className="p-3">
                                {col.label}
                            </th>
                        ))}
                        {actions && <th className="p-3 text-center">Actions</th>}
                    </tr>
                </thead>

                <tbody>
                    {data.length === 0 && (
                        <tr>
                            <td
                                colSpan={columns.length + 1}
                                className="text-center p-4 text-gray-500"
                            >
                                No data
                            </td>
                        </tr>
                    )}

                    {data.map((item) => (
                        <tr key={item.id} className="border-t hover:bg-gray-50">
                            {columns.map((col) => (
                                <td key={col.key} className="p-3">
                                    {item[col.key]}
                                </td>
                            ))}

                            {actions && (
                                <td className="p-3 flex justify-center gap-3">
                                    <button
                                        onClick={() => actions.onEdit(item)}
                                        className="text-blue-500"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => actions.onDelete(item.id)}
                                        className="text-red-500"
                                    >
                                        Delete
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;