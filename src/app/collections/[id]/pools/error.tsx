'use client';

import ErrorView from '@/components/error-view';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return <ErrorView error={error} reset={reset} />;
};

export default Error;
