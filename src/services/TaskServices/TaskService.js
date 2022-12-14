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
        await axios.post("https://back-end-todolist-production.up.railway.app/api/task", {
            task
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteTask = async (id) => {
    try {
        await axios.delete(`https://back-end-todolist-production.up.railway.app/api/task/${id}`);
    } catch (error) {
        console.log(error)
    }
}


const addCompleted = async (id, completed) => {
    try {
        completed === true ? completed = 1 : completed = 0
        await axios.patch("https://back-end-todolist-production.up.railway.app/api/task", {
            id,
            completed
        })
            .then(() => {
                window.location.reload();
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