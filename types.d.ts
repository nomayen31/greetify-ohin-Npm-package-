import * as React from "react";

export function sayHello(
  name?: string,
  options?: { locale?: string; template?: (name: string) => string }
): string;

export function useGreeting(
  name?: string,
  options?: { locale?: string; persistKey?: string | null; ttl?: number }
): string;

export interface GreetingProps extends React.HTMLAttributes<HTMLElement> {
  name?: string;
  locale?: string;
  className?: string;
  persistKey?: string | null;
  ttl?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const Greeting: React.FC<GreetingProps>;
