import saveData from '../app';
import read from '../reader';
import GameSavingLoader from '../GameSavingLoader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});


test('app reject test', async () => {
  expect.assertions(1);
  read.mockRejectedValue(new Error());
  try { await saveData; } catch (error) {
    expect(error.message).toEqual('Unexpected end of JSON input');
  }
});

test('GameSavingLoader reject test', async () => {
  expect.assertions(1);
  read.mockRejectedValue(new Error('Something went wrong'));
  try { await GameSavingLoader.load(); } catch (error) {
    expect(error).toEqual(new Error('Something went wrong'));
  }
});
