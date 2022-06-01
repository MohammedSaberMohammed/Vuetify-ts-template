<template>
  <div>
    <v-textarea
      :value="value"
      :placeholder="placeholder"
      :label="label"
      :hint="hint"
      :maxlength="maxlength"
      :rows="rows"
      :auto-grow="autoGrow"
      :error="validated && invalid"
      @input="handleChange"
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
    </v-textarea>
    <p v-if="invalid && errors.length" class="red--text">{{ errors[0] }}</p>
  </div>
</template>

<script>
export default {
  props: {
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
    rows: {
      type: Number,
      default: 5,
    },
    autoGrow: {
      type: Boolean,
      default: true,
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
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    },
  },
};
</script>
