import React from "react";
import { Outlet, Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Section = ({ title, body, isVisible }) => {
  return (
    <div className="border border-black m-4 p-4 rounded-md">
      <h1 className="font-semibold">{title}</h1>
      <p>{isVisible && body}</p>
    </div>
  );
};

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordingSelected: "title1",
    };
  }
  render() {
    return (
      <div className="flex flex-col min-h-[70vh]">
        <button
          className="text-left min-w-full"
          onClick={() => {
            if (this.state.accordingSelected === "title1") {
              this.setState({ accordingSelected: "-1" });
            } else {
              this.setState({ accordingSelected: "title1" });
            }
          }}
        >
          <Section
            title="Description"
            body=<ul>
              <li>
                FoodVilla is a web application that simplifies the process of
                ordering food online.
              </li>
              <li>
                Built using React as the frontend library and Parcel as the
                package bundler, FoodVilla offers an intuitive and responsive
                user interface for an enhanced food ordering experience
              </li>
            </ul>
            isVisible={this.state.accordingSelected === "title1"}
          />
        </button>
        <button
          className="text-left min-w-full"
          onClick={() => {
            if (this.state.accordingSelected === "title2") {
              this.setState({ accordingSelected: "-1" });
            } else {
              this.setState({ accordingSelected: "title2" });
            }
          }}
        >
          <Section
            title="Features"
            body=<ul>
              <li>
                <i>User-Friendly Interface</i>: A clean and user-friendly
                interface designed for a seamless food ordering experience.
              </li>
              <li>
                <i>Dynamic Menu</i>: Browse through a dynamic menu with
                real-time updates on available dishes, prices, and special
                offers.
              </li>
              <li>
                <i>Cart Functionality</i>: Easily add and remove items from your
                cart, with a live updating total price.
              </li>
            </ul>
            isVisible={this.state.accordingSelected === "title2"}
          />
        </button>
        <button
          className="text-left min-w-full"
          onClick={() => {
            if (this.state.accordingSelected === "title3") {
              this.setState({ accordingSelected: "-1" });
            } else {
              this.setState({ accordingSelected: "title3" });
            }
          }}
        >
          <Section
            title="Tech Stack"
            body=<ul>
              <li>
                Frontend: <i>React</i>
              </li>
              <li>
                Package Bundler: <i>Parcel</i>
              </li>
              <li>
                Styling: <i>Tailwind CSS</i>
              </li>
              <li>
                Testing: <i>Jest, React Testing Library</i>
              </li>
              <li>
                State Management: <i>Redux</i>
              </li>
              <li>
                API Integration: <i>Swiggy API</i>
              </li>
            </ul>
            isVisible={this.state.accordingSelected === "title3"}
          />
        </button>
        {/* <h1>This is an app made using react</h1> */}
        <h5>
          <Link to="profile">Dont click</Link>
        </h5>
        {/* <p>Watch me use context in class based component XD</p> */}
        {/* <UserContext.Consumer>
            {(val) => (
              <p>
                {val.user.name}-{val.user.email}
              </p>
            )}
          </UserContext.Consumer> */}
        <Outlet />
      </div>
    );
  }
}
export default About;
