import { FC, useEffect, useState } from "react";
import { HiHeart, HiX, HiStar, HiRefresh } from "react-icons/hi";
import { Card } from ".";

const FAKE_API = 'https://dog.ceo/api/breeds/image/random/1';

const Cards: FC = () => {
  const [pets, setPets] = useState([]);

  const premium = false;

  useEffect(() => {
    fetch(FAKE_API)
      .then(response => response.json())
      .then(data => setPets(data['message']));
  }, [setPets])

  return (
    <div className="p-10">
      {pets.map((pet, index) => <Card key={index} img={pet} />)}

      <div className='mx-auto items-center text-center w-full'>
        {premium && (
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-4 mr-4 rounded-xl inline-flex items-center align-middle">
            <HiRefresh className='w-8 h-8' />
          </button>
        )}

        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-4 mr-4 rounded-xl inline-flex items-center align-middle">
          <HiX className='fill-current w-8 h-8' />
        </button>

        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-4 mr-4 rounded-xl inline-flex items-center align-middle">
          <HiStar className='fill-current w-5 h-5 ' />
        </button>

        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-4 mr-4 rounded-xl inline-flex items-center align-middle">
          <HiHeart className='fill-current w-8 h-8' />
        </button>
      </div>
    </div>
  );
};

export default Cards;