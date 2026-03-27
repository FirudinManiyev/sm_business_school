function DataTable({ columns, data, actions }) {
    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-slate-100/90 text-left">
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key} className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-600">
                                {col.label}
                            </th>
                        ))}
                        {actions && (
                            <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide text-slate-600">
                                Actions
                            </th>
                        )}
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                        {data.length === 0 && (
                            <tr>
                                <td
                                    colSpan={columns.length + 1}
                                    className="px-4 py-8 text-center text-sm font-medium text-slate-500"
                                >
                                    No data available
                                </td>
                            </tr>
                        )}

                        {data.map((item) => (
                            <tr key={item.id} className="transition-colors duration-200 hover:bg-blue-50/45">
                                {columns.map((col) => (
                                    <td key={col.key} className="px-4 py-3 text-sm font-medium text-slate-700">
                                        {item[col.key]}
                                    </td>
                                ))}

                                {actions && (
                                    <td className="px-4 py-3">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() => actions.onEdit(item)}
                                                className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-100"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const confirmed = window.confirm("Are you sure you want to delete this item?");
                                                    if (!confirmed) return;
                                                    actions.onDelete(item.id);
                                                }}
                                                className="rounded-xl border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-100"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DataTable;