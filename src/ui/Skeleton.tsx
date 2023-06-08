import React from 'react';

export default function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-2xl bg-grey-200 ${className}`} />;
}
