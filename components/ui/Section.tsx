import { forwardRef } from 'react';
import { SectionProps } from './ui.types';

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, id, className = "", full = false, style }, ref) => {
    return (
      <section id={id} className={className} ref={ref} style={style}>
        {full ? (
          children
        ) : (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        )}
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;