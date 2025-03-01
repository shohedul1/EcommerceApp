import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { MdDelete } from 'react-icons/md'

const DialogCloseButton = ({ onDelete }: { onDelete: () => void }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button>
                    <MdDelete
                        size={22}
                        className="text-red-500 cursor-pointer hover:text-red-700 transition duration-200"
                    />
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your product.
                    </DialogDescription>
                </DialogHeader>
                <button
                    onClick={onDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-700 transition"
                >
                    Confirm Delete
                </button>
            </DialogContent>
        </Dialog>
    )
}

export default DialogCloseButton
