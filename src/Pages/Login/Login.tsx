import { Link, useNavigate } from "react-router-dom";
import loginimag from "../.././assets/6310507.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../Redux/user/userApi";
import { useEffect } from "react";

import { useAppDispatch } from "../../Redux/hooks";

import { setCredentials } from "../../Redux/auth/authSlice";
import toast from "react-hot-toast";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { data, isSuccess, isError }] = useLoginUserMutation();

  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    const { email, password } = data;
    const options = {
      data: { email: email, password: password },
    };
    loginUser(options);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(data.message);
    }
    if (isSuccess) {
      const { user, token } = data.data;

      toast.success(data.message);
      dispatch(setCredentials({ user, token }));
      navigate("/");
    }
  }, [isSuccess, isError]);

  return (
    <div className="container mx-auto mt-20">
      <div className="container mx-auto">
        <div className="flex mx-auto items-center">
          <div>
            <img className="w-1/2" src={loginimag} alt="" />
          </div>
          <div className="">
            <form
              className="w-[400px] mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="block">Email</label>
              <input
                className="border w-full"
                placeholder="enter your email"
                {...register("email")}
              />
              <br />
              <label className="block mt-2">Password</label>
              <input
                className="border w-full"
                placeholder="enter your password"
                {...register("password")}
              />
              <br />

              <input
                className="bg-blue-600 px-5 py-2 text-white rounded hover:bg-blue-400 mt-2"
                type="submit"
              />
            </form>
            <div className="mt-2">
              <p>
                {" "}
                Not a member?{" "}
                <Link className="text-blue-400" to={"/signup"}>
                  {" "}
                  Signup now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
