let trainers = [
    { id: 1, name: "Ali Əliyev", specialty: "Frontend" },
    { id: 2, name: "Vəli Məmmədov", specialty: "Backend" },
];

export const getTrainers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve([...trainers]), 300);
    });
};

export const createTrainer = async (data) => {
    return new Promise((resolve) => {
        const newItem = { id: Date.now(), ...data };
        trainers.push(newItem);
        resolve(newItem);
    });
};

export const updateTrainer = async (id, data) => {
    return new Promise((resolve) => {
        trainers = trainers.map((t) =>
            t.id === id ? { ...t, ...data } : t
        );
        resolve(true);
    });
};

export const deleteTrainer = async (id) => {
    return new Promise((resolve) => {
        trainers = trainers.filter((t) => t.id !== id);
        resolve(true);
    });
};