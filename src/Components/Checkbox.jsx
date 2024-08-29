import '../styles/Checkbox.css';

import { memo, useId } from 'react';

const Checkbox = ({
  value,
  onCheckClick,
  labelText = 'checked',
  direction = 'left',
}) => {
  const flexDirection = {
    flexDirection: direction === 'right' ? 'row-reverse' : 'row',
  };
  const uniqID = useId();

  return (
    <div className="checkbox-container" style={flexDirection}>
      <input
        type="checkbox"
        id={uniqID}
        className="custom-checkbox"
        checked={value}
        onChange={() => onCheckClick(!value)}
      />
      <label htmlFor={uniqID} className="checkbox-label">
        {labelText}(s)
      </label>
    </div>
  );
};

export default memo(Checkbox);
