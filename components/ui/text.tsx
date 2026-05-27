import { forwardRef, ElementType } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('', {
  variants: {
    variant: {
      body:    'font-dm-sans text-[0.95rem] leading-[1.85] text-gray/78',
      title:   'font-dm-mono text-[1.1rem] leading-tight font-semibold text-white/92',
      caption: 'font-dm-mono text-[0.7rem] tracking-wide uppercase text-gray/50',
      accent:  'font-dm-sans text-[0.9rem] text-accent/80',
      button:  'font-dm-mono text-[0.8rem] tracking-wide uppercase',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: ElementType;
  lineClamp?: number;
  className?: string;
  children: React.ReactNode;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as: Component = 'p', variant, lineClamp, className, children }, ref) => {
    return (
      <Component
        ref={ref}
        className={textVariants({
          variant,
          className: [lineClamp ? `line-clamp-${lineClamp}` : '', className]
            .filter(Boolean)
            .join(' '),
        })}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';