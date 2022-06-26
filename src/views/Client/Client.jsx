import { Outlet } from "react-router-dom";
import Footer from "../../components/containers/Footer/Footer";
import Header from "../../components/containers/Header/Header";
import css from "./style.module.css";

export default function Client() {
	return (
		<div className={css.client}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
