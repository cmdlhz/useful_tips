<template>
  <v-container>
    <v-flex xs12 sm6 md3>
      <v-btn v-on:click="isHidden = !isHidden">Show a chart</v-btn>
      <pie-chart 
        v-if="isHidden" 
        :data="chartData" 
        :options="options">
      </pie-chart>
    </v-flex>
  </v-container>
</template>

<script>
import PieChart from "../pieChart.js";
import ChartJSPluginDatalabels from "chartjs-plugin-datalabels";

export default {
  name: "App",
  components: {
    PieChart
  },
  data() {
    return {
      isHidden: false,
      chartData: {
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      },
      options: {
        plugins: {
          datalabels: {
            color: "white",
            textAlign: "center",
            formatter: function (value) {
              return Math.round(value) + "%";
            },
            font: {
              weight: "bold",
              size: 40
            }
          }
        }
      }
    };
  }
};
</script>