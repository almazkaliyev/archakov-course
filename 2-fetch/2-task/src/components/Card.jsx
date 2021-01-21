const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img className="card__image" alt={title} src={image} />
      <div className="card__body">
        <h5 className="card__title">{title}</h5>
        <p className="card__description">{description}</p>
      </div>
    </div>
  ); 
}

export default Card;
