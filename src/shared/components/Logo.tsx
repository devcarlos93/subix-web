import logoWhite from '@shared/assets/logos/suBIX-logo.svg'
import { cn } from '@shared/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  imgClassName?: string
  textClassName?: string
  showText?: boolean
}

const sizeMap = {
  sm: { img: 'h-6 w-6', text: 'text-base' },
  md: { img: 'h-9 w-9', text: 'text-xl' },
  lg: { img: 'h-12 w-12', text: 'text-2xl' },
  xl: { img: 'h-16 w-16', text: 'text-3xl' },
}

const Logo = ({
  className,
  size = 'md',
  imgClassName,
}: LogoProps) => {
  const { img } = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <img src={logoWhite} alt="Subix" className={cn(img, 'w-auto', imgClassName)} />
    </div>
  )
}

export default Logo
