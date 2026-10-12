export interface DownloadRecord {
  id: string;
  url: string;
  title: string;
  author: string;
  pages: number;
  format: string;
  fileSize: string;
  status: 'completed' | 'processing' | 'failed';
  createdAt: string;
  thumbnail: string;
}

export interface UserStats {
  totalDownloads: number;
  totalPages: number;
  totalSize: string;
}
