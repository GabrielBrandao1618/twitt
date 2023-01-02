export abstract class EncryptService {
  abstract hash(data: string | Buffer): Promise<string>;
  abstract compare(data: string | Buffer, encrypted: string): Promise<boolean>;
}
