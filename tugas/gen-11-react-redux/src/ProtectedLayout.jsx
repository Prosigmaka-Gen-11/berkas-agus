import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"

export default function ProtectedLayout () {
	const userSlice = useSelector(state => state.user)

	if ( userSlice.isLogin) {
		return <Outlet />
	} else {
		return <Navigate to="/login" />
	}
}