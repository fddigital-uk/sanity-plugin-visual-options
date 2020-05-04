import React from "react"
import styles from "./VisualOptions.css"
import VisualOptionsItem from "./VisualOptionsItem"

class VisualOptions extends React.Component {
  focus() {
    this.inputElement ? this.inputElement.focus() : null
  }

  render() {
    const { options, value, size = "", showLabel, showTooltip, onChange } = this.props
    const extraClasses = (size.toLowerCase() == "large" || size.toLowerCase() == "small") ? size.toLowerCase() : null;

    return (
      <div className={styles.container}>
        {options && (
          <div className={`${styles.grid} ${extraClasses ? styles[extraClasses] : ""}`}>
            {Object.keys(options).map((k, i) => (
              <VisualOptionsItem
                key={k}
                {...options[k]}
                selected={
                  k == value || (options[k].default && value == undefined)
                }
                showLabel={showLabel}
                showLabelAsTooltip={showTooltip}
                value={k}
                ref={element =>
                  !this.inputElement &&
                  (k == value || (value == undefined && i == 0))
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