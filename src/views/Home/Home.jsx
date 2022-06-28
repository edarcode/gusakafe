import { useContext, useEffect, useState } from "react";
import { connect } from "socket.io-client";
import CardTable from "../../components/common/CardTable/CardTable";
import CaptureString from "../../components/popups/CaptureString/CaptureString";
import { TableContext } from "../../contexts/TableContext";
import css from "./style.module.css";

const socket = connect("http://localhost:3001");

export default function Home() {
	const { tables, setTables } = useContext(TableContext);
	const [isOccupying, setIsOccupying] = useState({ id: "", flag: false });
	const [code, setCode] = useState("");

	const handleOnChangeCode = e => {
		const code = e.target.value;
		setCode(code);
	};

	const handleOnClickOccupyTable = () => {
		if (tables && code) {
			const table = tables.tables.find(item => item.id === isOccupying.id);
			if (table && table.code === code) {
				socket.emit("occupyingTable", { id: table.id, code });
				setIsOccupying({ id: "", flag: false });
				setCode("");
			}
		}
	};

	useEffect(() => {
		socket.on("busyTable", data => setTables(data));
	}, [setTables]);

	return (
		<main className={css.home}>
			{tables &&
				tables.tables.map(item => (
					<CardTable
						key={item.id}
						{...item}
						onClick={() => setIsOccupying({ id: item.id, flag: true })}
					/>
				))}
			{isOccupying.flag && (
				<CaptureString
					placeholder="Ingrese el codigo"
					onChange={handleOnChangeCode}
					value={code}
					onClick={handleOnClickOccupyTable}
				/>
			)}
		</main>
	);
}
