import style from "../../sass/title/title.module.scss";

export const Title = ({ text }: { text: string }) => {
  return <div className={`${style["title"]}`}>{text}</div>;
};
