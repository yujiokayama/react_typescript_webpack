import * as React from "react";
import classNames from "classnames";

type Props = {
  name: string;
};

const SubComponent: React.FC<Props> = (props) => {
  return (
    <>
      <h2>{props.name} component</h2>
    </>
  );
};

export default SubComponent;
