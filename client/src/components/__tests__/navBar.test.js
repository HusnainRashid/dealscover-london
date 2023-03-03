import { render, screen, cleanup } from "@testing-library/react";
import Navbar from "../navbar/Navbar";

afterEach(() => {
    cleanup();
});

test('should render NavBar login component', () => {
    render(<Navbar/>);
    const NavBarElement = screen.getByTestId('login');
    expect(NavBarElement).toBeInTheDocument();
})
test('should render NavBar signup component', () => {
    render(<Navbar/>);
    const NavBarElement = screen.getByTestId('signup');
    expect(NavBarElement).toBeInTheDocument();
})







