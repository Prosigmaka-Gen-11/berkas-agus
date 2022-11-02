import axios from "axios"
import { useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthProvider"

export default function Login() {
	const navigate = useNavigate()
	const { handleAfterLogin, isLogin } = useContext(AuthContext)

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function handleLogin (evt) {
		evt.preventDefault()

		axios.post('https://dummyjson.com/auth/login', {
			username,
			password
		}).then(res => {
			console.log(res.data)
			handleAfterLogin(res.data)
		}).catch(err => {
			console.log(err.response)
			alert(err.message)
		})
	}

	if (isLogin) {
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