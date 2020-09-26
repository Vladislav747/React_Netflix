import renderer from "react-test-renderer";
import React from "react";

import Banner from "../../../components/Banner/Banner";

describe("Render Banner", () => {
  it("render correctly Banner component", () => {
    const rowComponent = renderer.create(<Banner />).toJSON();
    expect(rowComponent).toMatchSnapshot();
  });

  it("has class all div elements", () => {
    const component = shallow(<Banner />);
    expect(component.find("header.banner")).toHaveLength(1);
    expect(component.find(".banner__contents")).toHaveLength(1);
    expect(component.find(".banner__description")).toHaveLength(1);
    expect(component.find(".banner__button")).toHaveLength(2);
  });
});
