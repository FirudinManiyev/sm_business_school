let blogs = [
    { id: 1, title: "React Tips", author: "Admin" },
    { id: 2, title: "JS Tricks", author: "Admin" },
];

export const getBlogs = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve([...blogs]), 300);
    });
};

export const createBlog = async (data) => {
    return new Promise((resolve) => {
        const newItem = { id: Date.now(), ...data };
        blogs.push(newItem);
        resolve(newItem);
    });
};

export const updateBlog = async (id, data) => {
    return new Promise((resolve) => {
        blogs = blogs.map((b) =>
            b.id === id ? { ...b, ...data } : b
        );
        resolve(true);
    });
};

export const deleteBlog = async (id) => {
    return new Promise((resolve) => {
        blogs = blogs.filter((b) => b.id !== id);
        resolve(true);
    });
};