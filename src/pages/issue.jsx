import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { useForm  } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { login } from '@/services/auth';
import { useNavigate } from 'react-router-dom';
import { getPriorities } from '@/services/priorities';
import useFetch from '@/hooks/useFetch';
import { Select } from '@/components/ui/select';
import { addIssue } from '@/services/issues';
import { FaArrowLeft } from "react-icons/fa6";




const schema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().min(3).max(100),
  priority_id: z.coerce.number().min(1),
});

export default function Issue() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { data, error: errorPriorities, isLoading } = useFetch(getPriorities);

    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm(
      {
        resolver: zodResolver(schema),
      }
    )

    const onSubmit = async (data) => {
      const reponse = await addIssue(data);
      navigate('/issues');
    }

    return (
      <div className="flex justify-center mt-5">
        <div  className="min-w-[300px]">
          <div className='flex justify-between items-center'>
            <h1 className="font-bold text-3xl">New Issue</h1>
          </div>
          <p className='text-center text-red-500 text-sm'>{error}</p>
          <form className='flex flex-col gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                placeholder="Name"
                disabled={isSubmitting}
                {...register("name")}
              />
              <p className='text-xs text-red-500'>{errors.name?.message}</p>
            </div>
            <div>
              <Input
                disabled={isSubmitting}
                {...register("description")}
                placeholder="Description"
              />
              <p className='text-xs text-red-500'>{errors.description?.message}</p>
            </div>
            <div>
              <Select 
              disabled={isSubmitting || isLoading}
              {...register("priority_id")}>
                {data?.map((priority) => (
                  <option key={priority.id} value={priority.id}>{priority.type}</option>
                ))}
              </Select>
              <p className='text-xs text-red-500'>{errors.priority_id?.message}</p>
            </div>
            <Button disabled={isSubmitting} className='text-center'  type="submit">
              Create
            </Button>
          </form>
        </div>
      </div>
    );
  }
  