import React from "react"
import styles from "./VisualOptions.css"

class VisualOptionsItem extends React.Component {
  focus() {
    this.inputElement ? this.inputElement.focus() : null
  }

  render() {
    const {
      fieldName,
      name,
      value,
      selected,
      onChange,
      icon: Icon,
    } = this.props

    return (
      <div
        className={`${styles.item} ${selected ? styles.selected : ""}`}
        onClick={e => {
          this.inputElement.click()
          e.preventDefault()
          this.focus()
        }}
      >
        <div className={styles.icon}>
          <Icon />
        </div>
        {name && <small>{name}</small>}
        <input
          type="radio"
          name={fieldName}
          aria-label={name}
          defaultChecked={selected}
          value={value}
          className={styles.hidden}
          onClick={onChange}
          ref={element =>
            !this.inputElement ? (this.inputElement = element) : null
          }
        />
      </div>
    )
  }
}

export default VisualOptionsItem
