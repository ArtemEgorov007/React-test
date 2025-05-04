export const fetchCollections = async () => {
    try {
        const res = await fetch('https://680e5f8d67c5abddd191ee78.mockapi.io/photo_colections');
        if (!res.ok) throw new Error('Ошибка запроса');
        return await res.json();
    } catch (err) {
        console.error('Ошибка получения коллекций:', err);
        return null;
    }
};
