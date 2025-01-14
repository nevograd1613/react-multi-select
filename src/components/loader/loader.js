import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import * as styles from "./loader.scss";

const Loader = () => (
  <div className={styles.loader}>
    <CircularProgress style={{ width: 100 }} />
  </div>
);

export default Loader;
