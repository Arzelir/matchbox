import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";

import "./App.css";
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Match from "./pages/Match";
import Allevents from "./pages/Allevents";

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />

				<Route path="/match/:eventId" element={<Match />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/events" element={<Allevents />} />
			</Routes>
			<BackToTop />
		</BrowserRouter>
	);
}

export default App;
