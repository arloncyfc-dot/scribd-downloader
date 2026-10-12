export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: 'fa-copy',
      title: 'Copy URL Scribd',
      description: 'Buka dokumen Scribd yang ingin didownload, lalu copy URL dari address bar browser Anda.'
    },
    {
      step: '02',
      icon: 'fa-paste',
      title: 'Paste & Klik Download',
      description: 'Paste URL di kolom input atas, lalu klik tombol Download. Sistem akan memproses dokumen.'
    },
    {
      step: '03',
      icon: 'fa-cloud-download-alt',
      title: 'Download Selesai',
      description: 'Dokumen akan otomatis didownload ke perangkat Anda dalam format yang tersedia.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Cara Menggunakan</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Hanya 3 langkah mudah untuk mendownload dokumen Scribd
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent z-0"></div>
              )}

              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Step {step.step}
                </div>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30">
                  <i className={`fas ${step.icon} text-2xl text-purple-300`}></i>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Database Info */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 shrink-0">
              <i className="fas fa-database text-2xl text-blue-300"></i>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                <i className="fas fa-server text-blue-400 mr-2"></i>
                Backend: PHP + MySQL
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Aplikasi ini menggunakan PHP sebagai backend dan MySQL sebagai database untuk menyimpan riwayat download.
                Data disimpan secara lokal menggunakan localStorage sebagai simulasi database MySQL.
                Pada implementasi production, data akan disimpan di server MySQL dengan query SQL standar.
              </p>
            </div>
            <div className="shrink-0">
              <div className="bg-slate-800 rounded-lg p-3 font-mono text-xs text-green-400 border border-green-500/20">
                <div className="text-gray-500">-- SQL Schema</div>
                <div>CREATE TABLE downloads (</div>
                <div className="pl-4">id INT AUTO_INCREMENT,</div>
                <div className="pl-4">url VARCHAR(500),</div>
                <div className="pl-4">title VARCHAR(255),</div>
                <div className="pl-4">created_at TIMESTAMP</div>
                <div>);</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
