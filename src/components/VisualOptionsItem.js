import React from "react"
import styles from "./VisualOptions.css"

class VisualOptionsItem extends React.Component {
  focus() {
    this.inputElement ? this.inputElement.focus() : null
  }

  render() {
    const { fieldName, name, selected, onChange, icon: Icon } = this.props

    return (
      <div
        className={`${styles.item} ${selected ? styles.selected : ""}`}
        onClick={e => {
          e.preventDefault();
          onChange()
        }}
      >
        <div className={styles.icon}>
          <Icon />
        </div>
        <small>{name}</small>
        <input
          type="radio"
          name={fieldName}
          aria-label={name}
          checked={selected}
          className={styles.hidden}
          onChange={() => null}
          ref={element =>
            !this.inputElement ? (this.inputElement = element) : null
          }
        />
      </div>
    )
  }
}

export default VisualOptionsItem
