import { IdeaStatus } from "@/app/commons/commons.enums";

export type IdeaProps = {
  id: number;
  title: string;
  category: string;
  summary: string;
  teaser?: string;
  supportLink?: string;
  locked: boolean;
  status?: IdeaStatus;
  fundCollected?: number;
  fundTarget?: number;
};