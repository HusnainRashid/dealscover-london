import { render, screen, cleanup } from '@testing-library/react'
import LogInForm from '../auth/LoginForm';

afterEach(() => {
    cleanup();
});

test ('should render LoginForm email component', () => {
    render(<LogInForm />);
    const LoginElement = screen.getByTestId('email');
    expect(LoginElement).toBeInTheDocument();
})

test ('should render LoginForm password component', () => {
    render(<LogInForm/>);
    const LoginElement = screen.getByTestId('password');
    expect(LoginElement).toBeInTheDocument();
})
