function AdminPageShell({ title, subtitle, actionLabel, onAction, children }) {
    return (
        <section className="space-y-5">
            <div className="rounded-3xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{title}</h2>
                        {subtitle && <p className="mt-1 text-sm text-slate-600 sm:text-base">{subtitle}</p>}
                    </div>

                    {actionLabel && (
                        <button
                            type="button"
                            onClick={onAction}
                            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
                        >
                            {actionLabel}
                        </button>
                    )}
                </div>
            </div>

            {children}
        </section>
    );
}

export default AdminPageShell;
