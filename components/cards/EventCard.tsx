'use client';
import { useRef } from 'react';
import LabelCard from '../eventcard/LabelCard';
import { EventCardProps } from './cards.type';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent, CardDescription, CardFooter } from '../ui/card';

const EventCard = ({ date, description, side, stack = [] }: EventCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useScrollReveal([cardRef]);

  return (
    <Card
      ref={cardRef}
      data-side={side}
      className={`
        group ring-0 h-full
        relative flex flex-col overflow-hidden
        transition-[box-shadow,border-color] duration-slow ease-snap

        data-[side=left]:items-start
        data-[side=left]:border-l-[10px]
        data-[side=left]:border-l-accent
        data-[side=left]:pr-4

        data-[side=right]:items-end
        data-[side=right]:border-r-[10px]
        data-[side=right]:border-r-accent
        data-[side=right]:pl-4

        max-sm:data-[side=right]:items-start
        max-sm:data-[side=right]:border-r-0
        max-sm:data-[side=right]:border-l-[10px]
        max-sm:data-[side=right]:border-l-accent
        
        max-sm:w-[97%]

        max-sm:data-[side=right]:pl-0
        max-sm:data-[side=right]:pr-4
      `}
    >
      <LabelCard
        label={date}
        className={`
          transition-transform duration-slow ease-snap

          data-[side=left]:skew-x-[-20deg]
          [&_span]:skew-x-[20deg]

          group-data-[side=left]:skew-x-[-20deg]
          group-data-[side=left]:-translate-x-full
          group-data-[scrolled=true]:group-data-[side=left]:-translate-x-[10%]

          group-data-[side=right]:translate-x-full
          group-data-[side=right]:skew-x-[20deg]
          group-data-[side=right]:[&_span]:skew-x-[-20deg]
          group-data-[scrolled=true]:group-data-[side=right]:translate-x-[10%]

          max-sm:group-data-[side=right]:-translate-x-full
          max-sm:group-data-[side=right]:skew-x-[-20deg]
          max-sm:group-data-[side=right]:[&_span]:skew-x-[20deg]
          max-sm:group-data-[scrolled=true]:group-data-[side=right]:-translate-x-[20%]
        `}
      />

      <CardContent className="px-0 flex-1 flex flex-col justify-between
        transition-transform duration-slow ease-snap
        
        group-data-[side=left]:-translate-x-full
        group-data-[scrolled=true]:group-data-[side=left]:translate-x-0
        
        group-data-[side=right]:translate-x-full
        group-data-[scrolled=true]:group-data-[side=right]:translate-x-0

        max-sm:group-data-[side=right]:-translate-x-full
        max-sm:group-data-[scrolled=true]:group-data-[side=right]:translate-x-0
      ">
        <CardDescription className={`
          px-2
          group-data-[side=right]:border-l-accent/90
          group-data-[side=right]:border-l-2

          group-data-[side=left]:border-r-accent/90
          group-data-[side=left]:border-r-2

          max-sm:group-data-[side=right]:border-l-0
          max-sm:group-data-[side=right]:border-r-accent/90
          max-sm:group-data-[side=right]:border-r-2
        `}>
      {description}
    </CardDescription>

        {stack.length > 0 && (
          <CardFooter className="flex flex-wrap gap-2 px-2 py-2">
            {stack.map((tech, idx) => (
              <span
                key={idx}
                className="
                  text-[0.65rem]
                  bg-secondary/20
                  border border-accent/20
                  text-accent
                  px-[10px] py-[3px]
                  rounded-[2px]
                "
              >
                {tech}
              </span>
            ))}
          </CardFooter>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;