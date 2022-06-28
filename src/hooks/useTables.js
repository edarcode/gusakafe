import { useEffect, useState } from "react";
import { axios } from "../utils/axios";

export const useTables = () => {
	const [tables, setTables] = useState();
	useEffect(() => {
		axios({
			url: "tables",
			method: "GET"
		})
			.then(({ data }) => setTables(data))
			.catch(err => console.log(err));
	}, []);
	return { tables, setTables };
};
