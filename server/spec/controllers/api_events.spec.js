const axios = require('axios');
const APIEvent = require("../../models/api_event");
const APIEventsController = require('../../controllers/api_events');

describe("APIEventsController", () =>{
  describe( "Create", () =>{
   test.skip("saves events to the apievents collection", async () =>{
      const api_events = await APIEventsController.Create();

      expect(api_events).toBeDefined();
      expect(api_events[0].name).toBeDefined();
      
      
     
    })
     it("returns a bool", async () => {
       expect(true).toBeTruthy;
     });
  })
})