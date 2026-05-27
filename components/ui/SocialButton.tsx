import { forwardRef } from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { PlatformEnum } from '@/app/commons/commons.enums';
import { SocialButtonProps } from './ui.types';

const iconMap: Record<PlatformEnum, IconType> = {
  github: FaGithub,
  instagram: FaInstagram,
};

export const SocialButton = forwardRef<HTMLAnchorElement, SocialButtonProps>(
  ({ href, platform, label, className = '' }, ref) => {
    const Icon = iconMap[platform];
    if (!Icon) return null;

    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
           inline-flex items-center gap-2
          font-dm-mono text-[0.65rem] tracking-[0.12em] uppercase
          text-gray border border-gray/15 py-[5px] px-[9px]
          transition-all duration-slow no-underline relative overflow-hidden
          hover:text-accent/100 hover:border-accent/20
          hover:bg-main/50 hover:shadow-accent/20
          hover:tracking-[0.16em]
          ${className}
        `}
      >
        <span className="
          absolute inset-0 -translate-x-full
          transition-transform duration-slow group-hover:translate-x-full
        " />
        <Icon className="w-[14px] h-[14px] transition-transform duration-slow group-hover:scale-110" />
        {label || platform}
      </a>
    );
  }
);