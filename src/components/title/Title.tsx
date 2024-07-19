import style from "../../sass/title/title.module.scss";

export const Title = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className={`${style["title"]} ${className ? className : ""}`}>
      {text}
    </div>
  );
};
