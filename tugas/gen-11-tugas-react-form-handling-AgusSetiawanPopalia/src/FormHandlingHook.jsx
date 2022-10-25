import useFormInput from "./useFormInput"

const radioList = [
	{ value: 'l', label: 'Laki-laki' },
	{ value: 'p', label: 'Perempuan' },
]

const checkboxList = [
	{ value: 'm', label: 'Makan' },
	{ value: 't', label: 'Tidur' },
	{ value: 'g', label: 'Gaming' },
	{ value: 'h', label: 'Healing' },
]

export default function FormHandlingHook () {
	const { formInput, handleFormInput } = useFormInput({
		name: '',
		date:'',
		radio:'',
		checkbox:'',
		textarea:'',
		select:''
		

	})

	function handleSubmit (evt) {
		evt.preventDefault()
		console.log(formInput)
	}

	return <>
		<div className="flex">
		<div className=" basis-1/3 p-4 h-auto mb-3 m-auto p-auto w-72 bg-yellow-400 rounded-lg mt-16 ">
		<p className="m-5 text-xl font-bold">Nama Lengkap : <br />{formInput.name}</p>
		<p className="m-5 text-xl font-bold">Tanggal Lahir : <br />{formInput.date}</p>
		<p className="m-5 text-xl font-bold">Jenis Kelamin : <br />{formInput.radio}</p>
		<p className="m-5 text-xl font-bold">Hobi : <br />{formInput.checkbox}</p>
		<p className="m-5 text-xl font-bold">Agama : <br />{formInput.select}</p>
		<p className="m-5 text-xl font-bold">Tentang Saya : <br />{formInput.textarea}</p>
		</div>
		<br />

		<form className="bg-teal-200 w-72 rounded-lg m-auto py-10 basis-1/2 mt-16" onSubmit={evt => handleSubmit(evt)}>
			<label >
			Name : <br />
				<input type="text" className="border-4 border-indigo-200" value={formInput.name} onChange={evt => handleFormInput(evt, 'name')} />
			</label>
			<br /><br />

			<label>
			Tanggal Lahir : <br />
			<input type="date" className="border-4 border-indigo-200" value={formInput.date} onChange={evt => handleFormInput(evt, 'date')} />
			</label>
			<br /><br />

			<p>Jenis Kelamin : </p>
			{radioList.map((radioItem) =>
			<label key={radioItem.value}>
				<input
				className="border-4 border-indigo-200"
					type="radio"
					name="radio"
					value={radioItem.value}
					checked={formInput.radio === radioItem.value}
					onChange={evt => handleFormInput(evt, 'radio')} />
					{radioItem.label} <br />
			</label>
			)}
			<br /><br />

			<p>Hobi : </p>
				{checkboxList.map((checkboxItem) =>
				<label key={checkboxItem.value}>
					<input
						type="checkbox"
						name="checkbox"
						value={checkboxItem.value}
						onChange = {evt => handleFormInput(evt, 'checkbox')} />
						{checkboxItem.label} <br />
				</label>
				
				)}
			<br /><br />

			<label>
			Agama : <br />
			<select value={formInput.category} onChange={evt => handleFormInput(evt, 'select')}>
			<option value="Islam">Islam</option>
			<option value="Khatolik">Khatolik</option>
			<option value="Protestan">Protestan</option>
			<option value="Hindu">Hindu</option>
			<option value="Buddha">Buddha</option>
			<option value="Khonghucu">Khonghucu</option>
			</select>
			</label>
			<br /><br />

			

			<label>
			Tentang Kamu <br />
			<textarea className="border-4 border-indigo-200" value={formInput.content} onChange={evt => handleFormInput(evt, 'textarea')}></textarea>
			</label>
			<br /><br />



			<button className="shadow-lg rounded-lg bg-white p-4 hover:shadow-lg">
				Submit
			</button>
		</form>
		</div>
	</>
}