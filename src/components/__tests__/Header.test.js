import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("testing header loads the logo", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check if the correct logo is present
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe(
    "https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699747200&semt=ais"
  );
  // Check if the webapp is online
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("Online🟢");
  // Check if the cart has zero items
  const cartItemsNumber = header.getByTestId("cart-items-number");
  expect(cartItemsNumber.innerHTML).toBe("Cart- 0 items");
});
