import styled from '@emotion/styled';
import { SwapiKinds } from '../types/SwapiKinds';
import { SwapiUrl } from '../types/SwapiUrl';
import { SwapiLink } from './SwapLink';

const List = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-flow: row wrap;
  gap: 1em;
`;

const ListItem = styled.li`
  padding: 0.5em 1em;
  border-radius: 0.5em;
  background-color: #eee;
  border: 1px solid transparent;

  :not(:hover) a {
    text-decoration: none;
  }

  :hover {
    border-color: #ccc;
  }
`;

export interface SwapiLinkSetProps {
  title: string;
  kind: SwapiKinds;
  items: SwapiUrl[];
}

export function SwapiLinkSet({ title, kind, items }: SwapiLinkSetProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <>
      <h3>{title}</h3>
      <List>
        {items.map((url) => (
          <ListItem key={url}>
            <SwapiLink kind={kind} url={url} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
