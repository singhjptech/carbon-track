const { getData } = require('./api-functions');

describe('getData API', () => {
  it('type of "config" is an object', async () => {
    await getData();
    expect(typeof getData()).toEqual('object');
  });
});