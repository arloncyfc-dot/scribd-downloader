export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-download text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">ScribdDL</h4>
                <p className="text-xs text-gray-500">v2.0 - PHP + MySQL</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Aplikasi downloader dokumen Scribd gratis dengan teknologi PHP dan MySQL.
              Cepat, aman, dan mudah digunakan.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tech Stack</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <i className="fab fa-php text-indigo-400 w-5"></i>
                <span>PHP 8.2</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <i className="fas fa-database text-blue-400 w-5"></i>
                <span>MySQL 8.0</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <i className="fab fa-react text-cyan-400 w-5"></i>
                <span>React + TypeScript</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <i className="fas fa-wind text-sky-400 w-5"></i>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <i className="fab fa-bootstrap text-purple-400 w-5"></i>
                <span>Bootstrap Icons</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="text-white font-semibold mb-4">Disclaimer</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Aplikasi ini hanya untuk tujuan edukasi. Hormati hak cipta dan ketentuan penggunaan Scribd.
              Gunakan dengan bijak dan bertanggung jawab.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all">
                <i className="fab fa-github text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all">
                <i className="fab fa-telegram text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all">
                <i className="fab fa-twitter text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2024 ScribdDL. All rights reserved. Made with ❤️ using PHP + MySQL
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Server Status: Active</span>
            <span className="mx-1">|</span>
            <span>Response: 42ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
