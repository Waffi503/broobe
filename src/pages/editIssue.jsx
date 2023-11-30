import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { useForm  } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams  } from 'react-router-dom';
import { getPriorities } from '@/services/priorities';
import useFetch from '@/hooks/useFetch';
import { Select } from '@/components/ui/select';
import { getIssue, updateIssue } from '@/services/issues';




const schema = z.object({
  priority_id: z.coerce.number().min(1),
});

export default function EditIssue() {
    const { id } = useParams();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { data:issue, error: errorIssues, isLoading:isLoadingIssue } = useFetch( getIssue, id );
    const { data:priorities, error: errorPriorities, isLoading:isLoading } = useFetch(getPriorities);


   
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors, isSubmitting },

    } = useForm(
      {
        resolver: zodResolver(schema),
        values: {
          priority_id: issue?.priority_id,
        },
      }
    )



    const onSubmit = async (data) => {
      const reponse = await updateIssue(id, data);
      navigate('/issues');
    }

    return (
      <div className="flex justify-center mt-5">
        <div  className="min-w-[300px]">
          <div className='flex justify-between items-center'>
            <h1 className="font-bold text-3xl">Edit Issue: {issue?.name} </h1>
          </div>
          <p className='text-center text-red-500 text-sm'>{error}</p>
          <form className='flex flex-col gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>{issue?.description}</p>
            </div>
            <div>
             { priorities ? <Select 
              disabled={isSubmitting || isLoading}
              {...register("priority_id")}>
                { priorities?.map((priority) => (
                  <option key={priority.id} value={priority.id}>{priority.type}</option>
                ))}
              </Select>
            : <></>  
            }
              <p className='text-xs text-red-500'>{errors.priority_id?.message}</p>
            </div>
            <Button disabled={isSubmitting} className='text-center'  type="submit">
              Update
            </Button>
          </form>
        </div>
      </div>
    );
  }
  