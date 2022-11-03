import axios from "axios"
import {  useState } from "react"
import { Navigate  } from "react-router-dom"
import { handleAfterLogin } from "./userSlice"
import { useSelector, useDispatch } from "react-redux"


export default function Login() {
	const userSlice = useSelector(state => state.user)
	const dispatch = useDispatch()

	console.log(userSlice)

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function handleLogin (evt) {
		evt.preventDefault()

		axios.post('https://dummyjson.com/auth/login', {
			username,
			password
		}).then(res => {
			dispatch(handleAfterLogin({
				firstName: res.data.firstName,
				token: res.data.token,
				isLogin:true
			}))
		}).catch(err => {
			alert(err.message)
		})
	}
	
	if (userSlice.isLogin) {
		return <Navigate to="/" />
	}
	

	return <>
		<h1>Login Form</h1>

		<form onSubmit={handleLogin}>
			<label>
				Username: <br />
				<input
					required
					type="text"
					value={username}
					onChange={evt => setUsername(evt.target.value)} />
			</label>
			<br /><br />

			<label>
				Password: <br />
				<input
					required
					type="password"
					value={password}
					onChange={evt => setPassword(evt.target.value)} />
			</label>
			<br /><br />

			<button>
				Login
			</button>
		</form>
	</>
}