import React from "react";

interface Props {
  id: string;
}
const CodeSandBox: React.FC<Props> = ({ id }) => {
  return (
    <>
      <div className="codesandbox-dark">
        <iframe
          className="w-full h-[500px] border-0 border-radius-[4px] overflow-hidden"
          src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=dark`}
        ></iframe>
      </div>
      <div className="codesandbox-light">
        <iframe
          className="w-full h-[500px] border-0 border-radius-[4px] overflow-hidden"
          src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=light`}
        ></iframe>
      </div>
    </>
  );
};

export default CodeSandBox;
