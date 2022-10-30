import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

export default function MutantDetails () {
    const [formInput,setFormInput] = useState({...initialForm})
    const ids = useParams()

    async function setMutant() {
        const res = await axios.get(`http://localhost:3000/newmutant/${ids.mutantID}`)
        setFormInput(res.data)
    }

    useEffect(()=> {
        setMutant()
    },[])

    return (
        <>
        <p>Real Name : {formInput.name}</p>
        <p>Nick Name : {formInput.nickname}</p>
        <p>Age : {formInput.age}</p>
        <p>Date Of Birth : {formInput.dateofbirth}</p>
        <p>Mutant Level/Class : {formInput.level}</p>
        <p>Based Region : {formInput.region}</p>
        <p>Ability : {formInput.ability}</p>
        <p>About : {formInput.about}</p>
        </>
    )

}