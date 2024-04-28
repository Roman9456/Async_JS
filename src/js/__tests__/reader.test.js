import read from '../reader';

describe('read', () => {
  test('should return ArrayBuffer', async () => {
    // Act
    const result = await read();

    // Assert
    expect(result).toBeInstanceOf(ArrayBuffer);
    
  });
});