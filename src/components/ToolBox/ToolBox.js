import "../../assets/css/toolBox.css";

export default function ToolBox({
  header1,
  header2,
  text1,
  text2,
  text3,
  badge,
}) {
  return (
    <div
      className={"toolBox-container " + (badge !== 0 ? "badge" : "notBadge")}
    >
      <div className="toolBox-header">
        <span>{header1}</span>
        <span>{header2}</span>
      </div>
      <div className="toolBox-content">
        <span>{text1}</span>
        <span>{text2}</span>
        <span>{text3}</span>
      </div>
      {badge === 0 ? null : <div className="toolBox-badge">{badge}</div>}
    </div>
  );
}
