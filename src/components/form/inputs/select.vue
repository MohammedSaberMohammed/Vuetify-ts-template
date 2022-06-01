<template>
  <div>
    <v-autocomplete
      :label="label"
      :hint="hint"
      :items.sync="itemsFiltered"
      :loading="loading"
      :value="value"
      :placeholder="placeholder"
      :item-text="itemText"
      :item-value="itemValue"
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
      :outlined="outlined"
      :rounded="rounded"
      :dense="dense"
      :background-color="backgroundColor"
      :name="`ddlInput_${name}_QcTestAuto`"
      @change="handleChange"
      :disabled="disabled"
    >
      <template v-if="$slots.prepend" #prepend>
        <slot name="prepend" />
      </template>

      <template v-if="$slots['prepend-inner']" #prepend-inner>
        <slot name="prepend-inner" />
      </template>

      <template v-if="$slots.append" #append>
        <slot name="append" />
      </template>

      <!-- :class="{
            'v-list-item--active primary--text v-list-item--link':
              selectAll || selectSome,
          }" -->
      <template v-if="showSelectAll" v-slot:prepend-item>
        <v-list-item ripple @click="toggleSelectAll">
          <v-list-item-action v-if="!hideSelected">
            <v-icon :color="value.length > 0 ? 'indigo darken-4' : ''">
              {{
                selectAll
                  ? "mdi-close-box"
                  : value.length
                  ? "mdi-minus-box"
                  : "mdi-checkbox-blank-outline"
              }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{ $t("app.requests.chooseAll") }}
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-2"></v-divider>

        <slot name="prepend-item" />
      </template>

      <template v-if="minimizeSelections" #selection="props">
        <slot name="selection" :props="props">
          <v-chip v-if="props.index === 0">
            <span>{{ props.item[itemText] ? props.item[itemText] : props.item['supervisor']['name'] }}</span>
          </v-chip>
          <span v-if="props.index === 1" class="grey--text text-caption">
            (+{{ value.length - 1 }} {{ $t("app.requests.other") }})
          </span>
        </slot>
      </template>
    </v-autocomplete>
    <p v-if="invalid && errors.length" class="red--text">{{ errors[0] }}</p>
  </div>
</template>
<script>
export default {
  name: 'SelectField',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
      default: () => [],
    },
    value: { type: [String, Array, Number, Object] },
    placeholder: { type: String },
    itemText: { type: String, default: 'name' },
    itemValue: { type: String, default: 'id' },
    backgroundColor: { type: String },
    returnObject: { type: Boolean },
    outlined: { type: Boolean },
    rounded: { type: Boolean },
    dense: { type: Boolean },
    multiple: { type: Boolean },
    chips: { type: Boolean },
    attach: { type: Boolean },
    smallChips: { type: Boolean },
    deletableChips: { type: Boolean },
    clearable: { type: Boolean },
    prependInnerIcon: { type: String },
    label: { type: String },
    loading: { type: Boolean },
    noDataText: { type: String },
    hideSelected: { type: Boolean },
    hint: { type: String },
    showSelectAll: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    invalid: { type: Boolean },
    validated: { type: Boolean },
    minimizeSelections: { type: Boolean },
  },
  computed: {
    selectAll: {
      get() {
        return this.value && this.value.length === this.itemsFiltered.length;
      },
      set(val) {
        this.selectAll = val;
      },
    },
    selectSome() {
      return this.value && this.value.length > 0 && !this.selectAll;
    },
    itemsFiltered() {
      if (this.items && this.items.length > 0 && this.items[0][this.itemText]) {
        const filteredSSONulls = this.items.filter(
          (item) => item[this.itemText] != null,
        );
        return filteredSSONulls;
      } if (
        this.items
        && this.items.length > 0
        && this.items[0].supervisor
      ) {
        const filteredSSONulls = this.items.filter(
          (item) => item.supervisor.name != null,
        );
        return filteredSSONulls;
      }
      return this.items;
    },
  },
  methods: {
    handleChange(value) {
      this.$emit('update:value', value);
      this.$emit('change', value);
    },
    toggleSelectAll() {
      this.$nextTick(() => {
        if (this.selectAll) {
          this.$emit('update:value', []);
          this.$emit('change', []);
        } else {
          this.$emit('update:value', this.itemsFiltered.slice());
          this.$emit('change', this.itemsFiltered.map((el) => el[this.itemValue]));
        }
      });
    },
  },
};
</script>

<style lang="scss">
.v-list.v-select-list{
  .v-list-item, .v-list-item--active{
    .v-icon {
      color: var(--v-primary-base) !important;
    }
  }
}
</style>
