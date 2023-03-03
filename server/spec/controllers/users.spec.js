const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require("../../models/user");

describe("/users", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe("POST, when email and password are provided", () => {
    test("the response code is 201", async () => {
      let response = await request(app).post("/users").send({
        email: "someone@example.com",
        password: "1234",
        firstName: "firstName",
        lastName: "lastName",
      });
      expect(response.statusCode).toBe(201);
    });

    test("a user is created", async () => {
      await request(app).post("/users").send({
        email: "someone@example.com",
        password: "1234",
        firstName: "firstName",
        lastName: "lastName",
      });
      let users = await User.find();
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

  describe("Find user by id", () => {
    test("find user by id", async () => {
      await request(app).post("/users").send({
        email: "someone@example.com",
        password: "password",
        firstName: "firstName",
        lastName: "lastName",
      });
      let users = await User.find()
      let id = users[0]._id;

      let response = await request(app)
        .get(`/users/${id}`)
        // .query({ email: "someone@example.com" });
      expect(response.statusCode).toBe(200);
      expect(response.body.email).toEqual("someone@example.com");
      expect(response.body.firstName).toEqual("firstName");
      expect(response.body.lastName).toEqual("lastName");
    });
  });

  describe("Find user by id", () => {
    test("find user by id", async () => {
      await request(app).post("/users").send({
        email: "someone@example.com",
        password: "password",
        firstName: "firstName",
        lastName: "lastName",
      });
      let users = await User.find()
      let id = users[0]._id;

      let response = await request(app)
        .get(`/users/${id}`)
        // .query({ email: "someone@example.com" });
      expect(response.statusCode).toBe(200);
      expect(response.body.email).toEqual("someone@example.com");
      expect(response.body.firstName).toEqual("firstName");
      expect(response.body.lastName).toEqual("lastName");
    });
  });
});
