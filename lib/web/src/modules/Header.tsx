import { FC } from 'react';
import { HiOutlineUser, HiOutlineChatAlt2 } from 'react-icons/hi';

const Header: FC = () => (
  <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 px-7">
    <button
      type="button"
      onClick={() => console.log('Profile page')}
      className="text-xl group inline-flex items-center text-base font-medium focus-outline:none focus:outline-none"
      aria-expanded="false"
    >
      <HiOutlineUser className="text-gray-400 hover:text-gray-500" />
    </button>
    <span>🐕</span>
    <button
      type="button"
      onClick={() => console.log('Profile page')}
      className="text-xl group inline-flex items-center text-base font-medium focus-outline:none focus:outline-none"
      aria-expanded="false"
    >
      <HiOutlineChatAlt2 className="text-gray-400 hover:text-gray-500" />
    </button>
  </div>
);

export default Header;
