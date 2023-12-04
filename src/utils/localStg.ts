export class localStg {
  readonly DEFAULT_CACHE_TIME: number = 60 * 60 * 24 * 7;
  
  set(key: string, value: any) {
    const storage: string = JSON.stringify({
      value,
      expire: this.DEFAULT_CACHE_TIME
    })
    window.localStorage.setItem(key, storage);
  }

  get(key: string) {
    const storage: string | null = window.localStorage.getItem(key);
    if (!storage) return;
    return JSON.parse(storage).value;
  }

  remove(key: string) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
  }
}