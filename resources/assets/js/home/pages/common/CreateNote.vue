<template>
  <div class="">

    <button type="button" class="take-note" data-toggle="modal" data-target="#exampleModal" title="Take a note">
      +
    </button>

      <div class="modal fade form-note" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create a note</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                  <label for="">Title</label>
                  <input type="text" class="form-control" placeholder="About the issue"
                    v-model="title"
                    name="title"
                    @focus="clearErrors"
                    v-validate.disabled="'required'">
                  <small class="form-text" :class="errors.has('title') ? 'text-danger' : ''">
                    {{ errors.first('title') }}
                  </small>

                </div>
                <div class="form-group">
                  <select class="form-control" name="type"
                      v-model="type"
                      @focus="clearErrors"
                      v-validate.disabled="'required|numeric'">
                    <option value="1">Only me</option>
                    <option value="0">Public</option>
                  </select>
                  <small class="form-text" :class="errors.has('type') ? 'text-danger' : ''">
                    {{ errors.first('type') }}
                  </small>

                </div>
                <div class="form-group">
                  <label for="">Content</label>
                    <vue-editor v-model="content"
                        name="content"
                        @focus="clearErrors"
                        v-validate.disabled="'required'"/>
                    <small class="form-text" :class="errors.has('content') ? 'text-danger' : ''">
                      {{ errors.first('content') }}
                    </small>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="release">Release</button>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import rf from 'common/requests/RequestFactory.js';
import { VueEditor } from "vue2-editor";

export default {
  name: "CreateNote",
  components: { VueEditor },
  data() {
    return {
      title: '',
      content: '',
      type: 1,
    }
  },
  methods: {
    clearErrors() {
      this.errors.clear();
    },
    release() {
      this.$validator.validate().then(async (result) => {
        if(!result) {
          return;
        }

        const params = {
          title: this.title,
          content: this.content,
          private: this.type,
        };
        rf.getRequest('NoteRequest').create(params).then(res => {
          console.log(res);
        }).catch((error) => {

        });

      });
    },
  }
}
</script>

<style lang="scss" scoped>
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
