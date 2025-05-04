import React, { useEffect, useState } from "react";
import { Collection } from "../../Collection/ui/Collection";
import { fetchCollections } from "../../../shared/api/fetchCollections/fetchCollections";

import './Page.css';

export const Page = () => {
    const [collections, setCollections] = useState([]);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCollections().then((collections) => {
            console.log("Fetched:", collections);
            if (collections) setCollections(collections);
        });
    }, []);

    // console.log('Пример URLs изображений:', collections[0].name);

    return (
        <div className="App">
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {categories.map((category) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
                <input className="search-input" placeholder="Поиск по названию" />
            </div>

            <div className="content">
                {collections.map((collection) => (
                    <Collection
                        key={collection.id}
                        name={collection.name}
                        images={collection.photos}
                    />
                ))}
            </div>

            <ul className="pagination">
                <li>1</li>
                <li className="active">2</li>
                <li>3</li>
            </ul>
        </div>
    );
};
