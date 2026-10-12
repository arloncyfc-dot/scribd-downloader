import { DownloadRecord, UserStats } from './types';

const STORAGE_KEY = 'scribd_downloads';
const STATS_KEY = 'scribd_stats';

// Simulate MySQL database operations using localStorage
export const Database = {
  // Get all download records (SELECT * FROM downloads)
  getAllDownloads(): DownloadRecord[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Insert a new download record (INSERT INTO downloads)
  addDownload(record: DownloadRecord): void {
    const downloads = this.getAllDownloads();
    downloads.unshift(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(downloads));
    this.updateStats(record);
  },

  // Delete a download record (DELETE FROM downloads WHERE id = ?)
  deleteDownload(id: string): void {
    const downloads = this.getAllDownloads();
    const filtered = downloads.filter(d => d.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },

  // Clear all records (DELETE FROM downloads)
  clearAll(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    localStorage.setItem(STATS_KEY, JSON.stringify({
      totalDownloads: 0,
      totalPages: 0,
      totalSize: '0 MB'
    }));
  },

  // Get user statistics
  getStats(): UserStats {
    const data = localStorage.getItem(STATS_KEY);
    if (data) return JSON.parse(data);
    return { totalDownloads: 0, totalPages: 0, totalSize: '0 MB' };
  },

  // Update statistics after new download
  updateStats(record: DownloadRecord): void {
    const stats = this.getStats();
    stats.totalDownloads += 1;
    stats.totalPages += record.pages;
    const currentSize = parseFloat(stats.totalSize);
    const newSize = parseFloat(record.fileSize);
    stats.totalSize = `${(currentSize + newSize).toFixed(1)} MB`;
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  },

  // Search downloads (SELECT * FROM downloads WHERE title LIKE ?)
  searchDownloads(query: string): DownloadRecord[] {
    const downloads = this.getAllDownloads();
    return downloads.filter(d =>
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.author.toLowerCase().includes(query.toLowerCase())
    );
  }
};

// Simulate Scribd document extraction
export const extractDocumentInfo = (url: string): Omit<DownloadRecord, 'id' | 'status' | 'createdAt'> => {
  // Simulate extracting info from Scribd URL
  const titles = [
    'Panduan Lengkap Machine Learning',
    'Analisis Data dengan Python',
    'Pengantar Database MySQL',
    'Web Development Modern',
    'Algoritma dan Struktur Data',
    'Desain UI/UX untuk Pemula',
    'Cloud Computing dengan AWS',
    'Mobile App Development',
    'Cybersecurity Fundamentals',
    'DevOps dan CI/CD Pipeline'
  ];

  const authors = [
    'Ahmad Rizki', 'Budi Santoso', 'Citra Dewi', 'Dian Pratama',
    'Eka Putri', 'Fajar Nugroho', 'Gita Rahayu', 'Hadi Wijaya',
    'Indra Kusuma', 'Joko Susanto'
  ];

  const formats = ['PDF', 'DOCX', 'TXT', 'PPTX'];
  const thumbnails = [
    '📘', '📗', '📙', '📕', '📓', '📔', '📒', '📚'
  ];

  const randomIndex = Math.floor(Math.random() * titles.length);
  const randomPages = Math.floor(Math.random() * 200) + 20;
  const randomSize = (Math.random() * 15 + 1).toFixed(1);

  return {
    url,
    title: titles[randomIndex],
    author: authors[randomIndex],
    pages: randomPages,
    format: formats[Math.floor(Math.random() * formats.length)],
    fileSize: `${randomSize} MB`,
    thumbnail: thumbnails[Math.floor(Math.random() * thumbnails.length)]
  };
};
