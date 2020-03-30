import React from 'react';

const InputItem = ({onchangeHandler, ...rest}) => {
  return (
    <div className="form-group">
      <input {...rest} onChange={onchangeHandler} className="form-control"/>
    </div>
  );
};

export default InputItem;