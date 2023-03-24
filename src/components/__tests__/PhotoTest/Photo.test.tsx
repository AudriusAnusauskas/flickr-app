import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Photo from "../../Photo/Photo";

const photo = {
  id: "1",
  title: "Test photo",
  authorname: "Test author",
  farm: 1,
  server: "1",
  secret: "1234567890",
};

describe("Photo component test", () => {
  test("renders photo with correct title and author name", () => {
    render(<Photo photo={photo} />);
    const titleElement = screen.getByText(photo.title);
    const authorElement = screen.getByText(photo.authorname);
    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
  });

  test('renders unfavourited button with text "Favourite" if photo not in local storage', () => {
    localStorage.clear();
    render(<Photo photo={photo} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Favourite");
  });

  test('renders favourited button with text "Unfavourite" if photo in local storage', () => {
    localStorage.setItem(photo.id, "true");
    render(<Photo photo={photo} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Unfavourite");
  });

  test("toggles favourite status when button is clicked", () => {
    localStorage.clear();
    render(<Photo photo={photo} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent("Unfavourite");
    expect(localStorage.getItem(photo.id)).toEqual("true");
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent("Favourite");
    expect(localStorage.getItem(photo.id)).toBeNull();
  });
});
