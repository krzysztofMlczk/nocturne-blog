import {
  faLinkedinIn,
  faTwitch,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialMediaIconsProps {
  socialIconsSizePX?: number;
}

export function SocialMediaIcons({
  socialIconsSizePX = 20,
}: SocialMediaIconsProps) {
  return (
    <div className='flex gap-4'>
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
