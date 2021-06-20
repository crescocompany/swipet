import { FC, useEffect, useState } from 'react';
import { HiHeart, HiX, HiStar } from 'react-icons/hi';
import { Card } from '.';
import ActionButton from './ActionButton';

const FAKE_API = 'https://dog.ceo/api/breeds/image/random/1';

const Deck: FC = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(FAKE_API)
      .then((response) => response.json())
      .then((data) => setPets(data['message']));
  }, [setPets]);

  const submit = () =>
    fetch(FAKE_API)
      .then((response) => response.json())
      .then((data) => setPets(data['message']));

  const decline = async () => {
    console.log('Not for me!');

    await submit();
  };
  const like = async (superpower = false) => {
    console.log('Liked!');

    if (superpower) {
      console.log('by power!');
    }

    await submit();
  };

  return (
    <div className="px-10 py-7">
      {pets.map((pet, index) => (
        <Card key={index} img={pet} />
      ))}

      <div className="mx-auto items-center text-center w-full">
        <ActionButton color="red" icon={HiX} onClick={() => decline()} />
        <ActionButton
          small
          color="blue"
          icon={HiStar}
          onClick={() => like(true)}
        />
        <ActionButton color="green" icon={HiHeart} onClick={() => like()} />
      </div>
    </div>
  );
};

export default Deck;
