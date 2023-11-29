import { useState,useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { useForm  } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { login } from '@/services/auth';
import { useNavigate } from 'react-router-dom';
import { getIssues } from '@/services/issues';
import useFetch from '@/hooks/useFetch';
import ListIssues from '@/components/dashboard/listIssues';


export default function Dashboard() {
    const { data, error, isLoading } = useFetch(getIssues);
    return (
      <div className="flex justify-center mt-5">
        <div>
          <h1 className="text-center font-bold text-3xl">Dashboard Issues</h1>
            <p className='text-center text-red-500 text-sm'>{error}</p>
            {isLoading ? 
                <p>Loading...</p> 
            : 
                <ListIssues issues={data} />
            }
        </div>
      </div>
    );
  }
  