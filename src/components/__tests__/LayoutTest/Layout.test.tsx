import { render, screen } from "@testing-library/react";
import Layout from "../../Layout/Layout";

describe("Laoyout component test", () => {
  it("should render a loader when isLoading is true", () => {
    render(<Layout />);
    expect(screen.getByTestId("gallery")).toBeInTheDocument();
  });
});
