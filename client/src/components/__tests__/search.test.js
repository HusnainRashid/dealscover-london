import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Search from '../Search/Search';

afterEach(() => {
    cleanup();
});


test('should render search component', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('search-btn');
    expect(SearchElement).toBeInTheDocument();
});

test('should render price element', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('pi_input');
    expect(SearchElement).toBeInTheDocument();
});

test('should render date element', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('date');
    expect(SearchElement).toBeInTheDocument();
});

test('should render location element', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('location');
    expect(SearchElement).toBeInTheDocument();
});

test('should render search button element', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('search-btn');
    expect(SearchElement).toBeInTheDocument();
});

test('should find user location on button click', async () => {
    const getCurrentPosition = jest.fn();
  
    global.navigator.geolocation = {
      getCurrentPosition,
    };
  
    render(<Search />);
  
    const findLocationButton = screen.getByRole('button', { name: 'Find my Location' });
  
    fireEvent.click(findLocationButton);
  
    expect(getCurrentPosition).toHaveBeenCalledTimes(1);
  });
  
