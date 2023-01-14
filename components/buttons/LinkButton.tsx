import Link from 'next/link';

import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LinkButtonProps {
  textPrefix?: string;
  href: string;
  children: React.ReactNode;
}

export const LinkButton = ({ textPrefix, href, children }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className='flex gap-3 items-center justify-center text-supernova font-bold text-base p-4 cursor-pointer group'
    >
      <span className='group-hover:underline group-hover:underline-offset-8 decoration-2'>
        {textPrefix && `${textPrefix} `}
        {children}
      </span>
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        width={20}
        className='text-supernova'
      />
    </Link>
  );
};
