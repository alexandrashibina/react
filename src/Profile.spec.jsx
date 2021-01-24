import React from "react";
import { Profile } from "./Profile";
import renderer from "react-test-renderer";

describe("Profile", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
   });
})