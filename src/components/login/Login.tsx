import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { Input } from '../../forms/Input';
import { Link } from 'react-router-dom';

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
    <article className="relative flex flex-col w-screen h-screen lg:flex-row">
        <div className='relative hidden lg:block '>
          <img className='absolute object-contain w-10 left-6 top-5' src="/logo/DREasy.svg" alt="logo" />
          <img
            className='w-full h-[400px] sm:h-[550px] lg:h-[100vh]'
            src='/background/background.png'
            alt="login-image"
          />
        </div>
        <form 
          className='max-w-[430px] w-full m-auto py-2 px-4 rounded-lg space-y-2'
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className='space-y-1'>
            <h2 className='font-sans text-4xl font-bold text-green'>
              Access the platform
            </h2>
            <p className="font-sans text-lg font-normal text-gray-600">
              Log in or register to start using DREasy today.
            </p>
          </div>
            <Input 
              title='Email'
              type="email" 
              error={errors.email?.message}
              placeholder='Enter your email'
              {...register('email')}
            />
            <Input
              title='Password'
              type="password" 
              placeholder='Enter your password'
              error={errors.password?.message}
              {...register('password')}
            />
          <div className='flex justify-between'>
            <p className="font-sans text-red hover:text-red-400 hover:underline">
              <button className='outline-none' >Forgot password</button>
            </p>
            <p className="font-sans text-green-500 hover:text-green-400 hover:underline">
              <Link to='/register'  className='outline-none'>Create account</Link>
            </p>
          </div>
          <button 
            className='w-full py-4 font-sans font-semibold text-white uppercase bg-green-500 rounded outline-none mt-7 hover:bg-green-400 hover:ring-1 hover:ring-green-500 focus:ring-2 focus:ring-green-400'
            type="submit"
          >
            Sign in
          </button>
        </form>
    </article>
  )
}