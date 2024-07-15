import { useEffect } from "react";

const Message = () => {
  const onMouseMove = ({ x, y }) => {
    const coords = { x, y };
    console.log(coords);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};

export default Message;
