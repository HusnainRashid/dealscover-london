import { render, screen, cleanup } from "@testing-library/react";
import IconsMenu from "../IconsMenu/IconsMenu";

afterEach(() => {
    cleanup();
});

test ('should render IconsMenu music icon component', () => {
    render(<IconsMenu/>);
    const IconsMenuElement = screen.getByTestId('music');
    expect(IconsMenuElement).toBeInTheDocument();
})
test ('should render IconsMenu sports icon component', () => {
    render(<IconsMenu/>);
    const IconsMenuElement = screen.getByTestId('sports');
    expect(IconsMenuElement).toBeInTheDocument();
})

test ('should render IconsMenu food & drinks icon component', () => {
    render(<IconsMenu/>);
    const IconsMenuElement = screen.getByTestId('food_&_drinks');
    expect(IconsMenuElement).toBeInTheDocument();
})

test ('should render IconsMenu visual arts icon component', () => {
    render(<IconsMenu/>);
    const IconsMenuElement = screen.getByTestId('visual_arts');
    expect(IconsMenuElement).toBeInTheDocument();
})
test ('should render IconsMenu family & attractions icon component', () => {
    render(<IconsMenu/>);
    const IconsMenuElement = screen.getByTestId('family_&_attractions');
    expect(IconsMenuElement).toBeInTheDocument();
})
