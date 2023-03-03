const mongoose = require('mongoose');
const APIEvent = require('../../models/api_event');

describe('APIEvent model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/london_budget_test', { useNewUrlParser: true });
  });

  afterEach(async () => {
    await APIEvent.deleteMany();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

it('saves an event in the database', () =>{
  const apiEvent = new APIEvent({
    name: 'Test Event', 
    ticketMasterId: 'tm123',
    startDateTime: new Date(),
    endDateTime: new Date(),
    onsaleOnStartDate: new Date()
  });
  expect(apiEvent.name).toEqual('Test Event');
  expect(apiEvent.ticketMasterId).toEqual('tm123');
  expect(apiEvent.startDateTime).toBeInstanceOf(Date);
  expect(apiEvent.endDateTime).toBeInstanceOf(Date);
  expect(apiEvent.onsaleOnStartDate).toBeInstanceOf(Date);
  expect(apiEvent.created).toBeInstanceOf(Date);
  expect(apiEvent.iterated).toBe(false);
  expect(apiEvent.lastIterated).toBe(null);
  expect(apiEvent.status).toEqual('upcoming');
})
});