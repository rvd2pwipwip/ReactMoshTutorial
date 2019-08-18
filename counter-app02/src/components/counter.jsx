import * as React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [tags, setTags] = React.useState(["tag1", "tag2", "tag3"]);

  React.useEffect(() => {
    document.title = `Counter: ${count}`;
  });

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const getBadgeClasses = count => {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <>
      <span className={getBadgeClasses(count)}>{formatCount()}</span>
      <button
        onClick={e => {
          setCount(count + 1);
        }}
        className="btn btn-secondary btn-sm"
      >
        +
      </button>
      {tags.length ? (
        <ul>
          {tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      ) : (
        <p>No items in the list</p>
      )}
    </>
  );
};

export default Counter;
