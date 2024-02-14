<template>
  <div class="p-8">
    <div class="h-[64px] p-2">ЗАГОЛОВОК ТАБЛИЦЫ</div>

    <!-- <v-spacer></v-spacer> -->
    <!-- search panel -------------------------------------------------------->

    <!-- Table -->

    <v-responsive>
      <div class="flex justify-end py-4">
        <div>
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            class="w-[240px]"
            v-model="search"
            density="compact"
            label="Search"
            single-line
            variant="outlined"
            flat
            hide-details
          ></v-text-field>
        </div>
      </div>

      <v-data-table
        class="p-2"
        v-model:search="search"
        :items="items"
        :headers="headers"
        density="compact"
      >
        <!-- Header -------------------------------------------------------------->
        <!-- <template v-slot:header.id>
      <div>Id</div>
    </template> -->

        <!-- Body table --------------------------------------------------------->

        <template v-slot:item.id="{ item }">
          <div>{{ item.id }}</div>
          <div>{{ item.idOrder }}</div>
        </template>

        <template v-slot:item.name="{ item }">
          <div class="flex items-center">
            <div>
              <v-img
                :src="item.avatar"
                height="32"
                width="32"
                style="border-radius: 50%"
                cover
              ></v-img>
            </div>
            <div class="px-2">
              <div>{{ item.name }}</div>
              <div>{{ item.role }}</div>
            </div>
          </div>
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

        <!-- <template v-slot:item.id="{ item }">
      <div>ID</div>
    </template> -->
        <!-- <template v-slot:header.name>
      <div class="uppercase">Рейтинг</div>
    </template>
    <template v-slot:header.avatar>
      <div class="uppercase">ИМЯ</div>
    </template> -->

        <!-- <template v-slot:item.avatar="{ item }">
      <v-card class="my-2" elevation="4" rounded>
        <v-img :src="item.avatar" height="64" cover></v-img>
      </v-card>
    </template>

    <template v-slot:item.name="{ item }">
      <div></div>
    </template>

    

    <template v-slot:item.stock="{ item }">
      <div class="text-end">
        <v-chip
          :color="item.stock ? 'green' : 'red'"
          :text="item.stock ? 'In stock' : 'Out of stock'"
          class="text-uppercase"
          label
          size="small"
        ></v-chip>
      </div>
    </template> -->
        <!-- <template v-slot:default>
      <div>ddddd</div>
    </template> -->
      </v-data-table>
    </v-responsive>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: "",
      items: [],
      headers: [
        {
          key: "id",
          // sortable: false,
          title: "ID",
        },
        { key: "name", title: "Имя" },
        { key: "rate", title: "Рейтинг" },
        { key: "phone", title: "Данные" },
        { key: "adress", title: "Адрес" },
        { key: "experience", title: "Опыт работы" },
        { key: "registrationDate", title: "Опыт работы" },
        { key: "updateDate", title: "Опыт работы" },
      ],
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      axios
        .get("http://localhost:3000/masters")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error("Error fetching items:", error);
        });
    },
  },
};
</script>
