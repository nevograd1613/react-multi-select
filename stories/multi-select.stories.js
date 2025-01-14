import React from "react";
import { action, storiesOf } from "@storybook/react";
import ReactMultiSelect from "src/components/multi_select";
import { boolean, number, withKnobs } from "@storybook/addon-knobs";
import Readme from "../README.md";
import withReadme from "storybook-readme/with-readme";
import customStyle from "./custom_style.scss";
import SelectAll from "./custom_components/select_all";
import SelectionStatus from "./custom_components/selection_status";
import Search, { SearchWithValue } from "./custom_components/search";
import Item from "./custom_components/item";
import ListRenderer from "./custom_components/list_renderer";
import ListRendererItem from "./custom_components/list_renderer/item";
import SelectedItem from "./custom_components/selected_item";
import * as utils from "./multi_select_stories_util";

storiesOf("React Multi Select", module)
  .addDecorator(withKnobs)
  .add(
    "Default view",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.items}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
        />
      );
    }),
  )
  .add(
    "With different height",
    withReadme(Readme, () => {
      return (
        <div style={{ height: "1000px" }}>
          <ReactMultiSelect
            responsiveHeight={
              number("Height %", 50, { min: 0, max: 100 }) + "%"
            }
            items={utils.items}
            loading={boolean("Loading", false)}
            onChange={action("onChange")}
            showSearch={boolean("Show search", true)}
            showSelectAll={boolean("Show select all", true)}
          />
        </div>
      );
    }),
  )
  .add(
    "Preselected Items",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.items}
          selectedItems={[{ id: 3, label: "Item 3" }]}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
        />
      );
    }),
  )
  .add(
    "With max selected items",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.items}
          maxSelectedItems={4}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
          messages={{ disabledItemsTooltip: "You can select up to 4 items" }}
        />
      );
    }),
  )
  .add(
    "With some of the items disabled",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.withDisabledItems}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
          messages={{ disabledItemsTooltip: "You can select up to 4 items" }}
        />
      );
    }),
  )
  .add(
    "With Custom Messages",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.items}
          messages={utils.custom_messages}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
        />
      );
    }),
  )
  .add(
    "With Custom Styling",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.items}
          wrapperClassName={customStyle.wrapper}
          listHeight={500}
          selectedListHeight={540}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
          itemHeight={60}
          selectAllHeight={40}
        />
      );
    }),
  )
  .add(
    "Without Search and Select all",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.items}
          listHeight={500}
          selectedListHeight={448}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={false}
          showSelectAll={false}
        />
      );
    }),
  )
  .add(
    "With Large Data (7000 items)",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.manyItems}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
        />
      );
    }),
  )
  .add(
    "Without Selected Items",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.manyItems}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
          showSelectedItems={boolean("Show selected items", false)}
        />
      );
    }),
  )
  .add(
    "With custom components",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.items}
          itemRenderer={Item}
          selectAllRenderer={SelectAll}
          searchRenderer={Search}
          selectedItemRenderer={SelectedItem}
          selectionStatusRenderer={SelectionStatus}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
        />
      );
    }),
  )
  .add(
    "With custom components and custom value",
    withReadme(Readme, () => {
      class ValueController extends React.Component {
        state = {
          value: "",
        };

        onChange = (value) => {
          this.setState({ value });
        };

        render() {
          return (
            <ReactMultiSelect
              searchValue={this.state.value}
              searchValueChanged={this.onChange}
              items={utils.items}
              itemRenderer={Item}
              selectAllRenderer={SelectAll}
              searchRenderer={SearchWithValue}
              selectedItemRenderer={SelectedItem}
              selectionStatusRenderer={SelectionStatus}
              loading={boolean("Loading", false)}
              onChange={action("onChange")}
              showSearch={boolean("Show search", true)}
              showSelectAll={boolean("Show select all", true)}
            />
          );
        }
      }

      return <ValueController />;
    }),
  )
  .add(
    "Item grouping",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.itemsWithGroups}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
          withGrouping
        />
      );
    }),
  )
  .add(
    "Item grouping with Large Data (7000 items)",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          items={utils.manyItemsWithGroups}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
          withGrouping
        />
      );
    }),
  )
  .add(
    "Carousel Multi Select",
    withReadme(Readme, () => {
      return (
        <ReactMultiSelect
          listRenderer={ListRenderer}
          itemRenderer={ListRendererItem}
          selectAllHeight={40}
          itemHeight={300}
          selectedItemHeight={40}
          items={utils.images}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
          messages={{ disabledItemsTooltip: "You can select up to 4 items" }}
        />
      );
    }),
  )
  .add(
    "Selected items search",
    withReadme(Readme, () => {
      class SelectedSearchController extends React.Component {
        state = {
          value: "",
        };

        onChange = (value) => {
          this.setState({ value });
        };

        render() {
          return (
            <ReactMultiSelect
              showSelectedItemsSearch={true}
              searchSelectedItemsValue={this.state.value}
              searchSelectedItemsChanged={this.onChange}
              selectedItemsFilterFunction={(id) => (item) =>
                item.id === Number(id)
              }
              items={utils.items}
              loading={boolean("Loading", false)}
              onChange={action("onChange")}
              showSearch={boolean("Show search", true)}
              showSelectAll={boolean("Show select all", true)}
            />
          );
        }
      }

      return <SelectedSearchController />;
    }),
  )
  .add(
    "With some of the locked items",
    withReadme(Readme, () => {
      const disabledItem = [
        { id: 0, label: "item 0", disabled: true },
        { id: 5, label: "item 5", disabled: true },
      ];

      return (
        <ReactMultiSelect
          items={utils.withDisabledItems}
          selectedItems={disabledItem}
          showSelectedItemsSearch
          isLocked={(item) => item.disabled}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
          messages={{ disabledItemsTooltip: "You can select up to 4 items" }}
        />
      );
    }),
  )
  .add(
    "With some of the locked items selected & unselected",
    withReadme(Readme, () => {
      const disabledItem = [
        { id: 2, label: "item 2", disabled: true },
        { id: 5, label: "item 5", disabled: true },
      ];
      const items = [
        { id: 1, label: "item  1" },
        ...disabledItem,
        { id: 3, label: "item  3" },
      ];
      return (
        <ReactMultiSelect
          items={items}
          selectedItems={[disabledItem[0]]}
          showSelectedItemsSearch
          isLocked={(item) => item.disabled}
          loading={boolean("Loading", false)}
          onChange={action("onChange")}
          showSearch={boolean("Show search", true)}
          showSelectAll={boolean("Show select all", true)}
          messages={{ disabledItemsTooltip: "You can select up to 4 items" }}
        />
      );
    }),
  )
  .add(
    "As a controlled component",
    withReadme(Readme, () => {
      class SelectedItemsController extends React.Component {
        SINGLE_ITEM = [{ id: 1, label: "Item 1" }];
        MULTI_ITEMS = [
          { id: 2, label: "Item 2" },
          { id: 4, label: "Item 4" },
        ];

        constructor(props) {
          super(props);
          this.state = {
            selectedItems: this.SINGLE_ITEM,
          };
        }

        render() {
          return (
            <React.Fragment>
              <input
                style={{ marginBottom: "10px" }}
                value="set Selected Items from outside"
                type="button"
                onClick={() => {
                  this.setState({
                    selectedItems:
                      this.state.selectedItems.length > 1
                        ? this.SINGLE_ITEM
                        : this.MULTI_ITEMS,
                  });
                }}
              />
              <ReactMultiSelect
                items={utils.items}
                selectedItems={this.state.selectedItems}
                loading={boolean("Loading", false)}
                onChange={action("onChange")}
                showSearch={boolean("Show search", true)}
                showSelectAll={boolean("Show select all", true)}
              />
            </React.Fragment>
          );
        }
      }

      return <SelectedItemsController />;
    }),
  );
