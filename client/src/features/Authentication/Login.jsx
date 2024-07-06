import {
  Card,
  Input,
  Typography,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLogin } from "../../Hooks/useAuth";
import Loader from "../../ui/Loader";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const { userLogin, isLoading } = useLogin();

  function onSubmit({ email, password }) {
    userLogin(
      { email, password },
      {
        onSettled: () => {},
      }
    );
  }
  if (isLoading) return <Loader />;
  return (
    <div className="h-screen w-full grid place-items-center bg-gradient-to-r from-blue-800 via-blue-400 to-blue-200 object-cover">
      <Card color="transparent" shadow={true} className="p-7 bg-white">
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to log in.
        </Typography>
        <br />
        <form
          className="mb-4 w-[500px] grid grid-cols-1 gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <div>
            <Controller
              name="firstName"
              rules={{
                required: "First name is Required",
                minLength: {
                  value: 6,
                  message: "Minimum 3 characters required",
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  size="lg"
                  {...field}
                  label="firstName"
                  error={Boolean(errors?.firstName?.message)}
                />
              )}
            />
            {errors?.firstName?.message && (
              <span className="error-text">{errors?.firstName?.message}</span>
            )}
          </div>
          <div>
            <Controller
              name="lastName"
              rules={{
                required: "Last name is Required",
                minLength: {
                  value: 6,
                  message: "Minimum 3 characters required",
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  size="lg"
                  {...field}
                  label="lastName"
                  error={Boolean(errors?.lastName?.message)}
                />
              )}
            />
            {errors?.lastName?.message && (
              <span className="error-text">{errors?.lastName?.message}</span>
            )}
          </div> */}
          <div className="col-span-2">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email ID is Required",
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "Email ID is invaild",
                },
              }}
              render={({ field }) => (
                <Input
                  type="email"
                  size="lg"
                  {...field}
                  label="Email ID"
                  error={Boolean(errors?.email?.message)}
                />
              )}
            />
            {errors?.email?.message && (
              <span className="error-text">{errors?.email?.message}</span>
            )}
          </div>
          <div className="col-span-2">
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is Required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                  message: "Password not strong enough",
                },
              }}
              render={({ field }) => (
                <Input
                  type="password"
                  {...field}
                  size="lg"
                  label="Password"
                  error={Boolean(errors?.password?.message)}
                />
              )}
            />
            {errors?.password?.message && (
              <span className="error-text">{errors?.password?.message}</span>
            )}
          </div>
          <div className="flex w-full justify-center items-center">
            <Button type="submit" className="!bg-blue-800">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
