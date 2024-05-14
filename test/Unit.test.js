const mongoose = require("mongoose");
const app = require("express");

describe("GET /index.html", () => {
    test("should return 200", () => {
        return request(app)
            .get("/")
            .expect('Content-Type', 'text/html')
            .expect(200)
    });
});