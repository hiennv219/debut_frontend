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
                  <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
                  <small class="form-text text-muted">Thanks for your share.</small>
                </div>
                <div class="form-group">
                  <label for="">Content</label>
                  <textarea class="form-control" placeholder="Take a note..." rows="15"></textarea>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Realese</button>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
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
