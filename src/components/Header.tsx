export default function Header() {
  return (
    <header className="relative z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
              <i className="fas fa-download text-white text-lg"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">ScribdDL</h1>
              <p className="text-xs text-purple-300">Free Document Downloader</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm">Fitur</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm">Cara Kerja</a>
            <a href="#history" className="text-gray-300 hover:text-white transition-colors text-sm">Riwayat</a>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-300">Server Online</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
