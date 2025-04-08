import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

// Request Body

server.post("/videos", (req, res) => {
	const { title, description, duration } = req.body;

	database.create({
		title,
		description,
		duration,
	});

	return res.status(201).send();
});

server.get("/videos", () => {
	return "Hello User";
});

server.put("/videos/:id", () => {
	return "Hello Node.js";
});

server.delete("/videos/:id", () => {
	return "Hello Node.js";
});

server.listen({
	port: 3333,
});
