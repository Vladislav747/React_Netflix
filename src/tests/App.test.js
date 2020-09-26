import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

import App from "../App";
import Nav from "../components/Nav/Nav";

configure({ adapter: new Adapter() });

describe("Render App", () => {
  it("render correctly App component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("match snapshot", () => {
    let appComponent = renderer.create(<App />).toJSON();
    expect(appComponent).toMatchSnapshot();
  });
});
