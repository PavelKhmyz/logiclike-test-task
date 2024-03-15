export interface IErrorNotification {
  message: string;
  className: string;
}

export const ErrorNotification = ({ 
  message, 
  className, 
}: IErrorNotification) => {
  return (
    <div className={className}>
      <h2>Oops... Something goes wrong</h2>
      <p>{message}</p>
    </div>
  );
};
