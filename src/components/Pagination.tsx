import styled from '@emotion/styled';
import { useCallback } from 'react';
import { Paginated } from '../types/Paginated';

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export interface PaginationProps<T> extends Paginated<T> {
  onNavigate: (url: string) => void;
}

export function Pagination<T>({
  previous,
  next,
  onNavigate,
}: PaginationProps<T>) {
  const handleNext = useCallback(() => onNavigate(next), [next, onNavigate]);
  const handlePrev = useCallback(
    () => onNavigate(previous),
    [previous, onNavigate]
  );

  return (
    <Container>
      {previous ? <button onClick={handlePrev}>&lt; Prev</button> : null}
      {next ? <button onClick={handleNext}>Next &gt;</button> : null}
    </Container>
  );
}
