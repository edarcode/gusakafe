import Button from "../../common/Button/Button";
import css from "./style.module.css";

export default function CaptureString({
	placeholder,
	onChange,
	onClick,
	value
}) {
	return (
		<div className={css.alert}>
			<input placeholder={placeholder} onChange={onChange} value={value} />
			<Button onClick={onClick}>Enviar</Button>
		</div>
	);
}
