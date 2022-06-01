<template>
  <v-text-field
    :value="value"
    :placeholder="placeholder"
    :label="label"
    :hint="hint"
    :type="type"
    :error="validated && invalid"
    :error-messages="errors"
    :disabled="disabled"
    :maxlength="maxlength"
    :name="`txtInput_${name}_QcTestAuto`"
    @input="handleChange"
    @keypress="handleKeypress"
    :outlined="outlined"
    :rounded="rounded"
    :dense="dense"
  >
    <template
      v-if="$slots.prepend"
      #prepend
    >
      <slot name="prepend" />
    </template>

    <template
      v-if="$slots.append"
      #append
    >
      <slot name="append" />
    </template>
  </v-text-field>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [Number, String],
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    hint: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
    },
    readonly: {
      type: Boolean,
    },
    invalid: {
      type: Boolean,
    },
    validated: {
      type: Boolean,
    },
    errors: {
      type: Array,
      default: () => [],
    },
    maxlength: {
      type: String,
      default: null,
    },
    number: {
      type: Boolean,
    },
    outlined: { type: Boolean },
    rounded: { type: Boolean },
    dense: { type: Boolean },
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    },
    handleKeypress(evt) {
      if (this.number) {
        evt = (evt) || window.event;
        const expect = evt.target.value.toString() + evt.key.toString();

        if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(expect)) {
          evt.preventDefault();
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
  },
};
</script>

<style scss >
  input {
    min-height: 42px;
  }
</style>
