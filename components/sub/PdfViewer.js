// components/PdfViewer.js
import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div className="pdf-viewer">
      <iframe src={pdfUrl} title="PDF Viewer" width="100%" height="600px" />
    </div>
  );
};

export default PdfViewer;
