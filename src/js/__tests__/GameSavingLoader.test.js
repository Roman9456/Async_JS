import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';
import json from '../parser';


// Мокируем функции read и json для имитации успешной загрузки и преобразования данных
jest.mock('../reader');
jest.mock('../parser');

describe('GameSavingLoader', () => {
  test('should load game saving data correctly', async () => {
    // Arrange
    const expectedData = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000
      }
    };
    // Устанавливаем возвращаемые значения для моков read и json
    read.mockResolvedValue(new ArrayBuffer(0));
    json.mockResolvedValue(JSON.stringify(expectedData));

    // Act
    const saving = await GameSavingLoader.load();

    // Assert
    expect(saving).toEqual(expectedData);
  });

  test('should reject promise if loading fails', async () => {
    // Arrange
    const expectedError = new Error('Failed to load game saving data');
    // Устанавливаем возвращаемую ошибку для мока read
    read.mockRejectedValue(expectedError);

    // Act & Assert
    await expect(GameSavingLoader.load()).rejects.toThrow(expectedError);
  });
});