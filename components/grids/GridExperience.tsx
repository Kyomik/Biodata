'use client';

import { useState } from 'react';
import EventCard from '../cards/EventCard';
import { ShowMore } from '../ui/ShowMore';
import { ShowLess } from '../ui/ShowLess';
import { GridExperienceProps } from './grids.types';

const INITIAL_COUNT = 2;

export const GridExperience = ({ experienceData }: { experienceData: GridExperienceProps[] }) => {
    const [showMore, setShowMore] = useState(false);

    const visibleData = showMore ? experienceData : experienceData.slice(0, INITIAL_COUNT);
    const hasMore = experienceData.length > INITIAL_COUNT;

    return (
        <div className="flex flex-col pt-20 pb-4 text-white/70">
            {visibleData.map((item, idx) => {
                const isRightCard = idx % 2 === 0;
                const justifyClass = isRightCard ? 'justify-start' : 'justify-end';
                const widthStyle = isRightCard ? 'w-[51.8%]' : 'w-[49%]';
                const side = isRightCard ? 'right' : 'left';

                return (
                    <div key={item.id} className={`max-[800px]:flex-start flex ${justifyClass}`}>
                        <div className={`max-[800px]:w-full ${widthStyle} h-[250px] `}>
                            <EventCard
                                date={item.date}
                                description={item.description}
                                side={side}
                                stack={item?.stack}
                            />
                        </div>
                    </div>
                );
            })}

            {!showMore && hasMore && (
                <ShowMore
                    count={experienceData.length - INITIAL_COUNT}
                    onShow={() => setShowMore(true)}
                />
            )}

            {showMore && hasMore && (
                <ShowLess onHide={() => setShowMore(false)} />
            )}
        </div>
    );
};