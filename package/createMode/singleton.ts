/**
 * @description 单例模式
 */
class StorageSingleton {
  static instance: any;
  private storage: Object;
  constructor() {
    this.storage = {};
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new StorageSingleton();
    }
    return this.instance;
  }

  getItem(key: string) {
    return this.storage[key] || undefined;
  }

  setItem(key: string, value: string) {
    return (this.storage[key] = value);
  }
}

const aa = StorageSingleton.getInstance();
const bb = StorageSingleton.getInstance();

aa.setItem("age", "12");
console.log(bb.getItem("age"));

export default StorageSingleton;
