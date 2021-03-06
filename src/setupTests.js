// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { configure, render, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

//Чтобы упростить код
global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
