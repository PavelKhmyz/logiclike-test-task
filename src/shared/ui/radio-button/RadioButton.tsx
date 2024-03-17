import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface IButton {
  text: string;
  className: string;
  name: string;
  defaultChecked?: boolean;
  id?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = memo(({ 
  text,
  className,
  name,
  defaultChecked = false,
  id = uuidv4(),
  value = text,
  onChange,
}: IButton): JSX.Element => {
  return (
    <div className={className}>
      <input 
        type='radio' 
        name={name} 
        value={value} 
        defaultChecked={defaultChecked}
        id={id} 
        onChange={onChange}
      />
      <label htmlFor={id}>
        {text}
      </label>
    </div>
  );
});
