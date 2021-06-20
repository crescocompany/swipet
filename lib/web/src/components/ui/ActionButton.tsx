import { ElementType, MouseEventHandler } from 'react';
import { FC } from 'react';

interface ActionButtonProps {
  color: string;
  icon: ElementType;
  small?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ActionButton: FC<ActionButtonProps> = ({
  color,
  icon: Icon,
  small = false,
  onClick,
}) => (
  <button
    className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold p-4 mr-4 rounded-xl inline-flex align-middle"
    onClick={onClick}
  >
    <Icon
      className={`fill-current text-${color} ${small ? 'w-4 h-4' : 'w-8 h-8'}`}
    />
  </button>
);

export default ActionButton;
