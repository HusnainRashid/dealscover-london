const mongoose = require("mongoose");

require("../mongodb_helper");
const Event = require("../../models/event");

describe("Event model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.events.drop(() => {
      done();
    });
  });

  it("stores an event object", () => {
    const event = new Event({
    });
    expect(event).toBeDefined();
  });
  it("has a name", () => {
    const event = new Event({
      name: "testEvent",
    });
    expect(event.name).toBeDefined();
    expect(event.name).toEqual("testEvent");
    expect(typeof event.name).toBe("string");
  });
  it("has a description", () => {
    const event = new Event({
      description: "this is a test event",
    });
    expect(event.description).toBeDefined();
    expect(event.description).toEqual("this is a test event");
    expect(typeof event.description).toBe("string");

  });
  it("has a genre", () => {
    const event = new Event({
      genre: "tech",
    });
    expect(event.genre).toBeDefined();
    expect(event.genre).toEqual("tech");
    expect(typeof event.genre).toBe("string");
  });
   it("has a URL", () => {
     const event = new Event({
       URL: "www.testevent.spec",
     });
     expect(event.URL).toBeDefined();
     expect(event.URL).toEqual("www.testevent.spec");
     expect(typeof event.URL).toBe('string')
   });
   it("has an image", () => {
     const event = new Event({
       image: "data:image/png;base64,AbcDEf",
     });
     expect(event.image).toBeDefined();
     expect(event.image).toEqual("data:image/png;base64,AbcDEf");
     expect(typeof event.image).toBe("string");
   });
  it("has a postcode", () => {
    const event = new Event({
      postcode: "AB1 1CD",
    });
    expect(event.postcode).toBeDefined();
    expect(event.postcode).toEqual("AB1 1CD");
    expect(typeof event.postcode).toBe("string");
  });
  it("has an address line", () => {
    const event = new Event({
      addressLine: "123 Testing Way",
    });
    expect(event.addressLine).toBeDefined();
    expect(event.addressLine).toEqual("123 Testing Way");
    expect(typeof event.addressLine).toBe("string");
  });
    it("has an entry price", () => {
     const event = new Event({
       price: 123,
     });
     expect(event.price).toBeDefined();
     expect(event.price).toEqual(123);
     expect(typeof event.price).toBe("number");
   });
     it("Takes a bool value for age restriction", () => {
       const event = new Event({
         legalAgeRestriction: true,
       });
       expect(event.legalAgeRestriction).toBeDefined();
       expect(event.legalAgeRestriction).toBeTruthy();
       expect(typeof event.legalAgeRestriction).toBe("boolean");
    });
  })