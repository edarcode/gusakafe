import { useProducts } from "../../hooks/useProducts";

export default function Product() {
	const { products } = useProducts();
	console.log(products);
	return <div>Product</div>;
}
