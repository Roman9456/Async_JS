import json from '../parser';

describe('json', () => {
  test('should convert ArrayBuffer to JSON string', async () => {
    // Arrange
    const testData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const buffer = new ArrayBuffer(testData.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < testData.length; i++) {
      bufferView[i] = testData.charCodeAt(i);
    }

    // Act
    const result = await json(buffer);

    // Assert
    expect(result).toEqual(testData);
  });
});