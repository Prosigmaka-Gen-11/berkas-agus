import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MutantList () {
    const [data,setData] = useState([])

    async function getData () {
        const result = await axios.get('http://localhost:3000/newmutant')
        setData(result.data)
    }

    async function handleDelete(id) {
        await axios.delete(`http://localhost:3000/newmutant/${id}`)
        getData()
    }
    useEffect(()=> {
        getData()
    },[])
    return (
        <>
     <table border="1" width="100%">
        <thead>
            <tr>
            <th>Real Name</th>
            <th>Nick Name</th>
            <th>Age</th>
            <th>Date Of Birth</th>
            <th>Mutant Level/Class</th>
            <th>Based Region</th>
            <th>Ability</th>
            <th>About</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map(data => 
                <tr key={data.id}>
                     <td>{data.name}</td>
                     <td>{data.nickname}</td>
                     <td>{data.age}</td>
                     <td>{data.dateofbirth}</td>
                     <td>{data.level}</td>
                     <td>{data.region}</td>
                     <td>{data.ability.join(', ')}</td>
                     <td>{data.about}</td>
                     <td>
                        <Link to={`/form/${data.id}`}>
                        <button>Edit</button>
                        </Link>
                    
                        <Link to={`/${data.id}`}>
                        <button>Detail</button>
                        </Link>

                        <button onClick={() => handleDelete(data.id)}>
                            Delete
                        </button>

                     </td>
                 </tr>
                )}
       
   
        </tbody>
        </table>

        <button>
        <Link to="/form">Add New Mutant</Link>
        
        </button>
 
   
        </>

    )
}