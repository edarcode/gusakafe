import { Route, Routes } from "react-router-dom";
import "./App.css";
import { dashboard, home } from "./constants/paths";
import { TableContext } from "./contexts/TableContext";
import { useTables } from "./hooks/useTables";
import Admin from "./views/Admin/Admin";
import Client from "./views/Client/Client";
import Dashboard from "./views/Dashboard/Dashboard";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";

function App() {
	const { tables } = useTables();
	const tableContext = { tables };
	return (
		<div className="App">
			<TableContext.Provider value={tableContext}>
				<Routes>
					{/* ------------------CLIENT------------------------------ */}
					<Route path={home} element={<Client />}>
						<Route index element={<Home />} />
					</Route>
					{/* ------------------ADMIN------------------------------ */}
					<Route path={dashboard} element={<Admin />}>
						<Route index element={<Dashboard />} />
					</Route>
					{/* ------------------NOT FOUND------------------------------ */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</TableContext.Provider>
		</div>
	);
}

export default App;
