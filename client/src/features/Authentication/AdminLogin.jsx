import { Card, Input, Typography, Button } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { useAdminLogin } from "../../Hooks/useAuth";
import Loader from "../../ui/Loader";

const AdminLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const { adminLogin, isLoading } = useAdminLogin();

  function onSubmit({ email, password }) {
    adminLogin(
      { email, password },
      {
        onSettled: () => {},
      }
    );
  }
  if (isLoading) return <Loader />;
  return (
    <div className="h-screen w-full grid place-items-center bg-conic-gradient object-cover">
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

export default AdminLogin;
