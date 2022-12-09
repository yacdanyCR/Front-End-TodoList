import axios from "axios"

const getTasks = async (setTask) => {
    try {
        await axios.get("http://localhost:3000/api/task")
            .then((json) => {
                setTask(json.data);
            })
    } catch (error) {
        console.log(error);
    }
}

const addTask = async (task) => {
    try {
        axios.post("http://localhost:3000/api/task", {
            task
        })
            .then((response) => {
                window.location.href = "/";
            })
    } catch (error) {
        console.log(error);
    }
}

const deleteTask = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/api/task/${id}`)
            .then(() => {
                window.location.href = "/";
            });
    } catch (error) {
        console.log(error)
    }
}


const addCompleted = async (id, completed) => {
    try {
        completed === true ? completed = 1 : completed = 0
        axios.patch("http://localhost:3000/api/task", {
            id,
            completed
        })
            .then(() => {
                window.location.href = "/"
            })
    } catch (error) {
        console.log(error)
    }
}

export {
    getTasks,
    deleteTask,
    addTask,
    addCompleted
}