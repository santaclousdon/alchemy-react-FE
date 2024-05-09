import "../../assets/css/toolBox.css";

export default function ToolBox({ header1, header2, text1, text2 }) {
  return (
    <div className="toolBox-container">
      <div className="toolBox-header">
        <span>{header1}</span>
        <span>{header2}</span>
      </div>
      <div className="toolBox-content">
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
    </div>
  );
}
