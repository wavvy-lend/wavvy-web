import { Button } from '@/ui/Button';
import { ArrowPathIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

interface ErrorViewProps {
  error: Error;
  reset: () => void;
}

const ErrorView = ({ error, reset }: ErrorViewProps) => {
  return (
    <section
      aria-label="Error screen"
      role="alert"
      className="flex h-full w-full items-center justify-center gap-6 py-[100px]"
    >
      <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
        <ExclamationTriangleIcon className="h-28 w-28 text-red-500 dark:text-red-500" aria-hidden="true" />
        <h1 className="text-center text-2xl font-bold text-red-500 dark:text-red-500 sm:text-2xl lg:text-3xl">
          {error.message ?? 'Something went wrong!'}
        </h1>
        <Button aria-label="Retry" variant="filled" fullwidth onClick={() => reset()}>
          <ArrowPathIcon className="mr-2 h-4 w-4" aria-hidden="true" />
          Retry
        </Button>
      </div>
    </section>
  );
};

export default ErrorView;
