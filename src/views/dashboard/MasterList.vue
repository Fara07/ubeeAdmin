<template>
  <div class="p-4">
    <div
      class="d-flex align-items-center px-2 py-2"
      style="background-color: #f6f7f9"
    >
      <h3 style="color: #212529">Список мастеров</h3>
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
      <template v-slot:item.id="{ item, index }">
        {{ index + 1 }}
      </template>

      <template v-slot:item.avatarUri="{ item }">
        <img
          :src="
            item.avatarUri ||
            'https://as1.ftcdn.net/v2/jpg/01/50/40/40/1000_F_150404044_dXI2utvn6Y6PivTbWk9lbIDR0UhM4A5Y.jpg'
          "
          alt="Avatar"
          width="50"
          height="50"
          style="border-radius: 50%"
          cover
        />
      </template>

      <template v-slot:item.rate="{ item }">
        <v-rating
          :model-value="item.rate"
          color="orange-darken-2"
          density="compact"
          size="small"
          readonly
          half-increments
        ></v-rating>
      </template>

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
          key: "id",
          width: 2,
          align: "start",
        },
        {
          title: "Имя",
          align: "start",
          key: "masterName",
          width: 200,
        },
        {
          title: "Адресс",
          align: "start",
          key: "address",
        },

        {
          title: "Аватар",
          align: "start",
          key: "avatarUri",
          width: 70,
        },
        {
          title: "Номер телефона",
          align: "start",
          sortable: false,
          key: "phoneNumber",
          width: 150,
        },
        {
          title: "Электронная почта",
          align: "start",
          sortable: false,
          key: "email",
          width: 100,
        },
        {
          title: "Рейтинг",
          align: "start",
          sortable: false,
          key: "rate",
          width: 100,
        },
        {
          title: "Опыт Года",
          align: "start",
          key: "experienceStartYear",
          width: 100,
        },
        {
          title: "Дата создания",
          align: "start",
          key: "createdAt",
          width: 150,
        },
        {
          title: "Дата обновления",
          align: "start",
          key: "updatedAt",
          width: 150,
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
          `Administrator/MasterGetAllAsync?pageNumber=${this.appointmentResponse.pageNumber}&pageSize=${this.appointmentResponse.pageSize}`
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
