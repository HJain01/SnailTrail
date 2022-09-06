import {fireEvent, render, screen} from "@testing-library/react";
import AddressesInput from "../components/AddressesInput";

test('renders origin input box properly', () => {
    render(<AddressesInput typeOfAddress="origin" />);

    expect(screen.getByTestId("input-box")).toHaveTextContent("Type your origin addresses below")
    expect(screen.getByTestId("input-box")).toHaveTextContent("Enter origin address")
});

test('renders destination input box properly', () => {
    render(<AddressesInput typeOfAddress="destination" />);

    expect(screen.getByTestId("input-box")).toHaveTextContent("Type your destination addresses below")
    expect(screen.getByTestId("input-box")).toHaveTextContent("Enter destination address")
});

// test('renders popup when no text is input', () => {
//     render(<AddressesInput typeOfAddress="origin" />);
//
//     fireEvent.change(screen.getByTestId("address-input"), {target: {value: "123 Test Street"}});
//     fireEvent.click(screen.getByTestId("add-address-button"));
//
//     expect(screen.getByTestId("address-input").textContent).toMatch("123 ")
// })
