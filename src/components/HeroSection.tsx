import { useState } from 'react';

interface HeroSectionProps {
  onDownload: (url: string) => void;
  isProcessing: boolean;
}

export default function HeroSection({ onDownload, isProcessing }: HeroSectionProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDownload(url);
  };

  return (
    <section className="relative py-16 sm:py-24 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <i className="fas fa-bolt text-yellow-400"></i>
          <span className="text-sm text-gray-200">Download dokumen Scribd tanpa batas</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Download Dokumen
          <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Scribd Gratis
          </span>
        </h2>

        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Paste URL dokumen Scribd dan download langsung dalam format PDF, DOCX, atau TXT.
          Cepat, gratis, dan tanpa registrasi.
        </p>

        {/* URL Input Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative flex flex-col sm:flex-row gap-3 bg-slate-800/90 backdrop-blur-xl p-3 rounded-2xl border border-white/10">
              <div className="flex-1 flex items-center gap-3 px-4">
                <i className="fas fa-link text-purple-400"></i>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste URL Scribd di sini... (contoh: scribd.com/document/...)"
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm sm:text-base py-2"
                  disabled={isProcessing}
                />
              </div>
              <button
                type="submit"
                disabled={isProcessing}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Memproses...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-download"></i>
                    <span>Download</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Quick info */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-shield-alt text-green-400"></i>
            <span>Aman & Terpercaya</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-bolt text-yellow-400"></i>
            <span>Proses Cepat</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-infinity text-purple-400"></i>
            <span>Tanpa Batas</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-file-pdf text-red-400"></i>
            <span>Multi Format</span>
          </div>
        </div>
      </div>
    </section>
  );
}
