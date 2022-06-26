import { Link } from "react-router-dom";
import { contact, home, product } from "../../../constants/paths";
import css from "./style.module.css";

export default function Header() {
	return (
		<header className={css.header}>
			<nav className={css.header__nav}>
				<Link to={home} className={css.header__link}>
					Inicio
				</Link>
				<Link to={product} className={css.header__link}>
					Platillos
				</Link>
				<Link to={contact} className={css.header__link}>
					Contacto
				</Link>
			</nav>
		</header>
	);
}
