import { ComponentProps } from 'react';
import Link from 'next/link';

type RootProps = ComponentProps<'button'> & ComponentProps<'a'>;

export interface ButtonOrLinkProps extends RootProps {}

export function ButtonOrLink({ href, ...props }: ButtonOrLinkProps) {
  const isLink = typeof href !== 'undefined';
  const ButtonOrLink = isLink ? 'a' : 'button';

  let content = <ButtonOrLink {...props} />;

  if (isLink) {
    return (
      <Link href={href} legacyBehavior passHref prefetch={false}>
        {content}
      </Link>
    );
  }

  return content;
}
