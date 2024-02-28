import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      return await json(data);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
