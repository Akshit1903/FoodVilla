import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import { REST_DATA } from "../../mocks/RestData";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
test("shimmer rendered", () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve(REST_DATA),
    });
  });
  const body = render(<Body />);
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer).toBeInTheDocument();
  expect(shimmer.children.length).toBe(20);
});

test("body is rendered", async () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve(REST_DATA),
    });
  });
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(() => body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(20);
});

test("search is working", async () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve(REST_DATA),
    });
  });
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(() => body.getByTestId("search-btn")));
  const searchInput = body.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(4);
});
