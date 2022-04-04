const express = require("express");
const sequelize = require("./config");
const USER = require("./model");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const arr = ["sudharshan", "revanth", "mohan"];
app.get("/", (req, res) => {
	res.send(arr);
});
sequelize
	.sync({ force: true })
	.then(() => console.log("connected"))
	.catch((err) => console.log(err));
app.post("/post", (req, res) => {
	try {
		let { name, email } = req.body;
		let createdata = {
			name: name,
			email: email,
		};
		console.log(req.body, "13123");
		const create = USER.create(createdata);
		console.log(name, email);
		return res.status(200).send(create);
	} catch (err) {
		console.log(err);
	}
});
app.listen(5000, () => console.log("running on port 5000"));
