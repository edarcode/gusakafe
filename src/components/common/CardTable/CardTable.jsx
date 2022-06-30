import Button from "../Button/Button";
import css from "./style.module.css";

export default function CardTable({ name, state, onClick }) {
	return (
		<article className={css.table}>
			<h6 className={css.table__title}>{name}</h6>
			<span>{(state === "busy" && "Ocupada") || "Disponible"}</span>
			<Button modifier="ghost" className={css.table__occupy} onClick={onClick}>
				Ocupar
			</Button>
		</article>
	);
}
