import * as React from "react";

type Props = {
  name: string;
};

const SubComponent: React.FC<Props> = (props) => {
  return (
    <>
      <h2>{props.name}です</h2>
    </>
  );
};

export default SubComponent;
