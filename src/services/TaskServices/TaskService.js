import axios from "axios"

const getTasks = async (setTask) => {
    try {
        await axios.get("https://back-end-todolist-production.up.railway.app/api/task")
            .then((json) => {
                setTask(json.data);
            })
    } catch (error) {
        console.log(error);
    }
}

const addTask = async (task) => {
    try {
        axios.post("https://back-end-todolist-production.up.railway.app/api/task", {
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
        await axios.delete(`https://back-end-todolist-production.up.railway.app/api/task/${id}`)
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
        axios.patch("https://back-end-todolist-production.up.railway.app/api/task", {
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