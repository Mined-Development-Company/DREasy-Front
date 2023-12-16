// Zod
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// React-hook-form
import { useForm } from 'react-hook-form';
// Forms
import { Input } from '../../forms';
// React-router-dom
import { Link } from 'react-router-dom';

const schemaLogin = z.object({
  email: z
    .string()
    .min(1, { message: 'Please provide email' })
    .email({ message: 'Please enter email' }),
  password: z
    .string()
    .min(8, 'Please enter a password longer than 8 (eight) characters'),
  name: z.string().min(1, { message: 'Please enter name' }),
});

type TypeLogin = z.infer<typeof schemaLogin>;

export function Register() {
  function handleRegister(data: TypeLogin): void {
    console.log(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeLogin>({
    mode: 'onSubmit',
    resolver: zodResolver(schemaLogin),
  });

  return (
    <article className="w-full h-screen lg:flex">
      <div className="hidden lg:block">
        <img
          className="absolute object-contain w-10 left-6 top-5"
          src="/logo/DREasy.svg"
          alt="logo"
        />
        <img
          className="object-cover w-full h-full"
          src="/background/background.png"
          alt="register-image"
        />
      </div>

      <form
        className="m-auto max-w-[400px] w-full p-8 px-8 rounded-lg"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div className="space-y-2">
          <h2 className="font-sans text-5xl font-bold text-green">Register</h2>
          <p className="font-sans text-base font-normal text-gray-600">
            Register to start using DREasy today.
          </p>
        </div>
        <Input
          title="Name"
          type="text"
          placeholder="Enter your name"
          error={errors?.name?.message}
          {...register('name')}
        />

        <Input
          title="Email"
          type="email"
          placeholder="Enter your email"
          error={errors?.email?.message}
          {...register('email')}
        />

        <Input
          title="Password"
          type="password"
          placeholder="Enter your password"
          error={errors?.password?.message}
          {...register('password')}
        />
        <div className="flex justify-end">
          <p className="font-sans text-green-500 hover:text-green-400 hover:underline">
            <Link className="outline-none" to="/login">
              Login
            </Link>
          </p>
        </div>
        <button
          className="w-full py-4 mt-4 font-sans font-semibold text-white uppercase bg-green-500 rounded outline-none hover:bg-green-400 hover:ring-1 hover:ring-green-500 focus:ring-2 focus:ring-green-400"
          type="submit"
        >
          Register
        </button>
      </form>
    </article>
  );
}
