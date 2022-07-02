import Button from "../../common/Button/Button";
import Close from "../../common/Close/Close";
import css from "./style.module.css";

export default function CaptureString({
	placeholder,
	onChange,
	onSubmit,
	onClose,
	value
}) {
	return (
		<form className={css.alert} onSubmit={onSubmit}>
			<input
				className={css.alert__input}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
			<Button>Enviar</Button>
			<Close className={css.alert__close} onClick={onClose} />
		</form>
	);
}
