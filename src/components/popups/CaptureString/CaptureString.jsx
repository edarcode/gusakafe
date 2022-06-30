import Button from "../../common/Button/Button";
import Close from "../../common/Close/Close";
import css from "./style.module.css";

export default function CaptureString({
	placeholder,
	onChange,
	onClick,
	onClose,
	value
}) {
	return (
		<div className={css.alert}>
			<input
				className={css.alert__input}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
			<Button onClick={onClick}>Enviar</Button>
			<Close className={css.alert__close} onClick={onClose} />
		</div>
	);
}
