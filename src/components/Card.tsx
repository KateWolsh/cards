import { PropsWithChildren } from "react";

interface CardProps {
    image?: string;
    title: string;
    button: {
        text: string;
        link: string;
     };
}
function Card({image, title, button, children}:PropsWithChildren<CardProps>) {
  const handleClick = () => {
    window.location.href = button.link; // Перенаправляем пользователя при клике на кнопку
};
  return (
    <div className="card">
      <img src={image} className="card-img"></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
        <button onClick={handleClick} className="btn btn-primary">{button.text}</button>
      </div>
    </div>
  )
}

export default Card