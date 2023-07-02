import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return <div className="card">{children}</div>;
};

export default Card;
