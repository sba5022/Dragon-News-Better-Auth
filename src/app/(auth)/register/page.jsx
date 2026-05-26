'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { authClient} from "@/lib/auth-client"

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const handleRegisterFunc = async (data) => {
    console.log(data, "data");
    const { name,photoUrl,  email, password } = data;
    console.log(name, photoUrl, email, password, "register data");


    const {data:res,error} =  await authClient.signUp.email({
       name: name,
    email: email,
    password: password,
    image: photoUrl,
    callbackURL: "/",
    });
    console.log(res, error, "register response");
    if(error){
      alert(error.message)
    }
    if(res){
      alert("Registration successful! Please check your email to verify your account.")
    }
  }



  return (
    <div className="Container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100" >
      <div className="p-4 rounded-xl bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">Register your account</h2>
        <form className="space-y-8" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset class="$$fieldset">
            <legend class="$$fieldset-legend font-semibold ">Your Name</legend>
            <input {...register("name", { required: "Name is required" })} type="text" class="$$input w-full" placeholder="Type here your name" />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </fieldset>
          <fieldset class="$$fieldset">
            <legend class="$$fieldset-legend font-semibold ">Photo URL</legend>
            <input {...register("photoUrl", { required: "Photo URL is required" })} type="text" class="$$input w-full" placeholder="Type here your photo URL" />
            {errors.photoUrl && <p className="text-red-500">Photo URL is required</p>}
          </fieldset>
          <fieldset class="$$fieldset">
            <legend class="$$fieldset-legend font-semibold ">Email address</legend>
            <input {...register("email", { required: "Email is required" })} type="email" class="$$input w-full" placeholder="Type here your email" />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </fieldset>
          <fieldset class="$$fieldset">
            <legend class="$$fieldset-legend font-semibold ">Password</legend>
            <input {...register("password", { required: "Password is required" })} type="password" class="$$input w-full" placeholder="Type here your password" />
            {errors.password && <p className="text-red-500">Password is required</p>}

          </fieldset>
          <button className="btn btn-neutral w-full">Register</button>
        </form>
        <p>Already Have An Account ? <Link href="/login" className='text-red-600'>Login</Link></p>
      </div>

    </div>
  );
};

export default RegisterPage;