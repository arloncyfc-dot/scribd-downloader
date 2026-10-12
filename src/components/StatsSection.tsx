import { Database } from '../database';

export default function StatsSection() {
  const stats = Database.getStats();

  const statCards = [
    {
      icon: 'fa-download',
      label: 'Total Download',
      value: stats.totalDownloads.toString(),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: 'fa-file-alt',
      label: 'Total Halaman',
      value: stats.totalPages.toString(),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: 'fa-database',
      label: 'Total Ukuran',
      value: stats.totalSize,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: 'fa-server',
      label: 'Status Server',
      value: 'Online',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((card, index) => (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-10 h-10 ${card.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                <i className={`fas ${card.icon} text-transparent bg-clip-text bg-gradient-to-r ${card.color}`}></i>
                <i className={`fas ${card.icon} absolute text-white/80`} style={{ fontSize: '14px' }}></i>
              </div>
              <p className="text-2xl font-bold text-white">{card.value}</p>
              <p className="text-sm text-gray-400 mt-1">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
