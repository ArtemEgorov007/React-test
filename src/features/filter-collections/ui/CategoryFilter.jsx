import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../model/constants';

/**
 * Компонент фильтрации по категориям
 * @param {Object} props - Свойства компонента
 * @param {number} props.activeCategory - Активная категория
 * @param {Function} props.onCategoryChange - Обработчик изменения категории
 */
export const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
    return (
        <ul className="tags">
            {CATEGORIES.map((cat, index) => (
                <li 
                    onClick={() => onCategoryChange(index)}
                    className={activeCategory === index ? 'active' : ''} 
                    key={index}
                >
                    {cat.name}
                </li>
            ))}
        </ul>
    );
};

CategoryFilter.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    onCategoryChange: PropTypes.func.isRequired
};
