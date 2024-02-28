interface Props {
  onClick: (type: string) => void;
}

export const CloseButton = ({ onClick }: Props) => {
  return (
    <button
      className="position-absolute top-0 start-0 translate-middle btn btn-danger"
      onClick={() => {
        onClick("close");
      }}
    >
      ⨉
    </button>
  );
};

export default CloseButton;
