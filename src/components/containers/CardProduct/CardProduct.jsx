import css from "./style.module.css";

export default function CardProduct({ id, img, name, price }) {
	return (
		<article className={css.product}>
			<img className={css.product__img} src={img} alt={name} />
			<h6 className={css.product__name}>{name}</h6>
			<span className={css.product__price}>$ {price}</span>
		</article>
	);
}
