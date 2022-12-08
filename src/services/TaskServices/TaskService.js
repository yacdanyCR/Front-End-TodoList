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

export {
    getTasks
}