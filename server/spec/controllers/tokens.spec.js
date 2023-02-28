const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require('../../models/user');

describe("/tokens", () => {
  beforeAll(() => {
    const user = new User({ email: "someone@example.com", password: "password", firstName: "firstName", lastName: "lastName"})
    user.save()
  });

  afterAll( async () => {
    await User.deleteMany({})
  });

  test("a token is returned when creds are valid", async () => {
    let response = await request(app)
      .post("/tokens")
      .send({ email: "someone@example.com", password: "password"})
    expect(response.status).toEqual(201)
    expect(response.body.token).Not.toEqual(undefined)
    expect(response.body.message).toEqual("OK")
  });


  test("a token is not returned when creds are invalid", async () => {
    let response = await request(app)
      .post("/tokens")
      .send({email: "someone@example.com", password: "not_password"})
    expect(response.status).toEqual(401)
    expect(response.body.token).toEqual(undefined)
    expect(response.body.message).toEqual("auth error")
  })
})