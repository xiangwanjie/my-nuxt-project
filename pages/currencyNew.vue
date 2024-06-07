<template>
  <div>
    <div class="cur-list-box">
      <div class="item-box" v-for="(value, name) in currency" :key="name">
        <div class="left">
          <img
            class="icon"
            :src="'/icons/' + name + '.png'"
            alt="" />
          <span class="name">{{ name }}</span>
        </div>
        <span class="price-unit">{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currency: any = {
  EGP: 18,
  EGP4String: "18",
  BTC: 0.00105531,
  BTC4String: "0.00105531",
  ETH: 0.01972427367727148,
  ETH4String: "0.01972427367727148",
  HKD: 583.1569,
  HKD4String: "583.1569",
  USD: 74.6685,
  USD4String: "74.6685",
  CNY: 541.7648,
  CNY4String: "541.7648",
  MOP: 600.6516,
  MOP4String: "600.6516",
  EUR: 68.6699,
  EUR4String: "68.6699",
  GBP: 58.444,
  GBP4String: "58.444",
  JPY: 11662.6804,
  JPY4String: "11662.6804",
  AUD: 112.2002,
  AUD4String: "112.2002",
};

// 删除以 4String 结尾的键值对
Object.keys(currency).forEach((key) => {
  if (key.endsWith("4String")) delete currency[key];
});
</script>

<style scoped lang="scss">
.cur-list-box {
  margin-top: 30px;
  .item-box {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      .name {
        font-size: 14px;
        font-weight: bold;
      }
    }
    .price-unit {
      font-size: 14px;
      font-weight: bold;
    }
  }
  .item-box:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
}
</style>
