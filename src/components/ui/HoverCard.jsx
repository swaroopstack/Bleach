import "./HoverCard.css";

export default function HoverCard({
  coverImage,
  characterImage,
  logoImage,
}) {
  return (
    <div className="hover-card">
      <div className="hover-card-wrapper">
        <img src={coverImage} className="hover-cover-image" alt="" />
      </div>

      <img src={logoImage} className="hover-logo" alt="" />
      <img src={characterImage} className="hover-character" alt="" />
    </div>
  );
}
