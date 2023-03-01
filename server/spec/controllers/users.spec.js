const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require("../../models/user");
const Event = require("../../models/event");

describe("/users", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe("POST, when email and password are provided", () => {
    test("the response code is 201", async () => {
      let response = await request(app).post("/users").send({
        email: "someone@example.com",
        password: "password",
        firstName: "firstName",
        lastName: "lastName",
        favourites: "event",
      });
      expect(response.statusCode).toBe(201);
    });

    test("a user is created", async () => {
      await request(app).post("/users").send({
        email: "someone@example.com",
        password: "password",
        firstName: "firstName",
        lastName: "lastName",
        favourites: "event",
      });
      let newUser = users[users.length - 1];
      expect(newUser.email).toEqual("someone@example.com");
    });
  });

  describe("POST, when password is missing", () => {
    test("response code is 400", async () => {
      let response = await request(app).post("/users").send({
        email: "someone@example.com",
        firstName: "firstName",
        lastName: "lastName",
      });
      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({
        email: "someone@example.com",
        firstName: "firstName",
        lastName: "lastName",
      });
      let users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("POST, when email is missing", () => {
    test("response code is 400", async () => {
      let response = await request(app).post("/users").send({
        password: "1234",
        firstName: "firstName",
        lastName: "lastName",
      });
      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({
        password: "1234",
        firstName: "firstName",
        lastName: "lastName",
      });
      let users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("Find user by email", () => {
    test("find user by email", async () => {
      await request(app).post("/users").send({
        email: "someone@example.com",
        password: "password",
        firstName: "firstName",
        lastName: "lastName",
        favourites: "event",
      });
      let response = await request(app)
        .get("/users")
        .query({ email: "someone@example.com" });
      expect(response.statusCode).toBe(201);
      expect(response.body.user.email).toEqual("someone@example.com");
      expect(response.body.user.firstName).toEqual("firstName");
      expect(response.body.user.lastName).toEqual("lastName");
      expect(response.body.user.favourites).toEqual("event");

    });
  });

  test("does not find a user by email", async () => {
    await request(app).post("/users").send({
      email: "someone@example.com",
      password: "1234",
      firstName: "firstName",
      lastName: "lastName",
      favourites: "event",
    });
    let response = await request(app)
      .get("/users")
      .query({ email: "someon@example.com" });
    expect(response.statusCode).toBe(404);
  });
});

describe("/events", () => {
  // beforeEach(async () => {
  //   await Event.deleteMany({});
  // });

  test("it finds an event", async () => {
    // let response = await request(app)
    await request(app).post("/events").send({
        description: "football",
        genre: "sports",
        startDateTime: "Date",
        postcode: "se10rt3",
        _id: "63ff5e791e36baa4480599a",
    })
    

    let response = await request(app)
    .get("/events")
    .query({
      _id: "63ff5e791e36baa4480599a"});
    expect(response.statusCode).toBe(201);
    expect(response.body.event.description).toEqual("football");
    expect(response.body.event.genre).toEqual("sports");
    expect(response.body.event.startDateTime).toEqual("Date");
    expect(response.body.event.postcode).toEqual("se10rt3");
  })
})
// describe("GET, an event by _id", () => {

// })
