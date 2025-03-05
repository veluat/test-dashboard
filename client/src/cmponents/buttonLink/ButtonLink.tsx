import {Link} from 'react-router-dom'
import classNames from 'classnames'
import styles from './ButtonLink.module.scss'

type Props = {
  to?: string;
  text: string;
  color?: 'results' | 'finalize';
  onClick?: () => void;
};

export const ButtonLink = ({to, text, color = 'results', onClick}: Props) => {
  const buttonClass = classNames(styles.root, styles[color])

  if (onClick) {
    return (
      <button className={buttonClass} onClick={onClick} tabIndex={0}>
        {text}
      </button>
    )
  }

  return (
    <Link to={to || '#'} className={buttonClass}>
      {text}
    </Link>
  )
}