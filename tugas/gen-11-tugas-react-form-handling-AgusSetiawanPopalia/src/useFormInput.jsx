import { useState } from "react"

// DRY
export default function useFormInput (inputData) {
	const [formInput, setFormInput] = useState(inputData)

	function handleFormInput(evt, propName) {
		if(propName == 'checkbox'){
			const copyFormInput = { ...formInput }
			if(copyFormInput['checkbox'].indexOf(evt.target.value) != -1){
				copyFormInput['checkbox'] = copyFormInput['checkbox'].replace(evt.target.value,'')
			}else{
			copyFormInput[propName] = copyFormInput[propName] + evt.target.value
			}
			setFormInput(copyFormInput)
		}else{
			setFormInput({ ...formInput, [propName]: evt.target.value })
		}
	}

	return {
		formInput,
		handleFormInput
	}
}