import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './AuthProvider'

export default function About() {
	const { token } = useContext(AuthContext)
	const [todos, settodo] = useState([])

	function gettodos () {
		axios.get('https://dummyjson.com/auth/todos', {
			headers: {
				Authorization: 'Bearer ' + token
			}
		}).then(res => {
			settodo(res.data.todos)
		}).catch(err => {
			console.log(err.response)
		})
	}

	useEffect(() => {
		gettodos()
	}, [])

	return <>
		<h1>All Your User ToDo List</h1>
		<Link to="/">Go Back to Post List</Link>

		<ul>
			{todos.map(todo=>
				<><li>{todo.todo}</li><input type="checkbox" checked={todo.completed} unselectable /></>
			)}
		</ul>
	</>
}