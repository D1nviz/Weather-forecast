declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  const content: string;
  export const ReactComponent: React.FC<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.mp4'
declare module '*.gif'
declare module '*.mp3'