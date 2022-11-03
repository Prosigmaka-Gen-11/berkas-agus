import axios from "axios";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

export default function About() {
	const userSlice = useSelector(state => state.user)
	const [todos, settodo] = useState([])

	function gettodos () {
		axios.get('https://dummyjson.com/auth/todos', {
			headers: {
				Authorization: 'Bearer ' + userSlice.token
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