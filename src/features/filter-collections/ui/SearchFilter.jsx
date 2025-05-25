import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент поиска по названию коллекции
 * @param {Object} props - Свойства компонента
 * @param {string} props.value - Значение поиска
 * @param {Function} props.onChange - Обработчик изменения значения
 */
export const SearchFilter = ({ value, onChange }) => {
    return (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="search-input"
            placeholder="Поиск по названию"
        />
    );
};

SearchFilter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
