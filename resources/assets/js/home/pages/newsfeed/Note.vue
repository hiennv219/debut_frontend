<template>
  <div class="posts">
    <div class="post" v-for="note in notes">
      <h3 class="title">{{ note.title }}</h3>
      <span class="text-muted time">{{ note.updated_at }}</span>
      <div v-html="note.content"></div>
    </div>

  </div>
</template>

<script>
import rf from 'common/requests/RequestFactory.js';

export default {
  name: "ListNote",
  data() {
    return {
      notes: {},
    }
  },
  methods: {
    getNotes() {
      rf.getRequest('NoteRequest').getLists().then(res => {
        this.notes = res.data;
      }).catch((error) => {

      });
    },
  },
  mounted() {
    this.getNotes();
  }
}
</script>

<style lang="scss" scoped>
  .posts {
    padding: 50px;
    .post{
      background: #fff;
      border-radius: 8px;
      border: 1px solid #cdcdcd;
      width: 90%;
      margin-bottom: 50px;
      padding: 1rem 15px;

      .title{
        font-size: 1.25rem;
        margin-bottom: 0.7rem;
      }
      .time{
        font-size: 0.9rem;
      }

      p{
        font-size: 1.1rem;
      }
    }
    .post:nth-child(even) {
      float: right;
    }
    .post:nth-child(odd) {
      float: left;
    }
  }

  .take-note{
    background-color: #23c99d;
    border-color: #23c99d;
    font-size: 13px;
    border-radius: 100%;
    height: 45px;
    width: 45px;
    position: fixed;
    top: 120px;
    left: 20px;
    color: #fff;
    font-weight: bold;

    &:hover{
      background-color: #16a3fe;
      border-color: #16a3fe;
    }
  }
  .form-note{
    .modal-body{
      border-radius: 0px !important;
    }
  }
</style>
