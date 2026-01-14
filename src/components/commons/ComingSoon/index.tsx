import { type FC } from 'react';
import imgComingSoon from '@/assets/images/common/img-coming-soon.png';
import './coming-soon.scss';

export interface ComingSoonProps {
  className?: string;
}

const ComingSoon: FC<ComingSoonProps> = ({ className = '' }) => {
  return (
    <div className={`coming-soon ${className}`}>
      <img
        src={imgComingSoon}
        alt="Coming Soon"
        className="coming-soon__image"
      />
    </div>
  );
};

export default ComingSoon;
