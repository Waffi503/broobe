import { FaTrashCan} from "react-icons/fa6";
import { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { deleteIssue } from '@/services/issues';
import { useNavigate } from 'react-router'
 
export default function DeleteIssue({id}) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteIssue(id);
        setOpen(false);
        navigate(0);
    }
  return (
    <>
        <button onClick={()=> setOpen(true)} className='bg-red-500 rounded p-2'>
            <FaTrashCan className='text-white hover:cursor-pointer' />
        </button>
        <Modal onClose={()=> setOpen(false)} open={open} >
                <p>Are you sure to delete the issue?</p>
                <div className='flex flex-row gap-[10px] justify-end'>
                    <button onClick={()=>setOpen(false)} className='bg-blue-500 rounded p-2'>
                        <p className='text-white hover:cursor-pointer'>Cancel</p>
                    </button>
                    <button onClick={handleDelete} className='bg-red-500 rounded p-2'>
                        <p className='text-white hover:cursor-pointer'>Delete</p>
                    </button>
                </div>
        </Modal>
    </>
  )
}
