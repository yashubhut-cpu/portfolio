import "./Card.css";

function Card({ image, title, description, tags = [], link = "#" }) {
  return (
    <div className="card glass transition">
      <div className="card-image-container">
        <img
          src={image}
          alt={title}
          className="card-image transition"
          loading="lazy"
        />
        <div className="card-overlay flex-center transition">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link-btn glass transition"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="card-tag glass">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
