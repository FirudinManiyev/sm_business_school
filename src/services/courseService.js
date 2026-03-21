import axiosInstance from "./axios";

let courses = [
    { id: 1, title: "Frontend", students: 120 },
];

// GET
export const getCourses = async () => {
    // gələcəkdə:
    // return await axiosInstance.get("/courses");

    return new Promise((resolve) => {
        setTimeout(() => resolve([...courses]), 300);
    });
};

// CREATE
export const createCourse = async (data) => {
    // gələcək:
    // return await axiosInstance.post("/courses", data);

    return new Promise((resolve) => {
        const newItem = { id: Date.now(), ...data };
        courses.push(newItem);
        resolve(newItem);
    });
};

// UPDATE
export const updateCourse = async (id, data) => {
    // gələcək:
    // return await axiosInstance.put(`/courses/${id}`, data);

    return new Promise((resolve) => {
        courses = courses.map((c) =>
            c.id === id ? { ...c, ...data } : c
        );
        resolve(true);
    });
};

// DELETE
export const deleteCourse = async (id) => {
    // gələcək:
    // return await axiosInstance.delete(`/courses/${id}`);

    return new Promise((resolve) => {
        courses = courses.filter((c) => c.id !== id);
        resolve(true);
    });
};