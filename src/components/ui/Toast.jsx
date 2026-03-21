import { useEffect } from "react";

function Toast({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow">
            {message}
        </div>
    );
}

export default Toast;