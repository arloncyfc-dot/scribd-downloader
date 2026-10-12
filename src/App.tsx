import { useState } from 'react';
import { DownloadRecord } from './types';
import { Database, extractDocumentInfo } from './database';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DownloadHistory from './components/DownloadHistory';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';

function App() {
  const [downloads, setDownloads] = useState<DownloadRecord[]>(Database.getAllDownloads());
  const [isProcessing, setIsProcessing] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleDownload = async (url: string) => {
    if (!url.trim()) {
      showNotification('Masukkan URL Scribd terlebih dahulu!', 'error');
      return;
    }

    if (!url.includes('scribd.com') && !url.includes('scribd')) {
      showNotification('URL tidak valid! Masukkan URL Scribd yang benar.', 'error');
      return;
    }

    setIsProcessing(true);
    showNotification('Sedang memproses dokumen...', 'info');

    // Simulate processing time (like a real backend)
    await new Promise(resolve => setTimeout(resolve, 3000));

    try {
      const docInfo = extractDocumentInfo(url);
      const newRecord: DownloadRecord = {
        id: Date.now().toString(),
        ...docInfo,
        status: 'completed',
        createdAt: new Date().toISOString()
      };

      Database.addDownload(newRecord);
      setDownloads(Database.getAllDownloads());
      showNotification(`Berhasil mendownload: ${docInfo.title}`, 'success');
    } catch {
      showNotification('Gagal memproses dokumen. Coba lagi.', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDelete = (id: string) => {
    Database.deleteDownload(id);
    setDownloads(Database.getAllDownloads());
    showNotification('Record berhasil dihapus', 'info');
  };

  const handleClearAll = () => {
    Database.clearAll();
    setDownloads([]);
    showNotification('Semua riwayat dihapus', 'info');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 animate-slide-in ${
          notification.type === 'success' ? 'bg-green-500 text-white' :
          notification.type === 'error' ? 'bg-red-500 text-white' :
          'bg-blue-500 text-white'
        }`}>
          <div className="flex items-center gap-2">
            <i className={`fas ${
              notification.type === 'success' ? 'fa-check-circle' :
              notification.type === 'error' ? 'fa-exclamation-circle' :
              'fa-info-circle'
            }`}></i>
            <span className="font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      <Header />
      <HeroSection onDownload={handleDownload} isProcessing={isProcessing} />
      <StatsSection />
      <FeaturesSection />
      <HowItWorks />
      <DownloadHistory
        downloads={downloads}
        onDelete={handleDelete}
        onClearAll={handleClearAll}
      />
      <Footer />
    </div>
  );
}

export default App;
