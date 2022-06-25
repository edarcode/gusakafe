import { Route, Routes } from "react-router-dom";
import "./App.css";
import { dashboard, home } from "./constants/paths";
import Admin from "./views/Admin/Admin";
import Client from "./views/Client/Client";
import Dashboard from "./views/Dashboard/Dashboard";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";

function App() {
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
