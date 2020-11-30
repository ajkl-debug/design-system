import { Sizes as HeadingSizes } from '../components/typography/Heading/Heading.types';

export interface Family {
  base: string;
  mono: string;
}

export interface Size {
  h0: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
}

export interface Weight {
  light: number;
  regular: number;
  medium: number;
  semibold: number;
  bold: number;
}

export interface LineHeight {
  xxxl: string;
  xxl: string;
  xl: string;
  lg: string;
  md: string;
  sm: string;
}

type MarginValue = {
  vertical?: string;
  horizontal?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

export interface Margin {
  heading: Record<HeadingSizes, MarginValue>;
  paragraph: MarginValue;
}

export interface Typography {
  family: Family;
  size: Size;
  weight: Weight;
  lineHeight: LineHeight;
  margin: Margin;
}