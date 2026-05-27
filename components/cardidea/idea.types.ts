export interface StatusBadgeProps {
  category: string;
  locked?: boolean;
  status?: 'onprogress' | 'done';
}

export interface ProgressFundProps {
  collected: number;
  target: number;
}

export interface ActionButtonsProps {
  onDetail: () => void;
  supportLink?: string;
}