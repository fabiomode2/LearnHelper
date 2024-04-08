import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const MainBoard = ({ children }: Props) => {
  return (
    <div className="MainBoard position-absolute top-50 start-50 translate-middle">
      {" "}
      {children}{" "}
    </div>
  );
};

export default MainBoard;
