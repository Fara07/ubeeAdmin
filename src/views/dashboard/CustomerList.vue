<template>
  <div class="p-4">
    <div
      class="d-flex align-items-center px-2 py-2"
      style="background-color: #f6f7f9"
    >
      <h3 style="color: #212529">Список клиентов</h3>
    </div>

    <v-data-table-server
      v-model:page="appointmentResponse.pageNumber"
      :items="appointmentResponse.data"
      v-model:items-per-page="appointmentResponse.pageSize"
      :headers="headers"
      :items-length="appointmentResponse.totalRecords"
      :loading="appointmentResponse.loading"
      :search="appointmentResponse.search"
      @update:pagination="loadAppointments"
    >
      <template v-slot:bottom>
        <div class="text-center">
          <v-pagination
            v-model="appointmentResponse.pageNumber"
            :length="appointmentResponse.totalPages"
            :total-visible="4"
            @update:modelValue="paginationClick"
          ></v-pagination>
        </div>
      </template>
    </v-data-table-server>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appointmentResponse: {
        pageNumber: 1,
        pageSize: 5,
        firstPage: null,
        lastPage: null,
        totalPages: null,
        totalRecords: null,
        nextPage: null,
        previousPage: null,
        data: [],
        loading: false,
        search: null,
      },
      headers: [
        {
          title: "Id",
          align: "start",
          sortable: false,
          key: "id",
          width: 2,
        },
        {
          title: "Клиент",
          align: "start",
          key: "customerName",
          width: 200,
        },
        {
          title: "Номер телефона",
          align: "start",
          key: "phoneNumber",
          width: 200,
        },
        {
          title: "Дата создания",
          align: "start",
          key: "createdAt",
          width: 200,
        },
        {
          title: "Дата обновления",
          align: "start",
          key: "updatedAt",
          width: 200,
        },
      ],
    };
  },

  mounted() {
    this.loadAppointments();
  },
  watch: {
    // Note: only simple paths. Expressions are not supported.
    "appointmentResponse.pageNumber"(newValue) {
      this.loadAppointments();
    },
    "appointmentResponse.pageSize"(newValue) {
      this.loadAppointments();
    },
  },
  methods: {
    async paginationClick(page) {
      this.appointmentResponse.pageNumber = page;
    },
    async loadAppointments() {
      try {
        this.appointmentResponse.loading = true;
        const response = await this.$axios.get(
          `Administrator/CustomerGetAllAsync?pageNumber=${this.appointmentResponse.pageNumber}&pageSize=${this.appointmentResponse.pageSize}`
        );
        // Assuming your response has a property `data` that holds the items array
        this.appointmentResponse = response.data;
        this.appointmentResponse.data = response.data.data;
        this.appointmentResponse.pageNumber = response.data.pageNumber;
        this.appointmentResponse.pageSize = response.data.pageSize;
        this.appointmentResponse.loading = false;
      } catch (error) {
        console.error("Error fetching data:", error);
        this.appointmentResponse.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
