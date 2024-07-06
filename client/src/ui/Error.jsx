import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <div>Something went wrong 😢</div>
      <div>{error.data || error.message}</div>

      <div
        className="cursor-pointer font-semibold"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </div>
    </div>
  );
}

export default Error;
