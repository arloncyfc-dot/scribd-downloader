export default function FeaturesSection() {
  const features = [
    {
      icon: 'fa-file-pdf',
      title: 'Multi Format',
      description: 'Download dalam berbagai format: PDF, DOCX, TXT, dan PPTX sesuai kebutuhan Anda.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'fa-bolt',
      title: 'Super Cepat',
      description: 'Proses download cepat dengan server berkecepatan tinggi. Tidak perlu menunggu lama.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'fa-shield-alt',
      title: '100% Aman',
      description: 'Tidak ada malware, virus, atau file berbahaya. Semua dokumen bersih dan aman.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'fa-infinity',
      title: 'Tanpa Batas',
      description: 'Download sebanyak yang Anda mau tanpa batasan harian atau perlu registrasi.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Mobile Friendly',
      description: 'Akses dari perangkat manapun - desktop, tablet, atau smartphone.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: 'fa-history',
      title: 'Riwayat Download',
      description: 'Semua riwayat download tersimpan otomatis. Mudah diakses kembali kapan saja.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Fitur Unggulan</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            ScribdDL menyediakan fitur lengkap untuk memudahkan Anda mendownload dokumen dari Scribd
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas ${feature.icon} text-white text-lg`}></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
