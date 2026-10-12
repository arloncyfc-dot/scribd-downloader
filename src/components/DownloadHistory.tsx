import { useState } from 'react';
import { DownloadRecord } from '../types';
import { Database } from '../database';

interface DownloadHistoryProps {
  downloads: DownloadRecord[];
  onDelete: (id: string) => void;
  onClearAll: () => void;
}

export default function DownloadHistory({ downloads, onDelete, onClearAll }: DownloadHistoryProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDownloads = searchQuery
    ? Database.searchDownloads(searchQuery)
    : downloads;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="history" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Riwayat Download</h3>
            <p className="text-gray-400">
              <i className="fas fa-database text-purple-400 mr-2"></i>
              Data tersimpan di database (localStorage)
            </p>
          </div>
          {downloads.length > 0 && (
            <button
              onClick={onClearAll}
              className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-all text-sm flex items-center gap-2"
            >
              <i className="fas fa-trash-alt"></i>
              <span>Hapus Semua</span>
            </button>
          )}
        </div>

        {/* Search */}
        {downloads.length > 0 && (
          <div className="mb-6">
            <div className="relative max-w-md">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari dokumen..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-500/50 transition-colors text-sm"
              />
            </div>
          </div>
        )}

        {/* Download List */}
        {filteredDownloads.length > 0 ? (
          <div className="space-y-3">
            {filteredDownloads.map((download) => (
              <div
                key={download.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Thumbnail */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center text-2xl shrink-0 border border-purple-500/20">
                    {download.thumbnail}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium truncate">{download.title}</h4>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <i className="fas fa-user"></i>
                        {download.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="fas fa-file"></i>
                        {download.format}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="fas fa-copy"></i>
                        {download.pages} halaman
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="fas fa-hdd"></i>
                        {download.fileSize}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      <i className="fas fa-clock mr-1"></i>
                      {formatDate(download.createdAt)}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      download.status === 'completed'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : download.status === 'processing'
                        ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      <i className={`fas ${
                        download.status === 'completed' ? 'fa-check-circle' :
                        download.status === 'processing' ? 'fa-spinner fa-spin' :
                        'fa-times-circle'
                      } mr-1`}></i>
                      {download.status === 'completed' ? 'Selesai' :
                       download.status === 'processing' ? 'Proses' : 'Gagal'}
                    </span>
                    <button
                      onClick={() => onDelete(download.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all opacity-0 group-hover:opacity-100"
                      title="Hapus"
                    >
                      <i className="fas fa-trash-alt text-xs"></i>
                    </button>
                  </div>
                </div>

                {/* URL */}
                <div className="mt-3 pt-3 border-t border-white/5">
                  <p className="text-xs text-gray-500 truncate">
                    <i className="fas fa-link mr-1"></i>
                    {download.url}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
              <i className="fas fa-inbox text-3xl text-purple-400/50"></i>
            </div>
            <h4 className="text-lg font-medium text-gray-300 mb-2">
              {searchQuery ? 'Tidak ada hasil pencarian' : 'Belum ada riwayat download'}
            </h4>
            <p className="text-sm text-gray-500">
              {searchQuery
                ? 'Coba kata kunci lain'
                : 'Mulai download dokumen Scribd pertama Anda!'}
            </p>
          </div>
        )}

        {/* Record count */}
        {downloads.length > 0 && (
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Menampilkan {filteredDownloads.length} dari {downloads.length} record
              <span className="mx-2">•</span>
              <span className="text-purple-400">SELECT * FROM downloads</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
