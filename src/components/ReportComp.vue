<script setup>
import { ref } from "vue";
const msg = ref("");
const content = ref("")
const submit = () => {
  if (content.value != ""){
    msg.value="success"
  }
};
</script>
<template>
  <div class="report-page">
    <h1>Report a problem</h1>
    <form>
      <div class="form-group">
        <label for="exampleFormControlTextarea1" style="margin-bottom: 10px"
          >Describe you problem</label
        >
        <textarea
          v-model.trim="content"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div
        style="margin-top: 10px"
        class="alert alert-primary"
        role="alert"
        v-if="msg"
      >
        Report Sent..!
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        style="margin-top: 20px"
        @click.prevent="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
.report-page {
  margin: 20px;
}
</style>
