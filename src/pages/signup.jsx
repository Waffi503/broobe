import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { useForm  } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { login, signup } from '@/services/auth';
import { useNavigate } from 'react-router-dom';



const schema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    password: z.string().min(8).max(100),
});

export default function Login() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

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
      const {error} = await signup(data)
      if(error) {
        return setError(error)
      }
      console.log('redirect')

      await login(data)
      
      return navigate('/')
            
    }

    return (
      <div className="flex justify-center mt-5">
        <div  className="form w-[300px]">
          <h1 className="title text-center font-bold text-3xl">Sign Up</h1>
          <p className='text-center text-red-500 text-sm'>{error}</p>
          <form className='flex flex-col gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                type="name"
                placeholder="User"
                disabled={isSubmitting}
                {...register("name")}
              />
              <p className='text-xs text-red-500'>{errors.name?.message}</p>
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                disabled={isSubmitting}
                {...register("email")}
              />
              <p className='text-xs text-red-500'>{errors.email?.message}</p>
            </div>
            <div>
              <Input
                type="password"
                disabled={isSubmitting}
                {...register("password")}
                placeholder="Password"
              />
              <p className='text-xs text-red-500'>{errors.password?.message}</p>
            </div>
            <Button disabled={isSubmitting} className='text-center'  type="submit">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    );
  }
  