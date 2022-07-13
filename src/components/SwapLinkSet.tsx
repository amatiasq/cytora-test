import { SwapiKinds } from '../types/SwapiKinds';
import { SwapiUrl } from '../types/SwapiUrl';
import { SwapiLink } from './SwapLink';

export interface SwapiLinkSetProps {
  title: string;
  kind: SwapiKinds;
  items: SwapiUrl[];
}

export function SwapiLinkSet({ title, kind, items }: SwapiLinkSetProps) {
  if (!items) {
    return null;
  }

  return (
    <>
      <h3>{title}</h3>
      <ul>
        {items.map((url) => (
          <li key={url}>
            <SwapiLink kind={kind} url={url} />
          </li>
        ))}
      </ul>
    </>
  );
}
