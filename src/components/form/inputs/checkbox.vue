<template>
  <v-checkbox
    hide-details
    :value="value"
    :label="label"
    :hint="hint"
    :error="validated && invalid"
    :error-messages="errors"
    :disabled="disabled"
    @change="handleChange"
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

    <template
      v-if="$slots.label"
      #label
    >
      <slot name="label" />
    </template>
  </v-checkbox>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
    label: {
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
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    },
  },
};
</script>
