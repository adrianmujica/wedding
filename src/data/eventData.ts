import yaml from "yaml";
import eventSource from "./event.yml?raw";

export interface HeroContent {
  tagline: string;
  title: string;
  description: string;
  description2: string;
  weekday: string;
  dateDisplay: string;
  location: string;
}

export interface StoryContent {
  chapterLabel: string;
  heading: string;
  body: string;
  imageAsset?: string;
  imageAlt: string;
  highlights: Highlight[];
}

export interface Highlight {
  title: string;
  url: string;
}

export interface ScheduleEvent {
  number: string;
  label: string;
  title: string;
  description: string;
  description2: string;
  details: string[];
}

export interface ScheduleContent {
  eyebrow: string;
  title: string;
  description: string;
  events: ScheduleEvent[];
}

export interface CardContent {
  imageAlt?: string;
  title: string;
  description?: string;
  href?: string;
}

export interface GalleryImage {
  asset: string;
  alt: string;
}

export interface GalleryContent {
  eyebrow: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export interface CountdownContent {
  label: string;
  heading: string;
  message: string;
  target: string;
  location: string;
}

export interface DressCodeContent {
  title: string;
  imageAsset: string;
  description: string;
  description2: string;
}

export interface ConfirmationContent {
  chapterLabel: string;
  heading: string;
  body: string;
  account: string;
  description: string;
  imageAsset: string;
  imageAlt: string;
  highlights: Highlight[];
}

export interface EventContent {
  hero: HeroContent;
  story: StoryContent;
  schedule: ScheduleContent;
  gallery: GalleryContent;
  cards: CardContent[];
  countdown: CountdownContent;
  dressCode: DressCodeContent;
  confirmation: ConfirmationContent;
}

const parsedEventData = yaml.parse(eventSource) as EventContent;

export function getEventData(): EventContent {
  return parsedEventData;
}
