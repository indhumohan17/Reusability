import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, buttonLabel, onButtonClick }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;