import { Link } from 'react-router-dom';

export interface ILinkButton {
  children: JSX.Element;
  bgColor: string;
  id: string;
}

export const LinkButton = ({ 
  children,
  bgColor,
  id,
}: ILinkButton) => {
  
  return (
    <Link to={'/' + id} state={bgColor}>
      {children}
    </Link>
  );
};
