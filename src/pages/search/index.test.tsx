import {render, screen} from "@testing-library/react";
import Home from ".";
import { Provider } from "react-redux";
import Store from "../../store";

test('Should appear', () => {
    render(<Provider store={Store}><Home/></Provider>);
    expect(screen.getByTestId("searchbar")).toBeInTheDocument()
})