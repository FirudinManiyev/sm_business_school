import { useState, useEffect } from "react";
import FormField from "./FormField";

function FormModal({ title, fields, initialData, onClose, onSubmit }) {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            // boş initial state
            const empty = {};
            fields.forEach((f) => (empty[f.name] = ""));
            setFormData(empty);
        }
    }, [initialData, fields]);

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // By default every field is required unless explicitly set to false.
        for (let field of fields) {
            const isRequired = field.required !== false;
            const value = formData[field.name];
            const isEmpty =
                value === undefined ||
                value === null ||
                (typeof value === "string" && value.trim() === "");

            if (isRequired && isEmpty) {
                alert(`${field.label} is required`);
                return;
            }

            if (field.type === "number" && value !== "" && Number(value) < 0) {
                alert(`${field.label} cannot be negative`);
                return;
            }
        }

        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/35 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <h2 className="mb-4 text-xl font-extrabold text-slate-900">
                    {title}
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {fields.map((field) => (
                        <FormField
                            key={field.name}
                            field={field}
                            value={formData[field.name]}
                            onChange={handleChange}
                        />
                    ))}

                    <div className="mt-4 flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100"
                        >
                            Cancel
                        </button>

                        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormModal;