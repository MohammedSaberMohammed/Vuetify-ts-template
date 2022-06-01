<template>
  <validation-provider
    v-slot="{ errors, invalid, validated }"
    :name="label"
    :rules="rules"
    :vid="name"
  >
    <component
      :is="`t-${type}-input`"
      v-bind="input"
      :name="name"
      :value="value"
      :label="label"
      :placeholder="placeholder"
      :hint="hint"
      :errors="errors"
      :invalid="invalid"
      :validated="validated"
      :rules="rules"
      :disabled="disabled"
      :outlined="outlined"
      :readonly="readonly"
      @change="handleChange"
      :min="min"
      :max="max"
      :number="number"
      :maxlength="maxlength"
      :disableWeekend="disableWeekend"
      :className="className"
      :dense="dense"

      :loading="loading"
      :multiple="multiple"
      :return-object="returnObject"
      :chips="chips"
      :attach="attach"
      :small-chips="smallChips"
      :deletable-chips="deletableChips"
      :clearable="clearable"
      :prepend-inner-icon="prependInnerIcon"
      :no-data-text="noDataText"
      :hide-selected="hideSelected"
      :rounded="rounded"
      :background-color="backgroundColor"

    >
      <template
        v-if="$slots.prepend"
        #prepend
      >
        <slot name="prepend" />
      </template>

      <template
        v-if="$slots['prepend-inner']"
        #prepend-inner
      >
        <slot name="prepend-inner" />
      </template>

      <template
        v-if="$slots.append"
        #append
      >
        <slot name="append" />
      </template>

      <template
        v-if="$slots.selection"
        #selection
      >
        <slot name="selection" />
      </template>
    </component>
  </validation-provider>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      // type: [String, Object],
      default: '',
    },
    name: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    hint: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number, File, Object, Array, Boolean, Date],
      default: '',
    },
    input: {
      type: Object,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
    },
    readonly: {
      type: Boolean,
    },
    min: {
      type: String,
      default: null,
    },
    max: {
      type: String,
      default: null,
    },
    maxlength: {
      type: String,
      default: null,
    },
    number: {
      type: Boolean,
    },
    className: {
      type: String,
    },
    disableWeekend: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
    },

    attach: { type: Boolean },
    backgroundColor: {
      type: String,
    },
    returnObject: {
      type: Boolean,
    },
    rounded: {
      type: Boolean,
    },
    multiple: {
      type: Boolean,
    },
    chips: {
      type: Boolean,
    },
    smallChips: {
      type: Boolean,
    },
    deletableChips: {
      type: Boolean,
    },
    clearable: {
      type: Boolean,
    },
    prependInnerIcon: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
    noDataText: {
      type: String,
    },
    hideSelected: {
      type: Boolean,
    },
    showSelectAll: {
      type: Boolean,
    },
  },
  methods: {
    handleChange(value) {
      this.$emit('update:value', value);
      this.$emit('change', value);
    },
  },
};
</script>
