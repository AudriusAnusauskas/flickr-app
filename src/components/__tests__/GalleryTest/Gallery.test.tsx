import { render, waitFor, screen, act } from "@testing-library/react";
import Gallery from "../../Gallery/Gallery";

jest.mock("../../../services/photo.service", () => ({
  getPhotos: jest.fn().mockResolvedValue([
    {
      id: "1",
      title: "Test photo",
      url: "http://example.com/photo.jpg",
      thumbnailUrl: "http://example.com/photo-thumb.jpg",
    },
  ]),
}));

describe("Gallery component test", () => {
  it("should render a loader when isLoading is true", () => {
    render(<Gallery />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render photos when isLoading is false", () => {
    render(<Gallery />);
    waitFor(() => expect(screen.getByTestId("photo")).toBeInTheDocument());
  });

  test("renders the correct number of Photo components", () => {
    render(<Gallery />);
    waitFor(() => expect(screen.getAllByTestId("photo")).toHaveLength(1));
  });

  test("calls getPhotos with the correct arguments", () => {
    render(<Gallery />);
    waitFor(() =>
      expect(
        require("../../../services/photo.service").getPhotos
      ).toHaveBeenCalledWith("something", 1)
    );
  });

  test("it fetches more photos when scrolling to the bottom of the page", () => {
    render(<Gallery />);
    waitFor(() => expect(screen.getByTestId("photo")).toBeInTheDocument());
    act(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    waitFor(() => expect(screen.getAllByTestId("photo")).toHaveLength(2));
  });
});
