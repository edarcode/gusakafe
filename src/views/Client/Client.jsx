import { Outlet } from "react-router-dom";
import Header from "../../components/containers/Header/Header";

export default function Client() {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
}
