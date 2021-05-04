import Form from "./form";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should the button on the form to be rendered", async () => {
  let handleResult = jest.fn();
  let form = render(<Form handleResult={handleResult} />);
  let button = form.getByText(/GO/i);
  expect(button).toBeInTheDocument();
});
