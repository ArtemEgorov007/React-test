/**
 * Вспомогательные функции для работы с данными
 */

/**
 * Фильтрует коллекции по поисковому запросу
 * @param {Array} collections - Массив коллекций
 * @param {string} searchValue - Поисковый запрос
 * @returns {Array} - Отфильтрованный массив коллекций
 */
export const filterCollectionsBySearch = (collections, searchValue) => {
  if (!searchValue) return collections;
  
  return collections.filter(collection => 
    collection.name.toLowerCase().includes(searchValue.toLowerCase())
  );
};

/**
 * Форматирует данные коллекций для отображения
 * @param {Array} collections - Массив коллекций с сервера
 * @returns {Array} - Форматированный массив коллекций
 */
export const formatCollections = (collections) => {
  if (!collections) return [];
  
  return collections.map(collection => ({
    ...collection,
    // Дополнительная обработка данных, если потребуется
  }));
};
