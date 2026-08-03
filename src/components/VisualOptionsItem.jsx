import React from 'react'

import styles from './VisualOptions.css'

class VisualOptionsItem extends React.Component {
  render() {
    const {
      fieldName,
      name,
      value,
      selected,
      showLabel = true,
      showLabelAsTooltip = false,
      onChange,
      icon: Icon,
    } = this.props

    return (
      <label
        className={`${styles.item} ${showLabelAsTooltip ? styles.tooltip : ''} ${
          selected ? styles.selected : ''
        }`}
      >
        <div className={styles.icon}>
          <Icon />
        </div>
        {(showLabel || showLabelAsTooltip) && name && (
          <div className={styles.tip}>
            <small>{name}</small>
          </div>
        )}
        <input
          type="radio"
          name={fieldName}
          aria-label={name}
          defaultChecked={selected}
          value={value}
          className={styles.hidden}
          onClick={onChange}
        />
      </label>
    )
  }
}

export default VisualOptionsItem
