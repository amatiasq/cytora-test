export class ClientStorage<T> {
  private readonly serialise: (value: T) => string;
  private readonly deserialise: (value: string) => T;
  private readonly defaultValue: T;

  constructor(
    readonly key: string,
    {
      serialise = JSON.stringify,
      deserialise = JSON.parse,
      default: def,
    }: {
      serialise?(value: T): string;
      deserialise?(value: string): T;
      default: T;
    }
  ) {
    this.serialise = serialise;
    this.deserialise = deserialise;
    this.defaultValue = def;
  }

  read() {
    const value = sessionStorage.getItem(this.key);
    return value ? this.deserialise(value) : this.defaultValue;
  }

  write(value: T) {
    const json = this.serialise(value);
    sessionStorage.setItem(this.key, json);
  }
}
