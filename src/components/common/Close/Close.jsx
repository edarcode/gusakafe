import { AiFillCloseCircle } from "react-icons/ai";
import css from "./style.module.css";

export default function Close({ onClick, className }) {
	return (
		<AiFillCloseCircle
			className={`${css.close} ${className}`}
			onClick={onClick}
		/>
	);
}
