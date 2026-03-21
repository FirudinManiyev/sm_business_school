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

        // simple validation
        for (let field of fields) {
            if (field.required && !formData[field.name]) {
                alert(`${field.label} is required`);
                return;
            }
        }

        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white p-6 rounded w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">
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

                    <div className="flex justify-end gap-2 mt-4">
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>

                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormModal;