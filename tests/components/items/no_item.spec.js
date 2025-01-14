import React from "react";
import ShallowRenderer from "react-shallow-renderer";

import NoItems from "../../../src/components/items/no_items";

describe("NoItem", () => {
  test("default snapshot", () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<NoItems />);
    expect(tree).toMatchSnapshot();
  });
});
