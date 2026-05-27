'use client';

import { ContactInfoItem } from './ContactInfoItem';
import { ContactSocials } from './ContactSocials';

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <ContactInfoItem 
        label="Email"
        value={
          <a href="mailto:kamu@email.com" className="hover:text-[#c8f04a] transition-colors">
            kamu@email.com
          </a>
        }
      />
      
      <ContactInfoItem 
        label="Based in"
        value="Makassar, Indonesia"
      />
      
      <ContactInfoItem 
        label="Availability"
        value={
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#c8f04a] rounded-full animate-pulse" />
            Open to work
          </span>
        }
      />
      
      <ContactSocials />
    </div>
  );
}
