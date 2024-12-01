import styles from '../styles/components/_surface.module.css'

type Props = {
  children: React.ReactNode,
  className?: string
}

const Surface = ({ children, className }: Props) => {
  const classNames = className ? `${styles.surface} ${className}` : styles.surface;
  
  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export default Surface;