import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "socket.io-client";
import CardTable from "../../components/common/CardTable/CardTable";
import CaptureString from "../../components/popups/CaptureString/CaptureString";
import { product } from "../../constants/paths";
import { TableContext } from "../../contexts/TableContext";
import css from "./style.module.css";

const socket = connect("http://localhost:3001");

export default function Home() {
	const navigateToProduct = useNavigate();
	const { tables, setTables } = useContext(TableContext);
	const [isOccupying, setIsOccupying] = useState({ id: "", flag: false });
	const [code, setCode] = useState("");

	const handleOnChangeCode = e => {
		const code = e.target.value;
		setCode(code);
	};

	const handleOnSubmitOccupyTable = e => {
		e.preventDefault();
		if (tables && code) {
			const table = tables.tables.find(item => item.id === isOccupying.id);
			if (table && table.code === code) {
				socket.emit("occupyingTable", { id: table.id, code });
				navigateToProduct(product);
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
						onClick={() =>
							item.state !== "busy" &&
							setIsOccupying({ id: item.id, flag: true })
						}
					/>
				))}
			{isOccupying.flag && (
				<CaptureString
					placeholder="Ingrese el codigo"
					onChange={handleOnChangeCode}
					value={code}
					onSubmit={handleOnSubmitOccupyTable}
					onClose={() => setIsOccupying({ id: "", flag: false })}
				/>
			)}
		</main>
	);
}
