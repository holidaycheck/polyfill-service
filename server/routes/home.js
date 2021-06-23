"use strict";

module.exports = app => {
	// Redirect to the docs page
	app.get("/", (request, response) => {
		response.status(200);
		response.set("Cache-Control", "max-age=0, must-revalidate, no-cache, no-store, private");
		response.json({});
	});
};
