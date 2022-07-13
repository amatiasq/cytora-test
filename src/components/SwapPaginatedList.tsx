import { ReactNode, useState } from 'react';
import { useSwapi } from '../hooks/useSwapi';
import { Paginated } from '../types/Paginated';
import { Pagination } from './Pagination';
import { Spinner } from './Spinner';

export interface SwapPaginatedListProps<T> {
  apiPath: string;
  children: (item: T) => ReactNode;
}

export function SwapPaginatedList<T>({
  apiPath,
  children,
}: SwapPaginatedListProps<T>) {
  const [page, setPage] = useState(apiPath);
  const [list] = useSwapi<Paginated<T> | null>(page, null);

  if (!list) {
    return <Spinner />;
  }

  return (
    <>
      <ul>{list.results.map(children)}</ul>
      <Pagination {...list} onNavigate={setPage} />
    </>
  );
}
