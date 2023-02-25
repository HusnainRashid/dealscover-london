import {render, screen, cleanup} from '@testing-library/react';
import EventsView from '../EventsView/EventsView';

test('should render the events view component', () =>{
  render(<EventsView/>);
  const eventsViewElement = screen.getByTestId('events-view');
  expect(eventsViewElement).toBeInTheDocument();

});