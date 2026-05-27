'use client';

import { cn } from "@/lib/utils";
import { CardIdeaProps } from "./cards.type";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { StatusBadge } from "../cardidea/StatusBadge";
import { LockWatermark } from '../cardidea/LockWatermark';
import { ProgressFund } from '../cardidea/ProgressFund';
import { ActionButtons } from '../cardidea/ActionButtons';

export function CardIdea({ idea, onDetail }: { idea: CardIdeaProps; onDetail: (idea: CardIdeaProps) => void }) {
  const isLocked = idea.locked;
  const hasFund = isLocked && idea.fundTarget && idea.fundCollected !== undefined;

  return (
    <Card className={cn(
      "relative transition-colors duration-slow overflow-hidden flex flex-col h-full p-7 gap-3",
      isLocked ? "bg-locked/90" : "bg-secondary/90 hover:bg-main/70"
    )}>
      {isLocked && <LockWatermark />}

      <CardHeader className="space-y-3">
        <StatusBadge category={idea.category} locked={isLocked} status={idea.status} />
        <CardTitle className={cn("text-base font-bold leading-snug", isLocked ? "text-gray/50" : "text-white/80")}>
          {idea.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-2 font-syne">
        <div
          className={cn("text-[0.82rem] leading-relaxed", isLocked ? "text-gray/40" : "text-white/60")}
          dangerouslySetInnerHTML={{ __html: idea.summary }}
        />
        {isLocked && idea.teaser && (
          <p className="text-[0.8rem] italic leading-relaxed text-accent/70 border-l-2 border-accent/50 pl-3">
            "{idea.teaser}"
          </p>
        )}
        {hasFund && <ProgressFund collected={idea.fundCollected!} target={idea.fundTarget!} />}
      </CardContent>

      <CardFooter className="justify-between">
        <ActionButtons onDetail={() => onDetail(idea)} supportLink={isLocked ? idea.supportLink : undefined} />
      </CardFooter>
    </Card>
  );
}