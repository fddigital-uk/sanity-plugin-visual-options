import React from 'react'
import styles from './VisualOptions.css'

class VisualOptionsItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {over: false}
  }
  focus() {
    if (this.inputElement) {
      this.inputElement.focus()
    }
  }

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
      <div
        className={`${styles.item} ${showLabelAsTooltip ? styles.tooltip : ''} ${
          selected ? styles.selected : ''
        } ${this.state.over ? styles.over : ''}`}
        onMouseOver={() => this.setState({over: true})}
        onMouseOut={() => this.setState({over: false})}
        onClick={(e) => {
          this.inputElement.click()
          e.preventDefault()
          this.focus()
        }}
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
          ref={(element) => (this.inputElement ? null : (this.inputElement = element))}
        />
      </div>
    )
  }
}

export default VisualOptionsItem
