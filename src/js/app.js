import GameSavingLoader from './GameSavingLoader';

export default (async () => {
  try {
    return JSON.parse(await GameSavingLoader.load());
  } catch (e) {
    throw new Error(e.message);
  }
})();
