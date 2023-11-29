import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { useForm  } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { login } from '@/services/login';
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {


    return (
      <div className="flex justify-center mt-5">
        <div  className="min-w-[300px]">
          <h1 className="text-center font-bold text-3xl">Dashboard Issues</h1>

        </div>
      </div>
    );
  }
  