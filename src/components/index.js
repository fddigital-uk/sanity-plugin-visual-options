import React from "react";
import PropTypes from "prop-types"
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event"
import FormField from "part:@sanity/components/formfields/default"
import VisualOptions from "./VisualOptions"

const createPatchFrom = value =>
  PatchEvent.from(value === "" ? unset() : set(value))

class VisualOptionsContainer extends React.Component {
  focus() {
    this.inputElement ? this.inputElement.focus() : null
  }

  selectItem(item) {
    this.props.onChange(createPatchFrom(item))
  }

  render() {
    const { value, type, level } = this.props

    return (
      <FormField
        label={type.title ? type.title : ""}
        description={type.description ? type.description : null}
        level={level}
      >
        <VisualOptions
          options={type.options.list}
          value={value}
          ref={element =>
            !this.inputElement ? (this.inputElement = element) : null
          }
          onChange={item => this.selectItem(item)}
        />
      </FormField>
    )
  }
}

VisualOptionsContainer.propTypes = {
  value: PropTypes.string,
  options: PropTypes.shape({
    list: PropTypes.object
  }),
  onChange: PropTypes.func.isRequired,
}

export default VisualOptionsContainer