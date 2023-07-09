const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();

// dummy blog data
let blogs = [
	{
		id: "1",
		title: "How To Build A RESTAPI With Javascript",
		avatar: "images/blog1.jpg",
		intro:
			"iste odio beatae voluptas dolor praesentium illo facere optio nobis magni, aspernatur quas.",
	},
	{
		id: "2",
		title: "How to Build an PWA application with Node.js",
		avatar: "images/blog2.jpg",
		intro:
			"iste odio beatae voluptas dolor praesentium illo facere optio nobis magni, aspernatur quas.",
	},
	{
		id: "3",
		title: "Building a Trello Clone with React DnD",
		avatar: "images/blog3.jpg",
		intro:
			"iste odio beatae voluptas dolor praesentium illo facere optio nobis magni, aspernatur quas.",
	},
];

// open db (sqlite)

const db = new sqlite3.Database("db.sqlite", (err) => {
	if (err) {
		// Cannot open database
		console.error(err.message);
		throw err;
	} else {
		console.log("Connected to the SQLite database.");
	}
});

// add to db
db.run(
	`CREATE TABLE blog (id INTEGER PRIMARY KEY AUTOINCREMENT, title text,avatar text,intro text)`,
	(err) => {
		if (err) {
			// console.log(err)
			// Table already created
		} else {
			// Table just created, creating some rows
			var insert = "INSERT INTO blog (title, avatar, intro) VALUES (?,?,?)";
			blogs.map((blog) => {
				db.run(insert, [
					`${blog.title}`,
					`${blog.avatar}`,
					`${blog.intro}`,
				]);
			});
		}
	}
);


app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/blogs", async (req, res) => {
	db.all("select * from blog", (err, rows) => {
		if (err) return err;
		res.status(200).json({
			rows,
		});
	});
});

// // Root endpoint
// app.get("/", (req, res, next) => {
// 	res.json({ "message": "Ok" })
// });

// Insert here other API endpoints

// Default response for any other request
app.use(function (req, res) {
	res.status(404);
});


// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
	console.log(`Server running http://localhost:${HTTP_PORT} on port ${HTTP_PORT}`);
});


// app.listen(8000, () => console.log("Server is running on Port 8000"));
