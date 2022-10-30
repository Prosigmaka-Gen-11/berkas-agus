import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const regions = [
    {value:'california', label:'California'},
    {value:'texas', label:'Texas'},
    {value:'florida', label:'Florida'},
    {value:'alaska', label:'Alaska'},
    {value:'newyork', label:'New York'},
    {value:'newjersey', label:'New Jersey'}  
  ]
  
  const abilities = [
    {value:'telepathy', label:'Telepathy'},
    {value:'phasing', label:'Phasing'},
    {value:'invisibility', label:'Invisibility'},
    {value:'probabilityManipulation', label:'Probability Manipulation'},
    {value:'magnetism', label:'Magnetism'},
    {value:'weatherManipulation', label:'Weather Manipulation'},
    {value:'telekinesis', label:'Telekinesis'},
    {value:'teleportation', label:'Teleportation'},
    {value:'SuperStrength', label:'Super Strength'},
    {value:'SuperSpeed', label:'Super Speed'}
  ]
  
  const initialForm = {
    name: '',
    nickname: '',
    age: '',
    dateofbirth:'',
    level:'',
    region:'',
    ability:[],
    about:''
  }
  

export default function InsertMutant () { 
    const [formInput, setFormInput] = useState({...initialForm})

    const edit = useParams()
    const isEditing = formInput.id

    async function handleEdit() {
        const res = await axios.get(`http://localhost:3000/newmutant/${edit.mutantID}`)
        setFormInput(res.data)
      
    }
    useEffect(() => {
        if(edit.length !== 0) { 
                handleEdit()
        }
    },[] )


    function handleFormInput (e,propName)  {
        setFormInput({...formInput,[propName]: e.target.value})
    }
    
    function CheckboxHandler(evt)  {
        const { value, checked } = evt.target;
        const { ability } = formInput;
    
        if (checked) {
        setFormInput({...formInput,
            ability: [...formInput.ability, value],
        });
        } else {
            setFormInput({...formInput,
            ability: ability.filter((evt) => evt !== value),
        });
        }
    }

    async function handleSubmit(e)  {
        e.preventDefault()
        if(isEditing) {
            await axios.put(`http://localhost:3000/newmutant/${formInput.id}`,formInput)
            alert("Edit Successful!")
        }
        else {
            await axios.post(`http://localhost:3000/newmutant/`, formInput)
            alert("Mutant Registered!")
        }
        setFormInput({ ...initialForm })
    }
    return (
        <>
        <form onSubmit={evt => handleSubmit(evt)}>
			<label>
				<p>Real Name : </p>
				<input type="text" value={formInput.name} onChange={evt => handleFormInput(evt, 'name')} />
			</label>

      <label>
				<p>Nick Name : </p>
				<input type="text" value={formInput.nickname} onChange={evt => handleFormInput(evt, 'nickname')} />
			</label>
	
			<label>
				<p>Age : </p>
				<input type="number" value={formInput.age} onChange={evt => handleFormInput(evt, 'age')} />
			</label>
			
            <label>
				<p>Date Of Birth : </p>
				<input type="date" value={formInput.dateofbirth} onChange={evt => handleFormInput(evt, 'dateofbirth')} />
			</label>

            <label>
				<p>Mutant Level/Class : </p>
                <select value={formInput.level} onChange={evt => handleFormInput(evt, 'level')}>
                    <option value="" disabled>- Level/Class - </option>
                    <option value="Alpha">Alpha</option>
                    <option value="Beta">Beta</option>
                    <option value="Epsilon-Beta">Epsilon-Beta</option>
                    <option value="Omega">Omega</option>
                </select>
				</label>

           
				<p>Based Region : </p>
                {regions.map((region) => 
                    <label key={region.value}>
                     <p><input
                            type="radio"
                            name="region"
                            value={region.value}
                            
                            checked={formInput.region.indexOf(region.value) !==-1}
                            onChange={evt => handleFormInput(evt,'region')}/>
                            {region.label}
                            </p>
                     </label>
                )}

				<p>Ability : </p>
                  {abilities.map((ability) => 
                    <label key={ability.value}>
                        <input
                            type="checkbox"
                            value={ability.value}
                            checked={formInput.ability.indexOf(ability.value) !==-1}
                            onChange = {evt => CheckboxHandler(evt) }/>
                            {ability.label}
                        </label>
                )}
  
            <label>
				<p>About : </p>
				<textarea value={formInput.about} onChange={evt => handleFormInput(evt, 'about')}>
			        </textarea>
                </label>
                    <p>
			<button>
				Submit
			</button>
</p>
		</form>
        <button>
        <Link to="/">Mutant List</Link>
        </button>
   
        </>
    )

}