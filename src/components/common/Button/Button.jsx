import { useEffect, useRef } from "react";
import css from "./style.module.css";

export default function Button({
	type = "submit",
	children,
	className,
	modifier,
	onClick
}) {
	const btn = useRef(null);
	useEffect(() => {
		if (className)
			btn.current.className = `${btn.current.className} ${className}`;
		if (modifier)
			btn.current.className = `${btn.current.className} ${
				css[`btn--${modifier}`]
			}`;
	}, [className, modifier]);
	return (
		<button ref={btn} type={type} className={css.btn} onClick={onClick}>
			{children}
		</button>
	);
}
