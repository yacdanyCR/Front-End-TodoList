import swal from "sweetalert"

const successAlert = (task) => {
    swal({
        title: task + " Added!",
        icon: "success",
        button: "Ok!",
    });
}
export {
    successAlert
}