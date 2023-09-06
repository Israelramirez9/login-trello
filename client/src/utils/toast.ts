import { toast } from "react-hot-toast";

export const handleToast = (message: string) => {
    toast.success(message, {
        position: 'top-center',
        duration: 4000
    })
}