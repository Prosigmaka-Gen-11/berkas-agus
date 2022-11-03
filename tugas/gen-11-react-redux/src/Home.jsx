import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { logout } from "./userSlice"
import { useSelector, useDispatch } from "react-redux"

export default function Home () {
	const userSlice = useSelector(state => state.user)
	const dispatch = useDispatch()
    const [posts, setPosts] = useState([])

    function getPosts () {
		axios.get('https://dummyjson.com/auth/posts', {
			headers: {
				Authorization: 'Bearer ' + userSlice.token
			}
		}).then(res => {
			setPosts(res.data.posts)
		}).catch(err => {
			console.log(err.response)
		})
	}

	useEffect(() => {
		getPosts()
	}, [])

	return <>
		<h2>Hi, {userSlice.firstName}</h2>
		<h3>These Are Some Recent Post</h3>

        <ol>
			{posts.map(post =>
				<li>{post.body}</li>
			)}
		</ol>


		<Link to="/ToDos">Go To ToDo Lists</Link>
		<br />
		<br />
		<button onClick={() => dispatch(logout()) }>
			Log Out
		</button>
	</>
}