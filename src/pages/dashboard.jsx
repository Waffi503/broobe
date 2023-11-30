import ListIssues from '@/components/dashboard/listIssues';
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";



export default function Dashboard() {
    return (
      <div className="flex justify-center mt-5">
        <div>
            <div className='flex justify-between'>
              <h1 className="text-center font-bold text-3xl">Dashboard Issues</h1>
              <Link to="/issues/new" className='bg-blue-500 rounded p-2 flex items-center gap-3'>
                  <FaPlus className='text-white hover:cursor-pointer text-sm' />
                  <p className='text-sm'> Add Issue </p>
              </Link>
            </div>
            <div className='mt-5 w-[800px]'>
                <ListIssues />
            </div>
        </div>
      </div>
    );
  }
  