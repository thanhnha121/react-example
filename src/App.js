import "./App.css";
import Body from "./components/Body/Body";

function App() {
	let shirts = [
		{
			name: "T Shirt",
			color: "white",
			size: "XL",
			price: 100000,
			image:
				"https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
		},
		{
			name: "Polo",
			color: "white",
			size: "XL",
			price: 200000,
			image:
				"https://4menshop.com/images/thumbs/2020/09/ao-polo-ra-phoi-do-vai-po009-15497-slide-products-5f6c511ea4009.png",
		},
		{
			name: "Suit",
			color: "black",
			size: "L",
			price: 500000,
			image:
				"http://www.elleman.vn/wp-content/uploads/2017/09/21/suit-nam-elle-man-7.jpg",
		},
	];

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
							</div>
						);
					})}
				</div>
			</header>
			{/* <Body /> */}
		</div>
	);
}

export default App;
