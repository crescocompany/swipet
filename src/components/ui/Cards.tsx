import { FC, useEffect, useState } from "react";

const FAKE_API = 'https://dog.ceo/api/breeds/image/random/5';


const Cards: FC = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(FAKE_API)
      .then(response => response.json())
      .then(data => setPets(data['message']));
  }, [setPets])

  console.log(pets)
  return (
    <div className="p-10">

      {pets.map((pet, index) => (
        <div className="max-w-sm rounded overflow-hidden shadow-xl mx-auto mb-5" key={index}>
          <img className='w-full object-cover h-96' src={pet ?? ''} alt='nice pet' />
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
      ))}
    </div>
  );
};

export default Cards;