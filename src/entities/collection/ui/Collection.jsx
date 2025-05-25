import React from 'react';
import PropTypes from 'prop-types';
import './Collection.css';

/**
 * Компонент коллекции фотографий
 * @param {Object} props - Свойства компонента
 * @param {string} props.name - Название коллекции
 * @param {Array<string>} props.images - Массив URL изображений
 */
export const Collection = ({ name, images }) => {
    return (
        <div className="collection">
            <img className="collection__big" src={images[0]} alt="Item" />
            <div className="collection__bottom">
                <img className="collection__mini" src={images[1]} alt="Item" />
                <img className="collection__mini" src={images[2]} alt="Item" />
                <img className="collection__mini" src={images[3]} alt="Item" />
            </div>
            <h4>{name}</h4>
        </div>
    );
};

Collection.propTypes = {
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};
