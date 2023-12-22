import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const {logIn, googleLogin} = UseAuth()
    const navigate = useNavigate();
    const location = useLocation()
    
    const handleGoogleLogin = () => {
        googleLogin()
    }


    const from = location.state?.from?.pathname || '/'




    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
        logIn(data.email, data.password)
        .then(data => {
            console.log(data.user);
            
              navigate(from, {replace: true})
        })
        .catch(err => {
            console.error(err);
        })
       
    
      };
    


  return (
    <div className="mt-16 bg-customBlue w-1/2 mx-auto text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body w-1/2 mx-auto">
        <h2 className="flex justify-center text-3xl font-semibold mb-4">Login </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            {...register("email", { required: true })}
            className="input text-black input-bordered"
          />
          {errors.email && (
            <span className="text-red-800">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,

            })}
            placeholder="password"
            className="input text-black input-bordered"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-800">Password is required</p>
          )}
        </div>
        <div className="" >
        </div>
        <div className="form-control mt-6">
          <input
            value="Login"
            className="bg-white text-black p-1 rounded-xl text-2xl font-semibold "
            type="submit"
            name=""
            id=""
          />
          
         <div onClick={handleGoogleLogin} className="flex hover:cursor-pointer items-center gap-3 border mt-3 ">
         <div className="text-2xl m-2">
         <FaGoogle /> 
         </div>
         <span>
         Login With Google
         </span>
         </div>
    <div className="flex justify-center">
    </div>
        </div>
        <p className="font-medium text-center">New User? Join us Now <Link className="text-customOrange font-medium" to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;