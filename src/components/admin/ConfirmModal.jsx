function ConfirmModal({ onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white p-6 rounded w-full max-w-sm">
                <h2 className="text-lg font-semibold mb-4">
                    Are you sure?
                </h2>

                <div className="flex justify-end gap-2">
                    <button onClick={onCancel}>Cancel</button>

                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;