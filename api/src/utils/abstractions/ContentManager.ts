import { StorageService } from '../interfaces/StorageService';

export abstract class ContentManager {
  protected storageService: StorageService;

  constructor(storageService: StorageService) {
    this.storageService = storageService;
  }

  abstract createContent(contentData: any, file: Express.Multer.File | null): Promise<void>;
}
