import * as React from "react";

const Counter = props => {
  const [value, setValue] = React.useState(props.value);

  React.useEffect(() => {
    document.title = `Counter: ${value}`;
  });

  const formatValue = () => {
    return value === 0 ? "Zero" : value;
  };

  const getBadgeClasses = value => {
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };

  console.log(props);

  return (
    <>
      <span className={getBadgeClasses(value)} style={{ width: 40 }}>
        {formatValue()}
      </span>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
        className="btn btn-secondary btn-sm"
      >
        +
      </button>
    </>
  );
};

export default Counter;
