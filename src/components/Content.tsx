import { css } from '@emotion/css';
import React from 'react';

const styles = css`
  max-width: 60rem;
  margin: 1rem auto;
  padding: 0 1rem;
`;

export function Content({
  as: _as,
  ...props
}: { as?: string } & Record<string, unknown>) {
  return React.createElement(_as || 'main', {
    ...props,
    className: `${styles} ${props.className || ''}`,
  });
}
