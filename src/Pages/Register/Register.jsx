import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import useAxiosPublic from "../../hooks/UseAxiosPublic";
import UseAuth from "../../hooks/UseAuth";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
const Register = () => {
  const { createUser, updateUserProfile } = UseAuth();
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userData = {
            name: data.name,
            email: data.email
          }
          axiosPublic.post('/users', userData)
          .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
              reset()
              toast('user Created', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              navigate('/')
              
            }
          })
          
          
        })
        .catch(error => {
          console.error(error);
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-16 bg-customBlue w-1/2 mx-auto text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body mx-auto">
      <h2 className="flex justify-center text-3xl font-semibold mb-4">Join Us </h2>
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            {...register("name", { required: true })}
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-800">name is required</span>
          )}
        </div>

        {/* photo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            name="photoURL"
            {...register("photoURL", { required: true })}
            className="input text-black input-bordered"
          />
          {errors.photoURL && (
            <span className="text-red-800">photoURL is required</span>
          )}
        </div>
        {/* photo URL */}


        {/* email */}
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

        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            placeholder="password"
            className="input text-black input-bordered"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-800">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-800">
              Password must be 6 or more characters
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-800">Maximum password length exceeded</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-800">
              Password must be include at least one uppercase letter, one
              lowercase letter, one special character, and one number.
            </p>
          )}
        </div>
        <div className="form-control mt-6">
          <input
            value="Register"
            className="btn bg-white font-semibold text-2xl text-black"
            type="submit"
            name=""
            id=""
          />
        </div>
        <p className="font-medium text-center">
          Already have an account{" "}
          <Link className="text-customOrange font-medium" to="/login">
            Login
          </Link>
          <div className="text-3xl">
          <FaGoogle />
          </div>
        </p>
      </form>
    </div>
  );
};

export default Register;