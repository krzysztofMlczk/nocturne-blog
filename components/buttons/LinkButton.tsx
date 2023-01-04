import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface LinkButtonProps {
  textPrefix?: string;
  href: string;
  children: React.ReactNode;
}

export const LinkButton = ({ textPrefix, href, children }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className='flex gap-3 items-center text-supernova font-bold text-base p-4 cursor-pointer group'
    >
      <span className='group-hover:underline group-hover:underline-offset-8 decoration-2'>
        {textPrefix && `${textPrefix} `}
        {children}
      </span>
      {/* TODO use predefined colors from tailwindCSS config */}
      <FontAwesomeIcon icon={faCircleArrowRight} width={20} color='#FFC700' />
    </Link>
  );
};
