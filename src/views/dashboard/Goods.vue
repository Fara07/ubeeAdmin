<!-- <template>
  <div>
    <div class="btn-group">
      <button @click="getDate('today')" class="btn">TODAY</button>
      <button @click="getDate('week')" class="btn">WEEK</button>
      <button @click="getDate('month')" class="btn">MONTH</button>
      <button @click="getDate('all')" class="btn">ALL</button>
    </div>
    <div><input v-model="data.date" /></div>
  </div>
</template>

<script>
export default {
  data() {
    return { data: { date: "" } };
  },
  methods: {
    getDate(period) {
      const now = new Date();
      let startDate;
      if (period === "today") {
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      } else if (period === "week") {
        startDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - now.getDay()
        );
      } else if (period === "month") {
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      } else if (period === "all") {
        startDate = new Date(2000, 0, 1);
      }
      const endDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );
      this.data.date = `${startDate.toDateString()} - ${endDate.toDateString()}`;
    },
  },

  async loadDictionary() {
    axios.get("http://localhost:3000/clients").then((response) => {
      this.clients = response.data;
    });

    axios.get("http://localhost:3000/masters").then((response) => {
      this.masters = response.data;
    });
    axios
      .get("http://localhost:3000/appointments")
      .then((response) => {
        this.appointments = response.data;
      })
      .catch((error) => {
        alert("Error fetching data: " + error);
      });
  },
};
</script> -->
<!-- 

<template>
  <div>
    <div class="btn-group">
      <button @click="getDate('today')" class="btn">TODAY</button>
      <button @click="getDate('week')" class="btn">WEEK</button>
      <button @click="getDate('month')" class="btn">MONTH</button>
      <button @click="getDate('all')" class="btn">ALL</button>
    </div>
    <div><input v-model="data.date" /></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { 
      data: { 
        date: "" 
      },
      clients: [],
      masters: [],
      appointments: []
    };
  },
  methods: {
    getDate(period) {
      const now = new Date();
      let startDate;
      if (period === "today") {
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      } else if (period === "week") {
        startDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - now.getDay()
        );
      } else if (period === "month") {
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      } else if (period === "all") {
        startDate = new Date(2000, 0, 1);
      }
      const endDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );
      this.data.date = `${startDate.toDateString()} - ${endDate.toDateString()}`;
    },
    async loadDictionary() {
      try {
        const clientsResponse = await axios.get("http://localhost:3000/clients");
        this.clients = clientsResponse.data;

        const mastersResponse = await axios.get("http://localhost:3000/masters");
        this.masters = mastersResponse.data;

        const appointmentsResponse = await axios.get("http://localhost:3000/appointments");
        this.appointments = appointmentsResponse.data;
      } catch (error) {
        alert("Error fetching data: " + error);
      }
    }
  },
  mounted() {
    this.loadDictionary();
  }
};
</script> -->

<template>
  <div>
    <div class="btn-group">
      <button @click="getDate('today')" class="btn">TODAY</button>
      <button @click="getDate('week')" class="btn">WEEK</button>
      <button @click="getDate('month')" class="btn">MONTH</button>
      <button @click="getDate('all')" class="btn">ALL</button>
    </div>
    <div><input v-model="data.date" /></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: {
        date: "",
      },
      clients: [],
      masters: [],
      appointments: [],
    };
  },
  methods: {
    async getDate(period) {
      try {
        const clientsResponse = await axios.get(
          "http://localhost:3000/clients"
        );
        this.clients = clientsResponse.data;

        const mastersResponse = await axios.get(
          "http://localhost:3000/masters"
        );
        this.masters = mastersResponse.data;

        const appointmentsResponse = await axios.get(
          "http://localhost:3000/appointments"
        );
        this.appointments = appointmentsResponse.data;

        const now = new Date();
        let startDate;
        if (period === "today") {
          startDate = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
          );
        } else if (period === "week") {
          startDate = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() - now.getDay()
          );
        } else if (period === "month") {
          startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        } else if (period === "all") {
          startDate = new Date(2000, 0, 1);
        }
        const endDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        );
        this.data.date = `${startDate.toDateString()} - ${endDate.toDateString()}`;
      } catch (error) {
        alert("Error fetching data: " + error);
      }
    },
    async loadData() {
      try {
        const clientsResponse = await axios.get(
          "http://localhost:3000/clients"
        );
        this.clients = clientsResponse.data;

        const mastersResponse = await axios.get(
          "http://localhost:3000/masters"
        );
        this.masters = mastersResponse.data;

        const appointmentsResponse = await axios.get(
          "http://localhost:3000/appointments"
        );
        this.appointments = appointmentsResponse.data;
      } catch (error) {
        alert("Error fetching data: " + error);
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
