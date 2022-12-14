export abstract class StorageAbstractClass {
  abstract getValue(storageKey: string): string | undefined | null;
  abstract setValue(storageKey: string, storageValue: string): void;
}
