export const MenuButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => (
  <button
    onClick={(e) => {
      onClick();
      e.currentTarget.blur();
    }}
    className="text-[#CCCCCC] text-2xl bg-[#00000075] px-3 py-2 hover:bg-[#b08e71] hover:text-[#26211c] w-full hover:scale-[1.02] hover:shadow-md active:bg-[#b08e71] active:text-[#26211c] active:scale-95 active:opacity-90 active:shadow-md focus:bg-[#b08e71] focus:text-[#26211c] focus:scale-[1.02] focus:shadow-md transition-all duration-200"
  >
    {text}
  </button>
);
