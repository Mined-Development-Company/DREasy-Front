import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';

import loginImg from '../../assets/login.svg';

const schemaLogin = z.object({
  email: z
    .string()
    .min(1, {message: 'Please provide email'})
    .email({message: 'Please provide valid email'}),
  password: z
    .string()
    .min(8, 'Please enter a password longer than 8 (eight) characters')
});

type TypeLogin = z.infer<typeof schemaLogin>;

export function Login() {
  function handleLogin(data: TypeLogin): void {
    console.log(data)
  }

  const { register, handleSubmit, formState: {errors} } = useForm<TypeLogin>({
    mode: 'onSubmit',
    resolver: zodResolver(schemaLogin),
  });

  return(
    <article className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className='hidden sm:block'>
        <img 
          className='w-full h-full object-cover' 
          src={loginImg} 
          alt="login-image" 
        />
      </div>

      <div className='bg-white flex flex-col justify-center'>
        <form 
          className='max-w-[430px] w-full mx-auto p-8 px-8 rounded-lg'
          onSubmit={handleSubmit(handleLogin)}
        >
          <h2 className='font-sans text-4xl font-semibold text-gray-800 '>
            Access the platform
          </h2>
          <p className="font-sans font-normal text-base text-gray-600">
            Log in or register to start using DREasy today.
          </p>
          <div className='flex flex-col py-2'>
            <label className='font-sans font-semibold text-sm text-gray-800 mt-2'>
              E-mail
            </label>
            
            <input 
              className='px-4 py-3 bg-white text-sm text-gray-800 leading-5 border 
              border-gray-200 rounded placeholder:text-gray-200 outline-none focus:border-green-500 focus:bg-gray-50 focus:outline-none'
              type="email" 
              placeholder='Enter your email'
              {...register('email')}
            />
            <span className='font-sans text-sm text-red-300'>
              {errors?.email?.message}
            </span>
          </div>
          <div className='flex flex-col py-2'>
            <label className='font-sans font-semibold text-sm text-gray-800'>
              Password
            </label>
            <input 
              className='px-4 py-3 bg-white text-sm text-gray-800 leading-5 border 
              border-gray-200 rounded placeholder:text-gray-200 outline-none focus:border-green-500 focus:bg-gray-50 focus:outline-none'
              type="password" 
              placeholder='Enter your password'
              {...register('password')}
            />
            <span className='font-sans text-sm text-red-300'>
              {errors?.password?.message}
            </span>
          </div>
          <div className='flex justify-between'>
            <p className="font-sans text-red-500 hover:text-red-400 hover:underline">
              <a className='outline-none' href="#">Forgot password</a>
            </p>
            <p className="font-sans text-green-500 hover:text-green-400 hover:underline">
              <a className='outline-none' href="#">Create account</a>
            </p>
          </div>
          <button 
            className='font-sans w-full mt-7 uppercase bg-green-500 text-white font-semibold py-4 rounded outline-none hover:bg-green-400 hover:ring-1 hover:ring-green-500 focus:ring-2 focus:ring-green-400'
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </article>
  )
}