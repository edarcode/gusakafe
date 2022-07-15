import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "socket.io-client";
import CardTable from "../../components/containers/CardTable/CardTable";
import CaptureString from "../../components/popups/CaptureString/CaptureString";
import { product } from "../../constants/paths";
import { TableContext } from "../../contexts/TableContext";
import css from "./style.module.css";

const socket = connect(import.meta.env.VITE_APP_API);

export default function Home() {
	const navigateToProduct = useNavigate();
	const { tables, reStart } = useContext(TableContext);
	const [isOccupying, setIsOccupying] = useState({ id: "", flag: false });
	const [code, setCode] = useState("");

	useEffect(() => {
		if (tables && code) {
			const table = tables.tables.find(item => item.id === isOccupying.id);
			if (table && table.code === code) {
				socket.emit("occupyingTable", { id: table.id, code });
				navigateToProduct(product);
			}
		}
	}, [code, isOccupying, navigateToProduct, tables]);

	useEffect(() => {
		socket.on("busyTable", data => reStart(data));
	}, [reStart]);

	const handleClose = () => {
		setIsOccupying(isOccupying => ({ ...isOccupying, flag: false }));
	};

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
					setState={setCode}
					handleClose={handleClose}
				/>
			)}
		</main>
	);
}
