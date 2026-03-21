function FormField({ field, value, onChange }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
                {field.label}
            </label>

            <input
                type={field.type || "text"}
                value={value || ""}
                onChange={(e) => onChange(field.name, e.target.value)}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default FormField;