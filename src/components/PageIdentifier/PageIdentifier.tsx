// React-router
import { useLocation } from 'react-router';
// Libs
import { cn } from '../../libs';

interface IPageIdentifierProps {
  title: string;
}

export const PageIdentifier = ({ title }: IPageIdentifierProps) => {
  const { pathname } = useLocation();

  const titlLowerCase = title.toLocaleLowerCase();

  console.log(pathname);

  return (
    <div className="space-y-1">
      <h1 className="pt-4 text-5xl font-semibold text-grayish-green">
        {title}
      </h1>
      <div
        className={cn(
          title !== 'DRE' && title !== 'Cash flow'
            ? 'flex gap-1 font-semibold text-grayish-green'
            : 'hidden',
        )}
      >
        <p className={cn(pathname === `/${titlLowerCase}` && 'text-green-300')}>
          all
        </p>
        <p className="text-green-300">/</p>
        <p
          className={cn(
            pathname === `/${titlLowerCase}/account` && 'text-green-300',
          )}
        >
          criar
        </p>
        <p className="text-green-300">/</p>
        <p
          className={cn(
            pathname === `/${titlLowerCase}/editar` && 'text-green-300',
          )}
        >
          editar
        </p>
      </div>
    </div>
  );
};
