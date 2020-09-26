import renderer from "react-test-renderer";
import React from "react";

import Row from "../../../components/Row/Row";

describe("Render Row", () => {
  it("render correctly Row component", () => {
    const rowComponent = renderer.create(<Row />).toJSON();
    expect(rowComponent).toMatchSnapshot();
  });

  it("check children prop type", () => {
    var rowComponentTest = mount(<Row />);
    // expect(rowComponentTest.props().children).toBeObject();
  });
});
