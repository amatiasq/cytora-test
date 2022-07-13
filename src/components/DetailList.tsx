import styled from '@emotion/styled';

export const DetailList = styled.dl`
  --columns: 1;

  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(calc(var(--columns) * 2), 1fr);

  @media (min-width: 40rem) {
    --columns: 2;
  }

  @media (min-width: 60rem) {
    --columns: 3;
  }
`;
