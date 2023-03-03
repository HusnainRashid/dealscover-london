import {render, screen, cleanup } from '@testing-library/react'
import SignUpForm from '../user/SignUpForm'

afterEach(() => {
    cleanup();
});

test ('should render Signup email component', () => {
    render(<SignUpForm/>);
    const SignUpElement = screen.getByTestId('email');
    expect(SignUpElement).toBeInTheDocument();
})

test ('should render Signup password component', () => {
    render(<SignUpForm/>);
    const SignUpElement = screen.getByTestId('password');
    expect(SignUpElement).toBeInTheDocument();
})

test ('should render Signup firstName component', () => {
    render(<SignUpForm/>);
    const SignUpElement = screen.getByTestId('firstName');
    expect(SignUpElement).toBeInTheDocument();
})

test ('should render Signup lastName component', () => {
    render(<SignUpForm/>);
    const SignUpElement = screen.getByTestId('lastName');
    expect(SignUpElement).toBeInTheDocument();
})
