import Button from "../Button/Button";
import css from "./style.module.css";

export default function CardTable({ name, state, onClick }) {
	return (
		<article className={css.table}>
			<h6 className={css.table__title}>{name}</h6>
			<span>{state}</span>
			<Button modifier="ghost" onClick={onClick}>
				Ocupar
			</Button>
		</article>
	);
}
