import React from 'react';
import { cn } from '../libs';
// React icons
import { FaCheck } from 'react-icons/fa6';

export const InputCheckBox = () => {
  const [isCheked, setIsCheked] = React.useState<boolean>(false);

  return (
    <label
      className={cn(
        'w-6 h-6 border-2 flex justify-center items-center m-auto',
        isCheked && 'bg-green-300',
      )}
      htmlFor="1"
    >
      {isCheked && <FaCheck className="text-white" />}
      <input
        className="hidden"
        id="1"
        type="checkbox"
        onChange={({ target }) => setIsCheked(target.checked)}
      />
    </label>
  );
};
