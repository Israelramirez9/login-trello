import swal from "sweetalert";

export const deleteAlert = (callback: () => void, objectToDelete: string) => {
    swal({
        title: "Are you sure?",
        text: `Once deleted, you will not be able to recover this ${objectToDelete}!`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal(`Poof! Your ${objectToDelete} has been deleted!`, {
                    icon: "success",
                });
                callback()
            } else {
                swal(`Your ${objectToDelete} is safe!`);
            }
        });
}