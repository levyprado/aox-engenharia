import { cn } from '@/lib/utils'

export default function Button({
  href,
  className,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center justify-center rounded-lg bg-accent px-4 py-2 font-semibold transition-all hover:bg-[#e06106] active:scale-97',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
