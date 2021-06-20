import { FC } from 'react';
import { HiUser } from 'react-icons/hi';

const Header: FC = () => (
  <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
    <nav className="hidden md:flex space-x-10">
      <button
        type="button"
        onClick={() => console.log('Profile page')}
        className="text-xl group bg-white inline-flex items-center text-base font-medium focus-outline:none focus:outline-none"
        aria-expanded="false"
      >
        <HiUser className="text-gray-500 hover:text-gray-500" />
      </button>
    </nav>
  </div>
);

export default Header;
