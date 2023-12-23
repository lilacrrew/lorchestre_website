import { useState } from "react";
import "./concertList.css";
import { data } from "./concerts";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function ConcertList() {
	const [concerts, setConcerts] = useState(data);
	const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
	const [searchPhrase, setSearchPhrase] = useState("");

	const sortById = () => {
		const concertsCopy = [...concerts];
		concertsCopy.sort((concertA, concertB) => {
			if (sorted.reversed) {
				return concertA.id - concertB.id;
			}
			return concertB.id - concertA.id;
		});
		setConcerts(concertsCopy);
		setSorted({ sorted: "id", reversed: !sorted.reversed });
	};

	const sortByName = () => {
		const concertsCopy = [...concerts];
		concertsCopy.sort((concertA, concertB) => {
			const fullNameA = `${concertA.concert_name} ${concertA.orchestraTeam_name}`;
			const fullNameB = `${concertB.concert_name} ${concertB.orchestraTeam_name}`;
			if (sorted.reversed) {
				return fullNameB.localeCompare(fullNameA);
			}
			return fullNameA.localeCompare(fullNameB);
		});
		setConcerts(concertsCopy);
		setSorted({ sorted: "name", reversed: !sorted.reversed });
	};

	const search = (event) => {
		const matchedConcerts = data.filter((concert) => {
			return `${concert.concert_name} ${concert.orchestraTeam_name}`
				.toLowerCase()
				.includes(event.target.value.toLowerCase());
		});

		setConcerts(matchedConcerts);
		setSearchPhrase(event.target.value);
	};

	const renderConcerts = () => {
		return concerts.map((concert) => {
			return (
				<tr>
					<td>{concert.id}</td>
					<td>{`${concert.concert_name} ${concert.orchestraTeam_name}`}</td>
					<td>{concert.date}</td>
					<td>{concert.city}</td>
				</tr>
			);
		});
	};

	const renderArrow = () => {
		if (sorted.reversed) {
			return <FaArrowUp />;
		}
		return <FaArrowDown />;
	};
	return (
		<div className="list">
			<div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchPhrase}
					onChange={search}
				/>
			</div>
			<div className="table-container">
				<table>
					<thead>
						<tr>
							<th onClick={sortById}>
								<span style={{ marginRight: 10 }}>Id</span>
								{sorted.sorted === "id" ? renderArrow() : null}
							</th>
							<th onClick={sortByName}>
								<span style={{ marginRight: 10 }}>Name</span>
								{sorted.sorted === "name"
									? renderArrow()
									: null}
							</th>
							<th>
								<span>Date</span>
							</th>
							<th>
								<span>City</span>
							</th>
						</tr>
					</thead>
					<tbody>{renderConcerts()}</tbody>
				</table>
			</div>
		</div>
	);
}

export default ConcertList;