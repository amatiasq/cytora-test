export interface DetailProps {
  label: string;
  value: string | number;
}

export function Detail({ label, value }: DetailProps) {
  return (
    <>
      <dt>{label}:</dt>
      <dd>{value}</dd>
    </>
  );
}
