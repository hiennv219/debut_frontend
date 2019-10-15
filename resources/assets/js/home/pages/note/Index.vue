<template>
  <div class="">
    <input type="text" list="titles" name="myBrowser" class="form-control search"
            placeholder="Find a something.."
            v-model="keywords" @keyup.enter="getNotes"/>
    <datalist id="titles">
      <option v-for="note in notes">{{ note.title }}</option>
    </datalist>

    <div class="posts">
      <div class="post" v-for="note in notes">
        <a class="title" :href="'/notes/' + note.id">{{ note.title }}</a>
        <p class="text-muted time">{{ note.updated_at }}</p>
        <div class="wrap-content" v-html="note.content"></div>
      </div>

    </div>
  </div>
</template>

<script>
import rf from 'common/requests/RequestFactory.js';

export default {
  name: "ListNote",
  props: ['type'],
  data() {
    return {
      notes: {},
      keywords: "",
    }
  },
  methods: {
    getNotes() {
      var params = {
        keywords: this.keywords
      }
      if(this.type) {
        params = { ...params, ...{ type: this.type} };
      }
      rf.getRequest('NoteRequest').getLists(params).then(res => {
        this.notes = res.data;
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
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
      margin-bottom: 20px;
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

  .wrap-content{
    display: inline-block;
    width: 100%;
    max-height: 200px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
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
  .search{
    height: 50px;
    width: 90%;
    border-radius: 25px;
    padding-left: 30px;
    margin: 10px auto;
    margin-bottom: 50px;
  }
</style>
