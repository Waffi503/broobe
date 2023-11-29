
export default function ListIssues({data}) {


    if(!data) {
        return <p>There are no issues</p>
    }

  return (
    <div>
        {data.map((issue) => (
            <div className='border border-gray-300 p-2 rounded-md mb-2' key={issue.id}>
                <h1 className='text-lg'>{issue.title}</h1>
                <p className='text-sm'>{issue.description}</p>
            </div>
        ))}
    </div>
  )
}
