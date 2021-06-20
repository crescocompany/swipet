import { FC } from 'react';
import Pill from './Pill';

interface CardProps {
  img: string;
}

const Card: FC<CardProps> = ({ img }) => (
  <div className="max-w-lg rounded overflow-hidden shadow-xl mx-auto mb-7">
    <img className="w-full object-cover h-96" src={img ?? ''} alt="nice pet" />
    <div className="px-6 py-4">
      <span className="font-bold text-xl mb-2">Boris, 123</span>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
      <div className="px-4 pt-4 pb-2">
        <Pill value="Rashond" />
        <Pill value="Senior" />
        <Pill value="..." />
      </div>
    </div>
  </div>
);

export default Card;
