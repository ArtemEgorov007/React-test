/**
 * API для получения коллекций фотографий
 * @param {number} category - ID категории (0 - все категории)
 * @param {number} page - Номер страницы
 * @returns {Promise<Array>} - Массив коллекций
 */
export const fetchCollections = async (category, page) => {
    const categoryParam = category ? `&category=${category}` : '';
    try {
        const res = await fetch(
            `https://680e5f8d67c5abddd191ee78.mockapi.io/photo-collection?page=${page}&limit=3${categoryParam}`
        );
        if (!res.ok) {
            throw new Error('Ошибка запроса');
        }
        return await res.json();
    } catch (err) {
        console.error('Ошибка получения коллекций:', err);
        return null;
    }
};
