// src/components/ProductOptions.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Option = styled.button`
  width: ${props => (props.shape === 'circle' ? '31px' : 'auto')};
  height: ${props => (props.shape === 'circle' ? '31px' : '46px')};
  border-radius: ${props => (props.shape === 'circle' ? '50%' : props.radius)};
  background-color: ${props => (props.type === 'color' ? props.option : 'transparent')};
  border: 1px solid ${props => (props.isSelected ? 'var(--primary-color)' : 'lightgray')};
  font-size: ${props => (props.type === 'text' ? '24px' : '0')};
  color: ${props => (props.type === 'text' ? 'darkgray' : 'transparent')};
  cursor: pointer;
  margin-right: 10px;
  margin-top: 20px;
`;

const ProductOptions = ({ options, shape, type, radius }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      {options.map((option, index) => (
        <Option
          key={index}
          option={option}
          shape={shape}
          type={type}
          radius={radius}
          isSelected={selectedOption === index}
          onClick={() => setSelectedOption(index)}
        >
          {type === 'text' ? option : ''}
        </Option>
      ))}
    </div>
  );
};

export default ProductOptions;
