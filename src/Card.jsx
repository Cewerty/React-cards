import './Card.css'
import Status from "./status.js";

const statusStyle = {
    [Status.ACTIVE]: 'card__banner--active',
    [Status.INACTIVE]: 'card__banner--inactive',
    [Status.PENDING]: 'card__banner--pending',
}
const statusLabel = {
    [Status.ACTIVE]: 'Active',
    [Status.INACTIVE]: 'Inactive',
    [Status.PENDING]: 'Pending',
}

function Card({title, content, price, status}) {
  return (
    <article className="card">
      <header className="card__head">
        <span className={`card__banner ${statusStyle[status] ?? 'card__banner--undefined'}`}>
          {statusLabel[status] ?? 'Undefined'}
        </span>
        <h3 className="card__title">{title}</h3>
      </header>
      <div className="card__text">
        <p>{content}</p>
      </div>
      <footer className="card__footer">{price}</footer>
    </article>)
}

export default Card;
