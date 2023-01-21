import clsx from 'clsx';

import {
  faLinkedinIn,
  faTwitch,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialMediaIconsProps {
  className?: string;
  socialIconsSizePX?: number;
}

export function SocialMediaIcons({
  className,
  socialIconsSizePX = 20,
}: SocialMediaIconsProps) {
  return (
    <div
      className={clsx('flex gap-4', className)}
    >
      <FontAwesomeIcon
        icon={faLinkedinIn}
        width={socialIconsSizePX}
        className='cursor-pointer text-white'
      />
      <FontAwesomeIcon
        icon={faTwitch}
        width={socialIconsSizePX}
        className='cursor-pointer text-supernova'
      />
      <FontAwesomeIcon
        icon={faTwitter}
        width={socialIconsSizePX}
        className='cursor-pointer text-white'
      />
    </div>
  );
}
