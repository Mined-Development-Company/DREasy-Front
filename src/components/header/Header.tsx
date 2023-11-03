import { UseExample } from '../../context';

export const Header = () => {
  const { value, setValue } = UseExample();
  return (
    <header className="h-screen flex justify-center items-center gap-6">
      <button
        onClick={() => setValue(value + 1)}
        className="px-12 py-2 font-semibold text-white rounded-full bg-blue-800"
      >
        add
      </button>
      <p className="text-xl font-semibold">{value}</p>
    </header>
  );
};
