import React from 'react';

interface IExampleContext {
  value: number;
  setValue: (number: number) => void;
}

interface IExampleProvider {
  children: React.ReactNode;
}

const ExampleContext = React.createContext({} as IExampleContext);

export const UseExample = () => {
  return React.useContext(ExampleContext);
};

export const ExampleProvider = ({ children }: IExampleProvider) => {
  const [value, setValue] = React.useState<number>(0);

  return (
    <ExampleContext.Provider value={{ value, setValue }}>
      {children}
    </ExampleContext.Provider>
  );
};
