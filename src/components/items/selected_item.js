import React from "react";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";
import IconButton from "@material-ui/core/IconButton";
import ItemLabel from "./item_label";
import classnames from "classnames";
import * as styles from "./selected_item.scss";

const SelectedItem = ({ item, height, group, disabled }) => (
  <div
    className={classnames({
      [styles.with_grouping]: group,
      [styles.selected_item]: !group,
      [styles.disabled]: disabled,
    })}
    style={{ height }}
  >
    <ItemLabel label={item.label} />
    {!group && !disabled && (
      <IconButton>
        <MdClose />
      </IconButton>
    )}
  </div>
);

SelectedItem.propTypes = {
  item: PropTypes.object,
  height: PropTypes.number,
  isLocked: PropTypes.func,
};

SelectedItem.defaultProps = {
  item: {},
  height: 40,
};

export default SelectedItem;
