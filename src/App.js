import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	const [shirt, updateShirt] = useState({
		name: "Ten ao",
		price: "0",
		desc: "Mo ta",
		image: "https://sieuthihangmy.com.vn/upload/images/san_pham/2020-05/image0-1590546577.jpg",
		target: {
			value: 'abc'
		}
	});

	const update = (field, event) => {
		const tmp = JSON.parse(JSON.stringify(shirt));
		tmp[field] = event.target.value;
		updateShirt(tmp);
	};

	return (
		<div className="App">
			<header className="header">
				<h2> Edit shirt </h2> <Button> Go Home! </Button>
			</header>

			<div className="container">
				<div className="preview">
					<div className="image" style={{ background: `url(${shirt.image})` }}></div>
					<div className="name"> {shirt.name} </div>
					<div className="price">
						{shirt.price}
						vnđ
					</div>
					<div className="desc"> {shirt.desc} </div>
				</div>
				<div className="edit">
					<h3 className="label">Chỉnh sửa</h3>

					<input
						value={shirt.name}
						className="edit-name"
						placeholder="Name"
						onChange={(e) => {
							update("name", e);
						}}
					/>
					<input
						value={shirt.price}
						className="edit-price"
						placeholder="Price"
						onChange={(e) => {
							update("price", e);
						}}
					/>
					<input
						value={shirt.desc}
						className="edit-desc"
						placeholder="Description"
						onChange={(e) => {
							update("desc", e);
						}}
					/>
					<input
						value={shirt.image}
						className="edit-image"
						placeholder="Image Url"
						onChange={(e) => {
							update("image", e);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
