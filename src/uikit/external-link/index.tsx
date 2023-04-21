import { PropsWithChildren } from "react";

type ExternalLinkProps = PropsWithChildren<{
  href: string;
  className?: string;
}>

export function ExternalLink({ href, className, children }: ExternalLinkProps) {
  return <a className={className} rel='noopener noreferrer' target='_blank' href={href}>{children}</a>
}