import { ReactNode } from "react";

interface Props {
  visible: boolean;
  children: ReactNode;
}

export const Page = ({ visible, children }: Props) => {
  return <div className={visible ? "" : "hide"}>{children}</div>;
};

export default Page;
