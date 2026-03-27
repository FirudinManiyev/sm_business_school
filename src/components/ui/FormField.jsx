function FormField({ field, value, onChange }) {
    const handleInputChange = (event) => {
        const rawValue = event.target.value;

        if (field.type === "number") {
            if (rawValue === "") {
                onChange(field.name, "");
                return;
            }

            const numericValue = Number(rawValue);

            if (Number.isNaN(numericValue)) return;

            onChange(field.name, numericValue < 0 ? 0 : numericValue);
            return;
        }

        onChange(field.name, rawValue);
    };

    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-600">
                {field.label}
            </label>

            <input
                type={field.type || "text"}
                value={value ?? ""}
                min={field.type === "number" ? 0 : undefined}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
        </div>
    );
}

export default FormField;