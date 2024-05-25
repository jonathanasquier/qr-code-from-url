import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

type QRCProps = {
  value: string;
};

const QRC: React.FC<QRCProps> = ({ value }) => {
  return (
    <div style={{ background: "white", padding: "16px" }}>
      <QRCode value={value} />
    </div>
  );
};

export default QRC;
