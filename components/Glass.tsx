type Props = {
  children: React.ReactNode,
  className?: string
}

const Glass = ({ className, children }: Props) => {
  return (
    <div className={`
      bg-white/50 hover:bg-opacity-60
      backdrop-blur-md hover:backdrop-blur-xl
      border border-t-white/50 border-b-black/15 border-l-black/10 border-r-black/10
      rounded-xl
      p-1
      shadow-sm hover:shadow-lg
      transition-all duration-300
      relative
      overflow-hidden
      ${className}
    `}>
      {children}
    </div>
  )
}

export default Glass;