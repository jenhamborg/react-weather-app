export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: [],
    }).then(
      Promise.resolve({
        data: [],
      })
    )
  ),
};
