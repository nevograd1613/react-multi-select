import React from "react";
import ShallowRenderer from "react-shallow-renderer";

import Loader from "../../../src/components/loader/loader";

describe("Loader", () => {
  test("default snapshot", () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Loader />);
    expect(tree).toMatchSnapshot();
  });
});
