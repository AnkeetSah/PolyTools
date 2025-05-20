import React from 'react'

const DocumentToolsPage = () => {
  return (
    <main className='w-full  bg-gray-50 pt-4 pb-8 px-4'>
      <section className="mb-8">
        <div className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white shadow-lg animate-fade-in">
           <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs bg-white/20 hover:bg-white/30 transition">
            Featured Tools
          </span>
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Document Tools
          </h1>
          <p className="text-base lg:text-lg opacity-90 mb-4 max-w-4xl">
            Edit, convert, and manage your documents with our powerful tools.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-80 rounded-xl bg-white p-6 shadow-md hover:shadow-lg">
          <h3 className="text-lg font-medium">PDF Converter</h3>
          <p className="text-gray-400 text-sm">Convert documents to PDF format.</p>
          <a
            href="/document-tools/pdf-converter"
            className="inline-flex items-center text-purple-600 text-sm font-medium mt-3"
          >
            Try Now
          </a>
        </div>
        <div className="w-80 rounded-xl bg-white p-6 shadow-md hover:shadow-lg">
          <h3 className="text-lg font-medium">Document Merger</h3>
          <p className="text-gray-400 text-sm">Merge multiple documents into one.</p>
          <a
            href="/document-tools/document-merger"
            className="inline-flex items-center text-purple-600 text-sm font-medium mt-3"
          >
            Try Now
          </a>
        </div>
      </div>
    </main>
  )
}

export default DocumentToolsPage