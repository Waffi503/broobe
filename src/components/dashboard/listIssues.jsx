import { Select } from '@/components/ui/select';
import { getPriorities } from '@/services/priorities';
import { updateIssue, getIssues } from '@/services/issues';
import useFetch from '@/hooks/useFetch';
import { FaPencil  } from "react-icons/fa6";
import DeleteIssue from '@/components/dashboard/deleteIssue';
import { NavLink  } from 'react-router-dom';





export default function ListIssues() {
    const { data:issues, error:errorIsues, isLoading:isLoadingIssues } = useFetch(getIssues);
    const { data:priorities, error: errorPriorities, isLoading:isLoadingPriorities } = useFetch(getPriorities);

    const handleChange = (id) => async (e) => {
        e.target.disabled = true;
        await updateIssue(id, {priority_id: e.target.value});
        e.target.disabled = false;
    }

    if(!issues || issues.length === 0) {
        return <p>There are no issues</p>
    }

    if(isLoadingIssues || isLoadingPriorities) {
        return <p>Loading...</p>
    }

    if(errorIsues || errorPriorities) {
        return <p>There was an error</p>
    }
    
  return (
    <div className="relative w-full overflow-auto">
        <table  className='w-full caption-bottom text-sm'>
            <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" >
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground " >Name</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground " >Description</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground " >Priority</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground " >Actions</th>
                </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
            {issues && priorities ?   issues.map((issue) => (
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" key={issue.id}>
                    <td className="p-4 align-middle">{issue.name}</td>
                    <td className="p-4 align-middle">{issue.description}</td>
                    <td className="p-4 align-middle">
                        <Select 
                        onChange={handleChange(issue.id)}
                        defaultValue={issue.priority_id}>
                            {priorities ?
                                priorities.map((priority) => (
                                    <option 
                                    key={priority.id} 
                                    value={priority.id}
                                    
                                    >{priority.type}</option>
                                )): 
                                <></>
                            }
                        </Select>
                    </td>
                    <td className="p-4 align-middle">
                        <div className='flex flex-row gap-[10px]'>
                            <DeleteIssue id={issue.id} />
                            <NavLink to={`/issues/${issue.id}`}  className='bg-blue-500 rounded p-2'>
                                <FaPencil className='text-white hover:cursor-pointer' />
                            </NavLink  >
                        </div>
                    </td>
                </tr>
            ))
                : <></>
            }
            </tbody>
        </table>
    </div>
  )
}
