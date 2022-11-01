import { createContext } from "react";
import { useState } from "react";

export const KingsLandingContext = createContext()

const initialForm = {
  name:'',
  family:'',
  age:''
}

export default function Provider(props){

  const [board, setBoard] = useState([])
  const [formInput, setFormInput] = useState({...initialForm})


  return <>
    <KingsLandingContext.Provider value={{
      board, 
      setBoard,
      formInput,
      setFormInput
    }}>
      
    {props.children}

    </KingsLandingContext.Provider>
  </>

}

