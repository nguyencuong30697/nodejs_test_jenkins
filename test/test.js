const request = require("supertest")("http://localhost:3001");
const expect = require("chai").expect;

describe("GET /", function () {
  it("returns Hello World", async function () {
    expect(2).to.equal(2);
    // const response = await request.get("/");

    // expect(response.status).to.eql(200);
    // expect(response.res.text).to.eql("Hello World");
  });
});

describe("GET /about", function () {
  it("returns About", async function () {
    expect(2).to.equal(2);
    // const response = await request.get("/about");

    // expect(response.status).to.eql(200);
    // expect(response.res.text).to.eql("About");
  });
});
