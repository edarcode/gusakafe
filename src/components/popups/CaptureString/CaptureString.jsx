import { useState } from "react";
import Button from "../../common/Button/Button";
import Close from "../../common/Close/Close";
import css from "./style.module.css";

export default function CaptureString({ placeholder, setState, handleClose }) {
	const [string, setString] = useState("");
	const handleChangeString = e => {
		const string = e.target.value;
		setString(string);
	};
	const handleSubmit = e => {
		e.preventDefault();
		setState(string);
	};
	return (
		<form className={css.alert} onSubmit={handleSubmit}>
			<input
				className={css.alert__input}
				placeholder={placeholder}
				onChange={handleChangeString}
				value={string}
			/>
			<Button>Enviar</Button>
			<Close className={css.alert__close} onClick={handleClose} />
		</form>
	);
}
