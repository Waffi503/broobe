import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { useForm  } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import useAuth  from '@/hooks/useAuth';



const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export default function Login() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

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
      const token = await login(data)
      if(!token) {
        return setError('Invalid credentials')
      }

      return navigate('/')
    }

    return (
      <div className="flex justify-center mt-5">
        <div  className="min-w-[300px]">
          <h1 className=" text-center font-bold text-3xl">Log in</h1>
          <p className='text-center text-red-500 text-sm'>{error}</p>
          <form className='flex flex-col gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
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
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
  