import React, { useEffect, useState } from "react";
import "./BackToTop.css";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
	const [visible, setVisible] = useState(false);

	// Show button after scrolling down
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	// Scroll to top smoothly
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{visible && (
				<button className="back-to-top" onClick={scrollToTop}>
					<FaArrowUp />
				</button>
			)}
		</>
	);
};

export default BackToTop;
