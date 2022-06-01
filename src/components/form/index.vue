<template>
  <validation-observer ref="observerRef" v-slot="{ passes }">
    <form
      ref="form"
      v-bind="$props"
      :class="classes"
      :name="`form_${name}_QcTestAuto`"
      @submit.prevent="e => passes(() => handleSubmit(e))"
    >
      <slot />
    </form>
  </validation-observer>
</template>

<script>
export default {
  name: 'FormComponent',
  props: {
    name: {
      type: String,
      require: true,
    },
    classes: {
      type: String,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSubmit(e) {
      this.$emit('submit', e);
    },
    reset() {
      this.$refs.form.reset();
      this.$refs.observerRef.reset();
    },
  },
};
</script>
