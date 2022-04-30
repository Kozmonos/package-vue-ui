<template>
  <div class="three-dots" :class="theme + '-theme ' + variant + '-fill'">
    <b-dropdown variant="link" v-bind="$attrs" no-caret>
      <template #button-content>
        <ThreeDot :fill="theme" />
      </template>
      <b-dropdown-item
        v-for="(item, index) in items"
        @click="clicked(item)"
        :key="index + '-dropdown'"
        >{{ item }}</b-dropdown-item
      >
    </b-dropdown>
  </div>
</template>
<script>
import ThreeDot from "./ThreeDot.vue";
import { BDropdown, BDropdownItem } from "bootstrap-vue";
export default {
  components: {
    BDropdown,
    BDropdownItem,
    ThreeDot,
  },
  props: {
    theme: {
      type: String,
      default: "light",
    },
    variant: {
      type: String,
      default: "primary",
    },
    items: {
      type: Array,
      required: true,
    },
    position: {
      type: String,
      default: "right",
    },
  },
  methods: {
    clicked(item) {
      this.$emit("clicked", item);
      this.$emit(item + "-clicked");
    },
  },
};
</script>
<style>
.btn:focus,
.btn.focus {
  box-shadow: 0 0 0 0;
}
.light-theme .dropdown-item:hover,
.light-theme .dropdown-item:active {
  color: white;
}
</style>