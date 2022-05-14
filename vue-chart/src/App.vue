<template>
  <div>
    <canvas id="myChart" ref="myChart"></canvas>
  </div>
</template>
<script lang="ts">
// import Chart from "chart.js/auto";
import Vue from "vue";

export default Vue.extend({
  mounted() {
    // const canvasElement = document.getElementById(
    //   "myChart"
    // ) as HTMLCanvasElement;
    const canvasElement = this.$refs.myChart;
    const ctx = canvasElement.getContext("2d");
    if (ctx === null) {
      return;
    }

    const myChart = new this.$_Chart(10, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },
      options: {},
    });
  },
});
</script>
<style scoped></style>
