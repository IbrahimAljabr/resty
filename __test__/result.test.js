import Result from "./result";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should the result appear", async () => {
  const data = { data: "fakeData" };
  render(<Result data={data} />);
});
