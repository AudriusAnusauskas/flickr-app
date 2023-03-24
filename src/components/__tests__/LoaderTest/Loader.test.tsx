import { render, screen } from "@testing-library/react";
import Loader from "../../Loader/Loader";

describe("Laoyout component test", () => {
  it("should render a loader when isLoading is true", () => {
    render(<Loader />);
    const loaderElement = screen.getByRole("status");
    expect(loaderElement).toBeInTheDocument();
  });
});
