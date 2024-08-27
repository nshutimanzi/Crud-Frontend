import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { listPersons } from '../services/PersonService'

const ListComponent = () => {

    const { data: persons, error, isLoading } = useQuery({
        queryKey: ['persons'],
        queryFn: listPersons,
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

  return (
    <div className='container'>

        <h2 className='text-center'>List of People</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Names</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.data.map(person => (
                        <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.email}</td>
                    </tr> 
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListComponent