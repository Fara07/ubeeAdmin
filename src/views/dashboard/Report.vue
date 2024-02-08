<!-- <template lang="">
  <div>This is a report page</div>
</template>
<script>
export default {};
</script>
<style lang=""></style> -->

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
  async created() {
    await this.loadDictionary();
  },
  methods: {
    loadDictionary() {
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
  },
};
</script> -->

<!-- <template>
  <div>
    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
    >
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    ssssssssssssss
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      fields: ["title", "body"],
      currentPage: 1,
      perPage: 25,
      totalRows: 0,
      apiUrl: "https://jsonplaceholder.typicode.com/posts",
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const params = { _page: this.currentPage, _per_page: this.perPage };
      this.$http
        .get(`${this.apiUrl}`, { params })
        .then((response) => {
          this.items = response.data;
          this.totalRows = response.headers["x-total-count"];
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  watch: {
    currentPage() {
      this.fetchData();
    },
  },
};
</script> -->

<!-- <template>
  <CSmartTable
    clickableRows
    :tableProps="{
      striped: true,
      hover: true,
    }"
    :activePage="2"
    footer
    header
    :items="items"
    :columns="columns"
    columnFilter
    tableFilter
    cleaner
    itemsPerPageSelect
    :itemsPerPage="5"
    columnSorter
    :sorterValue="{ column: 'status', state: 'asc' }"
    pagination
  >
    <template #avatar="{ item }">
      <td>
        <CAvatar :src="$withBase(`/images/avatars/${item.avatar}`)" />
      </td>
    </template>
    <template #status="{ item }">
      <td>
        <CBadge :color="getBadge(item.status)">{{ item.status }}</CBadge>
      </td>
    </template>
    <template #show_details="{ item, index }">
      <td class="py-2">
        <CButton
          color="primary"
          variant="outline"
          square
          size="sm"
          @click="toggleDetails(item, index)"
        >
          {{ Boolean(item._toggled) ? "Hide" : "Show" }}
        </CButton>
      </td>
    </template>
    <template #details="{ item }">
      <CCollapse :visible="this.details.includes(item._id)">
        <CCardBody>
          <h4>
            {{ item.username }}
          </h4>
          <p class="text-muted">User since: {{ item.registered }}</p>
          <CButton size="sm" color="info" class=""> User Settings </CButton>
          <CButton size="sm" color="danger" class="ml-1"> Delete </CButton>
        </CCardBody>
      </CCollapse>
    </template>
  </CSmartTable>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          key: "avatar",
          label: "",
          filter: false,
          sorter: false,
        },
        {
          key: "name",
          _style: { width: "20%" },
        },
        "registered",
        {
          key: "role",
          _style: { width: "20%" },
        },
        {
          key: "status",
          _style: { width: "20%" },
        },
        {
          key: "show_details",
          label: "",
          _style: { width: "1%" },
          filter: false,
          sorter: false,
        },
      ],
      details: [],
      items: [
        {
          id: 1,
          name: "Samppa Nori",
          avatar: "1.jpg",
          registered: "2022/01/01",
          role: "Member",
          status: "Active",
        },
        {
          id: 2,
          name: "Estavan Lykos",
          avatar: "2.jpg",
          registered: "2022/02/07",
          role: "Staff",
          status: "Banned",
        },
        {
          id: 3,
          name: "Chetan Mohamed",
          avatar: "3.jpg",
          registered: "2022/02/07",
          role: "Admin",
          status: "Inactive",
          _selected: true,
        },
        {
          id: 4,
          name: "Derick Maximinus",
          avatar: "4.jpg",
          registered: "2022/03/19",
          role: "Member",
          status: "Pending",
        },
        {
          id: 5,
          name: "Friderik Dávid",
          avatar: "5.jpg",
          registered: "2022/01/21",
          role: "Staff",
          status: "Active",
        },
        {
          id: 6,
          name: "Yiorgos Avraamu",
          avatar: "6.jpg",
          registered: "2022/01/01",
          role: "Member",
          status: "Active",
        },
        {
          id: 7,
          name: "Avram Tarasios",
          avatar: "7.jpg",
          registered: "2022/02/07",
          role: "Staff",
          status: "Banned",
          _selected: true,
        },
        {
          id: 8,
          name: "Quintin Ed",
          avatar: "8.jpg",
          registered: "2022/02/07",
          role: "Admin",
          status: "Inactive",
        },
        {
          id: 9,
          name: "Enéas Kwadwo",
          avatar: "9.jpg",
          registered: "2022/03/19",
          role: "Member",
          status: "Pending",
        },
        {
          id: 10,
          name: "Agapetus Tadeáš",
          avatar: "10.jpg",
          registered: "2022/01/21",
          role: "Staff",
          status: "Active",
        },
        {
          id: 11,
          name: "Carwyn Fachtna",
          avatar: "11.jpg",
          registered: "2022/01/01",
          role: "Member",
          status: "Active",
        },
        {
          id: 12,
          name: "Nehemiah Tatius",
          avatar: "12.jpg",
          registered: "2022/02/07",
          role: "Staff",
          status: "Banned",
          _selected: true,
        },
        {
          id: 13,
          name: "Ebbe Gemariah",
          avatar: "13.jpg",
          registered: "2022/02/07",
          role: "Admin",
          status: "Inactive",
        },
        {
          id: 14,
          name: "Eustorgios Amulius",
          avatar: "14.jpg",
          registered: "2022/03/19",
          role: "Member",
          status: "Pending",
        },
        {
          id: 15,
          name: "Leopold Gáspár",
          avatar: "15.jpg",
          registered: "2022/01/21",
          role: "Staff",
          status: "Active",
        },
      ],
    };
  },
  methods: {
    getBadge(status) {
      switch (status) {
        case "Active":
          return "success";
        case "Inactive":
          return "secondary";
        case "Pending":
          return "warning";
        case "Banned":
          return "danger";
        default:
          "primary";
      }
    },
    toggleDetails(item) {
      if (this.details.includes(item._id)) {
        this.details = this.details.filter((_item) => _item !== item._id);
        return;
      }
      this.details.push(item._id);
    },
  },
};
</script> -->
<!-- <template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

    <button @click="prevPage" :disabled="page === 1">Previous</button>
    <span>Page {{ page }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="page === totalPages">Next</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
      page: 1,
      perPage: 10,
      totalItems: 0,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.perPage);
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/masters", {
          // params: {
          //   page: this.page,
          //   per_page: this.perPage,
          // },
        })
        .then((response) => {
          this.items = response.data;
          this.totalItems = response.headers["x-total-count"];
          console.log(this.items);
        });
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.fetchData();
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
        this.fetchData();
      }
    },
  },
};
</script> -->

<!-- <template>
  <EasyDataTable
    ref="dataTable"
    :headers="headers"
    :items="items"
    :rows-per-page="10"
    hide-footer
  />

  <div class="customize-footer">
    <div class="customize-index">
      Now displaying: {{ currentPageFirstIndex }} ~
      {{ currentPageLastIndex }} of {{ clientItemsLength }}
    </div>

    <div class="customize-buttons">
      <span
        v-for="paginationNumber in maxPaginationNumber"
        class="customize-button"
        :class="{ active: paginationNumber === currentPaginationNumber }"
        @click="updatePage(paginationNumber)"
      >
        {{ paginationNumber }}
      </span>
    </div>

    <div class="customize-pagination">
      <button class="prev-page" @click="prevPage" :disabled="isFirstPage">
        prev page
      </button>
      <button class="next-page" @click="nextPage" :disabled="isLastPage">
        next page
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Header, Item } from "vue3-easy-data-table";
import { computed, ref } from "vue";
import { mockClientItems } from "../mock";
import { usePagination } from "use-vue3-easy-data-table";
import type { UsePaginationReturn } from "use-vue3-easy-data-table";

const dataTable = ref();

const {
  currentPageFirstIndex,
  currentPageLastIndex,
  clientItemsLength,
  maxPaginationNumber,
  currentPaginationNumber,
  isFirstPage,
  isLastPage,
  nextPage,
  prevPage,
  updatePage,
}: UsePaginationReturn = usePagination(dataTable);

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Address", value: "address" },
  { text: "Height", value: "height", sortable: true },
  { text: "Weight", value: "weight", sortable: true },
  { text: "Age", value: "age", sortable: true },
  { text: "Favourite sport", value: "favouriteSport" },
  { text: "Favourite fruits", value: "favouriteFruits" },
];

const items: Item[] = mockClientItems(200);
</script> -->

