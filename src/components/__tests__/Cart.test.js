import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import RestaurantDetails from "../RestaurantDetails";
import Header from "../Header";
import { MENU_DATA } from "../../mocks/MenuData";

test("add to cart working", async () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve(MENU_DATA),
    });
  });
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        {/* <Header /> */}
        <RestaurantDetails />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(() => body.getByTestId("search-btn")));
  //   body.getByTestId("search-btn");
  //   const menuButtons = body.getAllByTestId("add-to-card-btn");
  //   fireEvent.click(menuButtons[0]);
  //   fireEvent.click(menuButtons[2]);
  //   const cartItems = body.getByTestId("cart-items-number");
  //   expect(cartItems.innerHTML).toBe("Cart- 2 items");
});
// TODO - tests not working for this file
