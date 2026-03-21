let students = [
    { id: 1, name: "Rəşad", course: "Frontend" },
    { id: 2, name: "Aysel", course: "Backend" },
];

export const getStudents = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve([...students]), 300);
    });
};

export const createStudent = async (data) => {
    return new Promise((resolve) => {
        const newItem = { id: Date.now(), ...data };
        students.push(newItem);
        resolve(newItem);
    });
};

export const updateStudent = async (id, data) => {
    return new Promise((resolve) => {
        students = students.map((s) =>
            s.id === id ? { ...s, ...data } : s
        );
        resolve(true);
    });
};

export const deleteStudent = async (id) => {
    return new Promise((resolve) => {
        students = students.filter((s) => s.id !== id);
        resolve(true);
    });
};