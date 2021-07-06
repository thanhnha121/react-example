import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

let inited = false;

function App() {

	const [shirts, updateShirts] = useState([]);
	const [count, updateCount] = useState(0);

	// chay khi ma giao dien da load xong 
	useEffect(() => {
		console.log(`${count} products selected`);

		if (inited) return;

		axios.get('http://localhost:30000/get_shirts').then(response => {
			console.log('response ', response.data);
			const responseData = response.data;
			updateShirts(responseData.data);
		});
		
		inited = true;
	});

	let buy = (shirt) => {
		updateCount(count + 1);
	};
	// function buy() {}

	return (
		<div className="App">
			<header className="App-header">
				<h2>My products</h2>

				<div className="list">
					{shirts.map((shirt) => {
						return (
							<div key={shirt.name} className="shirt">
								<div
									className="image"
									style={{ background: `url(${shirt.image})` }}
								></div>
								<div className="name">{shirt.name}</div>
								<div className="color">{shirt.color}</div>
								<div className="size">{shirt.size}</div>
								<div className="price">{shirt.price} VNĐ</div>
								<button
									onClick={() => {
										buy(shirt);
									}}
									className="btn-buy"
								>
									Mua hàng
								</button>
							</div>
						);
					})}
				</div>
			</header>
		</div>
	);
}

export default App;
