type FormTypes = {
  children: any;
};
export const Form: React.FC<FormTypes> = ({ children }) => {
  return <form>{children}</form>;
};
