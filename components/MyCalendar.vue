<template>
  <div style="margin-top: 20px">
    <h2>日历 Calendar</h2>
    <div class="wrapper-box">
      <NCalendar
        v-model:value="value"
        #="{ year, month, date }"
        :is-date-disabled="isDateDisabled"
        @update:value="handleUpdateValue">
        {{ year }}-{{ month }}-{{ date }}
      </NCalendar>
    </div>
  </div>
</template>

<script lang="ts">
import { isYesterday, addDays } from "date-fns/esm";
export default defineComponent({
  setup() {
    const message = useMessage();
    const year = 2023;
    const month = 1;
    const date = 1;
    return {
      value: ref(addDays(Date.now(), 1).valueOf()),
      handleUpdateValue(
        _: number,
        { year, month, date }: { year: number; month: number; date: number }
      ) {
        message.success(`${year}-${month}-${date}`);
      },
      isDateDisabled(timestamp: number) {
        if (isYesterday(timestamp)) {
          return true;
        }
        return false;
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.wrapper-box {
  width: 100%;
}
</style>
