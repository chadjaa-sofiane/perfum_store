import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// mean facts
const facts = [
	"no one love you because you are ugly",
	"the average stupid man has more iq than you",
	"you are the most beautiful on eath",
];

app.get("/facts", (req, res) => {
	const message = facts[Math.floor(Math.random() * facts.length)];
	res.json({ message });
});

app.listen(3000, () => {
	console.log("Server started on port 3000");
});