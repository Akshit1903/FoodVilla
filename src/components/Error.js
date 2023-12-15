import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Error</h1>
      <h4>{error.data}</h4>
    </>
  );
};
export default Error;
