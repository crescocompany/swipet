import { FC } from 'react';

const Card: FC<{
  img: string;
  key: number;
}> = ({ img, key }) => (
  <div className="max-w-lg rounded overflow-hidden shadow-xl mx-auto mb-7" key={key}>
    <img className='w-full object-cover h-96' src={img ?? ''} alt='nice pet' />
    <div className="px-6 py-4">
      <span className="font-bold text-xl mb-2">Boris, 123</span>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rashond</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Senior</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Weet ik het</span>
      </div>
    </div>
  </div>
);

export default Card;