import { useContext, useEffect } from "react";
import { connect } from "socket.io-client";
import CardTable from "../../components/common/CardTable/CardTable";
import { TableContext } from "../../contexts/TableContext";
import css from "./style.module.css";

const socket = connect("http://localhost:3001");

export default function Home() {
	const { tables } = useContext(TableContext);
	const handleOnClickOccupyTable = () => {
		socket.emit("occupyTable");
	};
	useEffect(() => {
		socket.on("occupyTable", () => console.log("occupy table"));
	}, []);
	return (
		<main className={css.home}>
			{tables &&
				tables.tables.map(item => (
					<CardTable
						key={item.id}
						{...item}
						onClick={handleOnClickOccupyTable}
					/>
				))}
		</main>
	);
}
