import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Match from "./pages/Match";

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />

				<Route path="/match" element={<Match />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