<template>
  <CSmartTable
    clickableRows
    :tableProps="{
      striped: true,
      hover: true,
    }"
    :activePage="2"
    footer
    header
    :items="items"
    :columns="columns"
    columnFilter
    tableFilter
    cleaner
    itemsPerPageSelect
    :itemsPerPage="5"
    columnSorter
    :sorterValue="{ column: 'status', state: 'asc' }"
    pagination
  >
    <template #avatar="{ item }">
      <td>
        <CAvatar :src="$withBase(`/images/avatars/${item.avatar}`)" />
      </td>
    </template>
    <template #status="{ item }">
      <td>
        <CBadge :color="getBadge(item.status)">{{ item.status }}</CBadge>
      </td>
    </template>
    <template #show_details="{ item, index }">
      <td class="py-2">
        <CButton
          color="primary"
          variant="outline"
          square
          size="sm"
          @click="toggleDetails(item, index)"
        >
          {{ Boolean(item._toggled) ? "Hide" : "Show" }}
        </CButton>
      </td>
    </template>
    <template #details="{ item }">
      <CCollapse :visible="this.details.includes(item._id)">
        <CCardBody>
          <h4>
            {{ item.username }}
          </h4>
          <p class="text-muted">User since: {{ item.registered }}</p>
          <CButton size="sm" color="info" class=""> User Settings </CButton>
          <CButton size="sm" color="danger" class="ml-1"> Delete </CButton>
        </CCardBody>
      </CCollapse>
    </template>
  </CSmartTable>
</template>
<script>
import { CAlert } from "@coreui/vue";
export default {
  data() {
    return {
      columns: [
        {
          key: "avatar",
          label: "",
          filter: false,
          sorter: false,
        },
        {
          key: "name",
          _style: { width: "20%" },
        },
        "registered",
        {
          key: "role",
          _style: { width: "20%" },
        },
        {
          key: "status",
          _style: { width: "20%" },
        },
        {
          key: "show_details",
          label: "",
          _style: { width: "1%" },
          filter: false,
          sorter: false,
        },
      ],
      details: [],
      items: [
        {
          id: 1,
          name: "Samppa Nori",
          avatar: "1.jpg",
          registered: "2022/01/01",
          role: "Member",
          status: "Active",
        },
        {
          id: 2,
          name: "Estavan Lykos",
          avatar: "2.jpg",
          registered: "2022/02/07",
          role: "Staff",
          status: "Banned",
        },
        {
          id: 3,
          name: "Chetan Mohamed",
          avatar: "3.jpg",
          registered: "2022/02/07",
          role: "Admin",
          status: "Inactive",
          _selected: true,
        },
        {
          id: 4,
          name: "Derick Maximinus",
          avatar: "4.jpg",
          registered: "2022/03/19",
          role: "Member",
          status: "Pending",
        },
        {
          id: 5,
          name: "Friderik Dávid",
          avatar: "5.jpg",
          registered: "2022/01/21",
          role: "Staff",
          status: "Active",
        },
        {
          id: 6,
          name: "Yiorgos Avraamu",
          avatar: "6.jpg",
          registered: "2022/01/01",
          role: "Member",
          status: "Active",
        },
        {
          id: 7,
          name: "Avram Tarasios",
          avatar: "7.jpg",
          registered: "2022/02/07",
          role: "Staff",
          status: "Banned",
          _selected: true,
        },
        {
          id: 8,
          name: "Quintin Ed",
          avatar: "8.jpg",
          registered: "2022/02/07",
          role: "Admin",
          status: "Inactive",
        },
        {
          id: 9,
          name: "Enéas Kwadwo",
          avatar: "9.jpg",
          registered: "2022/03/19",
          role: "Member",
          status: "Pending",
        },
        {
          id: 10,
          name: "Agapetus Tadeáš",
          avatar: "10.jpg",
          registered: "2022/01/21",
          role: "Staff",
          status: "Active",
        },
        {
          id: 11,
          name: "Carwyn Fachtna",
          avatar: "11.jpg",
          registered: "2022/01/01",
          role: "Member",
          status: "Active",
        },
        {
          id: 12,
          name: "Nehemiah Tatius",
          avatar: "12.jpg",
          registered: "2022/02/07",
          role: "Staff",
          status: "Banned",
          _selected: true,
        },
        {
          id: 13,
          name: "Ebbe Gemariah",
          avatar: "13.jpg",
          registered: "2022/02/07",
          role: "Admin",
          status: "Inactive",
        },
        {
          id: 14,
          name: "Eustorgios Amulius",
          avatar: "14.jpg",
          registered: "2022/03/19",
          role: "Member",
          status: "Pending",
        },
        {
          id: 15,
          name: "Leopold Gáspár",
          avatar: "15.jpg",
          registered: "2022/01/21",
          role: "Staff",
          status: "Active",
        },
      ],
    };
  },
  methods: {
    getBadge(status) {
      switch (status) {
        case "Active":
          return "success";
        case "Inactive":
          return "secondary";
        case "Pending":
          return "warning";
        case "Banned":
          return "danger";
        default:
          "primary";
      }
    },
    toggleDetails(item) {
      if (this.details.includes(item._id)) {
        this.details = this.details.filter((_item) => _item !== item._id);
        return;
      }
      this.details.push(item._id);
    },
  },
};
</script>
