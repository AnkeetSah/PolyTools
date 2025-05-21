// LinkQrToolsPage.jsx
import React from 'react';
import Card from '../../components/Card';  // import your card component
import Banner from '../../components/Banner'; // import your banner component

const linkQrTools = [
  {
    title: "QR Code Generator",
    desc: "Create QR codes for any URL.",
    link: "/link-qr-tools/qr-code-generator"
  },
  {
    title: "URL Shortener",
    desc: "Shorten long URLs easily.",
    link: "/link-qr-tools/url-shortener"
  }
];

const spanVal = "Featured Tools";
const nameVal = "Link & QR Tools";
const senVal = "Edit, convert, and enhance your links and QR codes with our powerful tools.";
const LinkQrToolsPage = () => (
  <main className="w-full bg-gray-50 pt-4 pb-8 px-4">
  <Banner spanVal={spanVal} nameVal={nameVal} senVal={senVal} />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {linkQrTools.map(({ title, desc, link }) => (
        <Card key={title} title={title} desc={desc} link={link} />
      ))}
    </div>
  </main>
);

export default LinkQrToolsPage;
