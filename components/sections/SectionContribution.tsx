'use client';

import { useState } from 'react';
import Section from '../ui/Section';
import { IdeaProps } from '../grid/idea.types';
import { ideaData } from '../grid/data';
import { CardIdea } from '../cards/CardIdea';
import { IdeaForm } from '../grid/IdeaForm';
import { IdeaModal } from '../grid/IdeaModal';
import { ShowMore } from '../ui/ShowMore';
import { ShowLess } from '../ui/ShowLess';
import { ContributionHeader } from './contribution/ContributionHeader';
import { IdeaToggle } from './contribution/IdeaToggle';

const INITIAL_SHOW = 4;

export default function SectionContribution() {
  const [ideas, setIdeas] = useState<IdeaProps[]>(ideaData);
  const [selectedIdea, setSelectedIdea] = useState<IdeaProps | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const visibleIdeas = showAll ? ideas : ideas.slice(0, INITIAL_SHOW);
  const hasMore = ideas.length > INITIAL_SHOW;

  const handleAdd = (idea: IdeaProps) => {
    setIdeas((prev) => [idea, ...prev]);
    setShowForm(false);
    setShowAll(true);
  };

  return (
    <Section
      id="ideas"
      className="relative secondary-bg-color !mt-5 w-[95%] !m-auto !mb-5"
      full
    >
      <ContributionHeader />

      <IdeaToggle showForm={showForm} onToggle={() => setShowForm(!showForm)} />

      {showForm && (
        <div className="mb-6">
          <IdeaForm onAdd={handleAdd} />
        </div>
      )}

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-accent/8 border border-accent/8">
          {visibleIdeas.map((idea) => (
            <CardIdea key={idea.id} idea={idea} onDetail={setSelectedIdea} />
          ))}
        </div>

        {!showAll && hasMore && (
          <ShowMore
            count={ideas.length - INITIAL_SHOW}
            onShow={() => setShowAll(true)}
          />
        )}
      </div>

      {showAll && hasMore && (
        <ShowLess onHide={() => setShowAll(false)} />
      )}

      {selectedIdea && (
        <IdeaModal idea={selectedIdea} onClose={() => setSelectedIdea(null)} />
      )}
    </Section>
  );
}
