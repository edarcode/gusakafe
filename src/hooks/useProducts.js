import { useEffect, useState } from "react";
import { axios } from "../utils/axios";

export const useProducts = () => {
	const [products, setProducts] = useState();
	useEffect(() => {
		axios({
			url: "products",
			method: "GET"
		})
			.then(({ data }) => setProducts(data))
			.catch(err => console.log(err));
	}, []);
	return { products, setProducts };
};
