export interface StorageService {
  uploadFile(filePath: string, fileName: string, mimeType: string): Promise<string>;
}
