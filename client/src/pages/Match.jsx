import "./Match.css";
import { useEffect, useState } from "react";
import { HiX, HiCheck } from "react-icons/hi";
import { getMatches, addUserToTeam } from "../services/api";
import { useParams } from "react-router-dom";

function MatchPage() {
	const { eventId } = useParams();

	const [players, setPlayers] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		getMatches(eventId).then((data) => {
			setPlayers(data);
		});
	}, [eventId]);

	const currentMatch = players[currentIndex];

	async function handleChoice() {
		if (!currentMatch) return;

		await addUserToTeam(currentMatch.user_id, eventId);

		// move to next player
		setCurrentIndex(currentIndex + 1);
	}

	if (!currentMatch) {
		return <h1>No more players</h1>;
	}

	return (
		<main className="match-page">
			<div className="match-container">
				<div className="match-image">
					<img src={currentMatch.picture_path} alt={currentMatch.name} />
				</div>

				<div className="match-sidebar">
					<section className="match-info">
						<h1>{currentMatch.name}</h1>

						<p>{currentMatch.description}</p>
					</section>

					<section className="match-buttons">
						<button className="reject-btn" onClick={handleChoice}>
							<HiX />
						</button>

						<button className="accept-btn" onClick={handleChoice}>
							<HiCheck />
						</button>
					</section>
				</div>
			</div>
		</main>
	);
}

export default MatchPage;
