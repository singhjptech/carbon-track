const { getData, getDistance } = require('./api-functions');

describe('getData from DVLA API', () => {
  it('type of "config" is an object', async () => {
    await getData();
    expect(typeof getData()).toEqual('object');
  });
});

describe.only('getDistance from Google Directions API', () => {
  it('returns an object ', async () => {
    await getDistance('EDINBURGH', 'LONDON');
    expect(typeof getDistance('EDINBURGH', 'LONDON')).toEqual('object');
  });
});
