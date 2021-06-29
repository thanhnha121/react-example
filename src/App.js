import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
	let shirts = [];

	useEffect(() => {});

	// define a variable named count using useState hook
	// initialize value as 0
	// define updateCount as a function to update the count variable
	let [count, updateCount] = useState(0);

	let count2 = 0;

	let buy = (shirt) => {
		alert(`You bought a ${shirt.name}!`);
	};
	// function buy() {}

	return (
		<div className="App">
			<header className="App-header">
				<h2>My products</h2>
				<div>Cart {count}</div>
				<div>Cart 2 {count2}</div>
				<button
					onClick={() => {
						updateCount(count + 1);
					}}
				>
					Increase count
				</button>
				<button
					onClick={() => {
						count2 += 1;
					}}
				>
					Increase count 2
				</button>

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
									onMouseOver={() => {
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
