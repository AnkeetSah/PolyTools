// LinkQrToolsPage.jsx
import React from 'react';
import Card from '../../components/Card';  // import your card component

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

const LinkQrToolsPage = () => (
  <main className="w-full bg-gray-50 pt-4 pb-8 px-4">
    <section className="mb-8">
      <div className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white shadow-lg animate-fade-in">
        <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs bg-white/20 hover:bg-white/30 transition">
          Featured Tools
        </span>
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
          Link & QR Code Tools
        </h1>
        <p className="text-base lg:text-lg opacity-90 mb-4 max-w-4xl">
          Create, edit, and manage links and QR codes with ease.
        </p>
      </div>
    </section>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {linkQrTools.map(({ title, desc, link }) => (
        <Card key={title} title={title} desc={desc} link={link} />
      ))}
    </div>
  </main>
);

export default LinkQrToolsPage;
