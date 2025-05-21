import React from 'react';
import Card from '../../components/Card';  // import your card component
import Banner from '../../components/Banner'; // import your banner component
const documentTools = [
  {
    title: "PDF Converter",
    desc: "Convert documents to PDF format.",
    link: "/document-tools/pdf-converter"
  },
  {
    title: "Document Merger",
    desc: "Merge multiple documents into one.",
    link: "/document-tools/document-merger"
  }
];
const spanVal = "Featured Tools";
const nameVal = "Document Tools";
const senVal = "Edit, convert, and enhance your documents with our powerful tools.";

const DocumentToolsPage = () => (
  <main className="w-full bg-gray-50 pt-4 pb-8 px-4">
   <Banner spanVal={spanVal} nameVal={nameVal} senVal={senVal} />

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {documentTools.map(({ title, desc, link }) => (
        <Card key={title} title={title} desc={desc} link={link} />
      ))}
    </div>
  </main>
);

export default DocumentToolsPage;
