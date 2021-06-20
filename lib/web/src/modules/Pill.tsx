import { FC } from 'react';

const Pill: FC<{
  value: string;
}> = ({ value }) => (
  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"'>
    {value}
  </span>
);

export default Pill;
