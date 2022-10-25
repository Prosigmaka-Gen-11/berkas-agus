import React, { Component } from "react";
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

export default class FormHandlingClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            date:'',
            radio:'',
            checkbox:'',
            textarea:'',
            select:''
        }
    }

    handleFormInput(evt, propName) {
        if(propName == 'checkbox'){
			if(this.state.checkbox.indexOf(evt.target.value) != -1){
				this.setState({ [propName]: this.state.checkbox.replace(evt.target.value,'') }) 
			}else{
			    this.setState({ [propName]: this.state.checkbox + evt.target.value }) 
			}
		}else{
            this.setState({ [propName]:  evt.target.value })
		}
       
    }

    handleSubmit(evt) {
        evt.preventDefault()
        console.log(this.state)
    }

    render(){
        return <>
		<div className="flex">
		<div className=" basis-1/3 p-4 h-auto mb-3 m-auto p-auto w-72 bg-yellow-400 rounded-lg mt-16 ">
		<p className="m-5 text-xl font-bold">Nama Lengkap : <br />{this.state.name}</p>
		<p className="m-5 text-xl font-bold">Tanggal Lahir : <br />{this.state.date}</p>
		<p className="m-5 text-xl font-bold">Jenis Kelamin : <br />{this.state.radio}</p>
		<p className="m-5 text-xl font-bold">Hobi : <br />{this.state.checkbox}</p>
		<p className="m-5 text-xl font-bold">Agama : <br />{this.state.select}</p>
		<p className="m-5 text-xl font-bold">Tentang Saya : <br />{this.state.textarea}</p>
		</div>
		<br />

		<form className="bg-teal-200 w-72 rounded-lg m-auto py-10 basis-1/2 mt-16" onSubmit={evt => this.handleSubmit(evt)}>
			<label >
			Name : <br />
				<input type="text" className="border-4 border-indigo-200" value={this.state.name} onChange={evt => this.handleFormInput(evt, 'name')} />
			</label>
			<br /><br />

			<label>
			Tanggal Lahir : <br />
			<input type="date" className="border-4 border-indigo-200" value={this.state.date} onChange={evt => this.handleFormInput(evt, 'date')} />
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
					checked={this.state.radio === radioItem.value}
					onChange={evt => this.handleFormInput(evt, 'radio')} />
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
						onChange = {evt => this.handleFormInput(evt, 'checkbox')} />
						{checkboxItem.label} <br />
				</label>
				
				)}
			<br /><br />

			<label>
			Agama : <br />
			<select value={this.state.category} onChange={evt => this.handleFormInput(evt, 'select')}>
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
			<textarea className="border-4 border-indigo-200" value={this.state.content} onChange={evt => this.handleFormInput(evt, 'textarea')}></textarea>
			</label>
			<br /><br />



			<button className="shadow-lg rounded-lg bg-white p-4 hover:shadow-lg">
				Submit
			</button>
		</form>
		</div>
	</>
    }

}