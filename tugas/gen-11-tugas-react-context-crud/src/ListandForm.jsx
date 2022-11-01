import axios from "axios"
import { useContext, useEffect } from "react"
import { KingsLandingContext } from "./Provider"

const initialForm = {
    name:'',
    family:'',
    age:''
  }

let isEditing = false

export default function ListandForm() {
    const providerConsumer = useContext(KingsLandingContext)

    function handleInput(evt, propName) {
        providerConsumer.setFormInput({...providerConsumer.formInput,[propName]:evt.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if(isEditing) {
            await axios.put(`http://localhost:3000/kingsLanding/${providerConsumer.formInput.id}`,providerConsumer.formInput)
            alert("Edit Successful!")
        }else{
            await axios.post("http://localhost:3000/kingsLanding", providerConsumer.formInput)
        }
        isEditing = false
        providerConsumer.setFormInput({...initialForm})
    }

    async function getKingsLandingsBoard() {
        const res = await axios.get('http://localhost:3000/kingsLanding')
        providerConsumer.setBoard(res.data)
    }

    async function handleDelete(id) {
        await axios.delete(`http://localhost:3000/kingsLanding/${id}`)
    }

    async function handleEdit(id) {
        isEditing = true
        const res = await axios.get(`http://localhost:3000/kingsLanding/${id}`)
        providerConsumer.setFormInput(res.data)
      
    }

    useEffect(()=> {
        getKingsLandingsBoard()
    },[providerConsumer.board])


    return (
        <>
            <form onSubmit={(e => handleSubmit(e))}>
                <label>
                    <p>     
                         Name :
                    <input
                        type="text"
                        value={providerConsumer.formInput.name}
                        onChange={(e=> handleInput(e,"name"))}
                    />
                        </p>
              
                </label>
                <label>
                    <p>     
                         Family :
                    <input
                        type="text"
                        value={providerConsumer.formInput.family}
                        onChange={(e=> handleInput(e,"family"))}
                    />
                        </p>
              
                </label>
                <label>
                    <p>
                           Age:
                    <input 
                        type="number"
                        value={providerConsumer.formInput.age}
                        onChange={(e => handleInput(e,"age"))}
                    /> 
                    </p>
                
                </label>
                <button>
                    Submit
                    </button>
            </form>


            <hr />

            <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Family Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {providerConsumer.board.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.family}</td>
                        <td>{item.age}</td>
                        <td>
                        <button onClick={() => handleEdit(item.id)}>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(item.id)}>
                            Delete
                        </button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>

            
        </>

    )
}