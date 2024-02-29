<template>
  <div>
    <div class="btn-group mt-5 px-4" role="group" style="width: 495px">
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="today()"
        :class="{ active: condition === 'TODAY' }"
      >
        Сегодня
      </button>
      <button
        type="button"
        class="btn btn btn-outline-primary"
        @click="week()"
        :class="{ active: condition === 'THIS_WEEK' }"
      >
        Неделя
      </button>
      <button
        type="button"
        class="btn btn btn-outline-primary"
        @click="month()"
        :class="{ active: condition === 'THIS_MONTH' }"
      >
        Месяц
      </button>
      <button
        type="button"
        class="btn btn btn-outline-primary"
        @click="all()"
        :class="{ active: condition === 'ALL' }"
      >
        Всё время
      </button>
    </div>

    <!-- <div
      class="d-flex justify-content-between align-items-center gap-3 mt-4 px-4"
    >
      <div class="card col-md-4 mb-3">
        <div
          class="card-body d-flex justify-content-between align-items-center p-3"
        >
          <div>
            <h3 class="card-title">Количество мастеров</h3>
            <p class="card-text">{{ masterCount }}</p>
          </div>

          <div
            class="card-img d-flex justify-content-center align-items-center"
          >
            <img src="@/assets/icons/simple-line-icons_people.png" alt="" />
          </div>
        </div>

        <div
          class="card-footer d-flex justify-content-start align-items-center p-3"
        >
          <p class="font-weight-normal" style="color: #2356d7">Все значение</p>
        </div>
      </div>
      <div class="card col-md-4 mb-3">
        <div
          class="card-body d-flex justify-content-between align-items-center p-3"
        >
          <div>
            <h3 class="card-title">Количество клиентов</h3>
            <p class="card-text">{{ customerCount }}</p>
          </div>

          <div
            class="card-img d-flex justify-content-center align-items-center"
          >
            <img src="@/assets/icons/Icon $.png" alt="" />
          </div>
        </div>

        <div
          class="card-footer d-flex justify-content-start align-items-center p-3"
        >
          <p class="font-weight-normal" style="color: #2356d7">Все значение</p>
        </div>
      </div>
      <div class="card col-md-4 mb-3">
        <div
          class="card-body d-flex justify-content-between align-items-center p-3"
        >
          <div>
            <h3 class="card-title">Количество записей</h3>
            <p class="card-text">{{ appointmentCount }}</p>
          </div>

          <div
            class="card-img d-flex justify-content-center align-items-center"
          >
            <img src="@/assets/icons/Icon checked.png" alt="" />
          </div>
        </div>

        <div
          class="card-footer d-flex justify-content-start align-items-center p-3"
        >
          <p class="font-weight-normal" style="color: #2356d7">Все значение</p>
        </div>
      </div>
    </div> -->

    <v-row class="my-4 px-4">
      <v-col cols="auto">
        <v-card class="mx-auto" min-width="344">
          <v-card-item
            class="d-flex justify-content-between align-items-center px-3"
            append-icon="mdi-account"
          >
            <div>
              <div class="text-h6 mb-1">{{ masterCount }}</div>
              <div class="text-caption">Количество мастеров</div>
            </div>
          </v-card-item>

          <v-card-actions
            class="d-flex justify-content-start align-items-center px-3"
            style="color: #2356d7; background: #f6f7f9"
          >
            <div><p style="color: #2356d7">Все значение</p></div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" min-width="344">
          <v-card-item
            class="d-flex justify-content-between align-items-center"
            append-icon="mdi-account-multiple"
          >
            <div>
              <div class="text-h6 mb-1">{{ customerCount }}</div>
              <div class="text-caption">Количество клиентов</div>
            </div>
          </v-card-item>

          <v-card-actions
            class="d-flex justify-content-start align-items-center px-3"
            style="color: #2356d7; background: #f6f7f9"
          >
            <div><p style="color: #2356d7">Все значение</p></div>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card class="mx-auto" min-width="344">
          <v-card-item
            class="d-flex justify-content-between align-items-center"
            append-icon="mdi-checkbox-marked-outline"
          >
            <div>
              <div class="text-h6 mb-1">{{ appointmentCount }}</div>
              <div class="text-caption">Количество записей</div>
            </div>
          </v-card-item>

          <v-card-actions
            class="d-flex justify-content-start align-items-center px-3"
            style="color: #2356d7; background: #f6f7f9"
          >
            <div><p style="color: #2356d7">Все значение</p></div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      masterCount: 0,
      customerCount: 0,
      appointmentCount: 0,
      condition: "TODAY",
    };
  },

  mounted() {
    this.condition = localStorage.getItem("CONDITION");
    this.loadCounts();
  },
  watch: {
    // whenever condition changes, this function will run
    condition(newCondition) {
      localStorage.setItem("CONDITION", newCondition);
      this.loadCounts();
      this.updateActiveButtons();
    },
  },

  methods: {
    today() {
      this.condition = "TODAY";
    },
    week() {
      this.condition = "THIS_WEEK";
    },
    month() {
      this.condition = "THIS_MONTH";
    },
    all() {
      this.condition = "ALL";
    },

    loadCounts() {
      this.$axios
        .get(`Administrator/MasterCount/${this.condition}`)
        .then((response) => {
          this.masterCount = response.data.value;
        })
        .catch(() => {
          this.masterCount = 0;
        });

      this.$axios
        .get(`Administrator/CustomerCount/${this.condition}`)
        .then((response) => {
          this.customerCount = response.data.value;
        })
        .catch(() => {
          this.customerCount = 0;
        });

      this.$axios
        .get(`Administrator/AppointmentCount/${this.condition}`)
        .then((response) => {
          this.appointmentCount = response.data.value;
        })
        .catch(() => {
          this.appointmentCount = 0;
        });
    },
    updateActiveButtons() {
      const buttons = document.querySelectorAll(".left-btn");
      buttons.forEach((button) => {
        if (button.textContent.trim() === this.condition) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    },
  },
};
</script>

<style scoped></style>
