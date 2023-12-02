import React from 'react'
import styles from './VisualOptions.css'
import VisualOptionsItem from './VisualOptionsItem'

class VisualOptions extends React.Component {
  focus() {
    if (this.inputElement) {
      this.inputElement.focus()
    }
  }

  render() {
    const {shape = '', options, value, size = '', showLabel, showTooltip, onChange} = this.props

    const extraClasses = []

    if (['large', 'small', 'tiny'].indexOf(size.toLowerCase()) > -1) {
      extraClasses.push(styles[size.toLowerCase()])
    }

    if (shape) {
      extraClasses.push(styles[shape.toLowerCase()])
    }

    return (
      <div className={styles.container}>
        {options && (
          <div className={`${styles.grid} ${extraClasses.join(' ')}`}>
            {Object.keys(options).map((k, i) => (
              <VisualOptionsItem
                key={k}
                {...options[k]}
                selected={k == value || (options[k].default && value == undefined)}
                showLabel={showLabel}
                showLabelAsTooltip={showTooltip}
                value={k}
                ref={(element) =>
                  !this.inputElement && (k == value || (value == undefined && i == 0))
                    ? (this.inputElement = element)
                    : null
                }
                onChange={() => onChange(k)}
              />
            ))}
          </div>
        )}
        {!options && (
          <div className={styles.error}>
            Options must be an array with at least a value for `key`
          </div>
        )}
      </div>
    )
  }
}

export default VisualOptions
