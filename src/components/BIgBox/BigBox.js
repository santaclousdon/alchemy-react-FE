import "../../assets/css/bigBox.css";

export default function BigBox({ header, children, imgName }) {
  return (
    <div className="bigBox-container">
      <div className="bigBox-container-content">
        <div className="bigBox-header">{header}</div>
        <div className="bigBox-content">{children}</div>
      </div>
      <div className="bigBox-image">
        <img src={`/assets/images/${imgName}`} />
      </div>
    </div>
  );
}
