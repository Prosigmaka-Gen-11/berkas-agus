import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import axios from "axios";

export default function Home () {
	const { userData, token, logout } = useContext(AuthContext)
    const [posts, setPosts] = useState([])

	function handleLogout () {
		logout()
	}

    function getPosts () {
		axios.get('https://dummyjson.com/auth/posts', {
			headers: {
				Authorization: 'Bearer ' + token
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
		<h2>Hi, {userData.firstName}</h2>
		<h3>These Are Some Recent Post</h3>

        <ol>
			{posts.map(post =>
				<li>{post.body}</li>
			)}
		</ol>


		<Link to="/ToDos">Go To ToDo Lists</Link>
		<br />
		<br />
		<button onClick={handleLogout}>
			Log Out
		</button>
	</>
}