import { Link } from "react-router-dom";
import loginimag from "../.././assets/6310507.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateUserMutation } from "../../Redux/features/user/userApi";

interface SignupFormInputs {
  email: string;
  password: string;
}

const SignUp = () => {
  const [createUser] = useCreateUserMutation();
  const { register, handleSubmit } = useForm<SignupFormInputs>();
  const onSubmit: SubmitHandler<SignupFormInputs> = (data) => {
    const { email, password } = data;
    const options = {
      data: { email: email, password: password },
    };
    createUser(options);
  };

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
                Already a member?{" "}
                <Link className="text-blue-400" to={"/login"}>
                  {" "}
                  Signin now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
