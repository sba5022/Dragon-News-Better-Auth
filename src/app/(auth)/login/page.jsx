'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
    const handleLoginFunc = (data)=> {
console.log(data,"data");
    }
    console.log(errors,"errors");
    return (
        <div className="Container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100" >
            <div className="p-4 rounded-xl bg-white">
<h2 className="text-3xl font-bold text-center mb-4">Login your account</h2>
<form className="space-y-4" onSubmit={  handleSubmit(handleLoginFunc)}>
    <fieldset class="$$fieldset">
  <legend class="$$fieldset-legend font-semibold ">Email address</legend>
  <input {...register("email",{ required: "Email is required" })}  type="email" class="$$input w-full" placeholder="Type here your email" />
  {errors.email && <p className="text-red-500">Email is required</p>}
</fieldset>
  <fieldset class="$$fieldset">
  <legend class="$$fieldset-legend font-semibold ">Password</legend>
  <input {...register("password",{ required: "Password is required" })}  type="password" class="$$input w-full" placeholder="Type here your password" />
{errors.password && <p className="text-red-500">Password is required</p>}

</fieldset>
<button className="btn btn-neutral w-full">Login</button>
</form>
<p>Dont’t Have An Account ? <Link href="/register" className='text-red-600'>Register</Link></p>
            </div>
            
        </div>
    );
};

export default LoginPage;