
import loginimag from '../.././assets/6310507.jpg'
import { SubmitHandler, useForm } from "react-hook-form"



interface LoginFormInputs {
    email: string;
    password: string;
  }

const Login = () => {
    const { register, handleSubmit } = useForm<LoginFormInputs>()
    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => console.log(data)
    

    return (
        <div className="container mx-auto mt-20">
            <div className='container mx-auto'>
                <div className='flex mx-auto items-center'>
                    <div>
                        <img className='w-1/2' src={loginimag} alt="" />

                    </div>
                    <div className='w-full'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Email</label>
                            <input className='border' {...register("email")} />
                            <br />
                            <label>Password</label>
                            <input className='border' {...register("password")} />
                            <br />
                            
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;