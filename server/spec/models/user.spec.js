const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/user");
// const Event = require("../../models/event");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has an email address", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
      firstName: "firstName",
      lastName: "lastName",
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
      firstName: "firstName",
      lastName: "lastName",
    });
    expect(user.password).toEqual("password");
  });

  it("can list all users", (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  it("can save a user", (done) => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
      firstName: "firstName",
      lastName: "lastName",
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          email: "someone@example.com",
          password: "password",
          firstName: "firstName",
          lastName: "lastName",
        });
        done();
      });
    });
  });

//   // // describe("Event model", () => {
//   // //   beforeEach((done) => {
//   // //     mongoose.connection.collections.events.drop(() => {
//   // //       done();
//   // //     });
//   // //   });

//   // // it("can save an event", (done) => {
//   // //   const event = new Event({
//   // //     genre: "sports",
//   // //     URL: "URL",
//   // //     startDateTime: "Date",
//   // //     price: "100",
//   // //   });

//   // //   event.save((err) => {
//   // //     expect(err).toBeNull();

//   // //     Event.find((err, events) => {
//   // //       expect(err).toBeNull();

//   // //       expect(events[0]).toMatchObject({
//   // //         genre: "sports",
//   // //         URL: "URL",
//   // //         startDateTime: "Date",
//   // //         price: "100",
//   // //       });
//   // //       done();
//   // //     });
//   // //   });
//   // });
// });
})
