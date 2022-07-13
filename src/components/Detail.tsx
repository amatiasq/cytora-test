import styled from '@emotion/styled';

const DetailTitle = styled.dt`
  text-align: right;
  font-weight: bold;
`;

const DetailDetail = styled.dt`
  padding: 0;
`;

export interface DetailProps {
  label: string;
  value: string | number;
}

export function Detail({ label, value }: DetailProps) {
  return (
    <>
      <DetailTitle>{label}</DetailTitle>
      <DetailDetail>{value}</DetailDetail>
    </>
  );
}
