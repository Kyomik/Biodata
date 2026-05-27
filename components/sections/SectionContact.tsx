'use client';

import Section from '@/components/ui/Section';
import { ContactHeader } from './contact/ContactHeader';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';
import { ContactBackground } from './contact/ContactBackground';

export default function SectionContact() {
  return (
    <Section id="contact" className="relative !px-5 !py-20 overflow-hidden" full>
      <ContactBackground />
      
      <div className="container mx-auto max-w-6xl relative z-1">
        <ContactHeader />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-[60px] items-start mt-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </Section>
  );
}
