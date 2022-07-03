import CardProduct from "../../components/containers/CardProduct/CardProduct";
import { useProducts } from "../../hooks/useProducts";
import css from "./style.module.css";

export default function Product() {
	const { products } = useProducts();
	return (
		<main className={css.products}>
			{products &&
				products.products.map(item => <CardProduct key={item.id} {...item} />)}
		</main>
	);
}
