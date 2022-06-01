<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="computedDateFormatted"
          :label="label"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          :class="'t-datePicker ' + className"
        >
          <template v-slot:append>
            <small>{{$t("gregorian")}}</small>
            <v-switch
              :ripple="false"
              v-model="isHijri"
              class="px-1"
              hide-details
              @change="formatDate"
            />
            <small>{{$t("hijri")}}</small>
          </template>
        </v-text-field>

      </template>
      <!-- Rolled back as requested -->
        <!-- locale="ar" -->

      <v-hijri-date-picker
        v-if="isHijri"
        v-model="date"
        :label="label"
        :min="minValue"
        :max="maxValue"
        color="#187860"
        autoSubmit
        :allowed-dates="setAllowedDates"
        :month-format="monthFormat"
        :header-date-format="monthFormat"
        :title-date-format="titleDateFormat"
        :weekday-format="dayFormat"
        @change="handleChange"
        @input="menu = false"
      />
      <v-date-picker
        v-else
        :value="date"
        :label="label"
        :min="minValue"
        :max="maxValue"
        color="#187860"
        autoSubmit
        :allowed-dates="setAllowedDates"
        :month-format="monthFormat"
        :header-date-format="monthFormat"
        :title-date-format="titleDateFormat"
        :weekday-format="dayFormat"
        @change="handleChange"
        @input="menu = false" />
    </v-menu>

    <p v-if="invalid && errors.length" class="red--text">{{ errors[0] }}</p>
  </div>

</template>

<script>
import uq from '@umalqura/core';
import moment from 'moment';
import VHijriDatePicker from 'vuetify-umalqura';

uq.locale('ar');
const Hijri_Monthes = uq.months();
const AR_Days = uq.daysShort();
uq.locale('en');

const Gregorian_Monthes = ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

export default {
  data: () => ({
    menu: false,
    format: 'iYYYY-iMM-iDD',
    date: null,
    isHijri: true,
  }),
  components: {
    VHijriDatePicker,
  },
  props: {
    value: {
      type: [String, Object, Date],
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
    className: {
      type: String,
    },
    min: {
      type: String,
      default: null,
    },
    max: {
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
    disableWeekend: {
      type: Boolean,
      default: false,
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
      this.$emit('change', this.isHijri ? this.dateToGregorian(value) : value);
    },
    dateToGregorian(date) {
      if (date) {
        const myArrayDate = date.split('-');
        const dateModel = { year: myArrayDate[0], month: myArrayDate[1], day: myArrayDate[2] };
        const uqValue = uq(dateModel.year, dateModel.month, dateModel.day);
        return uqValue.date;
      }
    },
    formatDate() {
      if (this.value) {
        if (this.isHijri) {
          const uqDate = uq(new Date(this.value));
          const uqFormat = this.format.replace(/i/g, '').replace(/Y/g, 'y').replace(/D/g, 'd');
          this.date = uqDate.format(uqFormat);
        } else {
          this.date = moment(this.value).locale('en').format('YYYY-MM-DD');
        }
      } else {
        this.date = null;
      }
    },
    setAllowedDates(val) {
      if (this.disableWeekend) {
        if (this.isHijri) {
          const gregVal = this.dateToGregorian(val);
          return new Date(gregVal).getDay() !== 5 && new Date(gregVal).getDay() !== 6;
        }
        return new Date(val).getDay() !== 5 && new Date(val).getDay() !== 6;
      }
      return val;
    },
    convertToArabicFormat(val) {
      if (val) {
        // Rolled back as requested

        // const arabicNumbers = "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";
        // const arNums = new String(val).replace(/[0123456789]/g, (d) => {
        //   return arabicNumbers[d];
        // });
        // return arNums.split("-").reverse().join("-");

        return val;
      }
    },
    monthFormat(date) {
      const currentMonth = Number(date.substring(date.indexOf('-') + 1)) - 1;
      return this.isHijri ? Hijri_Monthes[currentMonth] : Gregorian_Monthes[currentMonth];
    },
    titleDateFormat(date) {
      if (this.isHijri) {
        const uqDate = uq(new Date(this.value));
        return `${uqDate._hd} ${Hijri_Monthes[uqDate._hm - 1]} ${uqDate._hy}`;
      }
      const myArrayDate = date.split('-');
      return `${myArrayDate[2]} ${Gregorian_Monthes[Number(myArrayDate[1] - 1)]} ${myArrayDate[0]}`;
    },
    dayFormat(date) {
      const uqDate = uq(new Date(date));
      return AR_Days[uqDate.dayOfWeek];
    },
  },
  computed: {
    minValue() {
      if (this.min) {
        if (this.isHijri) {
          return this.min;
        }
        return moment(this.dateToGregorian(this.min)).format('YYYY-MM-DD');
      }
      return null;
    },
    maxValue() {
      if (this.max) {
        if (this.isHijri) {
          return this.max;
        }
        return moment(this.dateToGregorian(this.max)).format('YYYY-MM-DD');
      }
      return null;
    },
    computedDateFormatted() {
      return this.date ? this.convertToArabicFormat(this.date) : '';
    },
  },
  watch: {
    value() {
      this.formatDate();
    },
  },
  mounted() {
    this.formatDate();
  },
};
</script>

<style lang="scss">
  .t-datePicker {
    .v-input--switch .v-input--selection-controls__input {
      width: 25px;
    }
    .v-input--selection-controls {
      margin-top: 0!important;
      padding-top: 0!important;

      .v-input--switch__track {
        height: 6px;
        width: 27px;
      }
      .v-input--switch__thumb {
        width: 12px;
        height: 12px;
      }
    }
    .v-input__append-inner {
      position: absolute;
      left: 0;
      top: -10px;
    }
  }

  .v-date-picker-title__date {
    font-size: 24px;
  }
</style>
