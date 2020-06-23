import { mapState } from "vuex";

export const message = {
  computed: {
    ...mapState({
      msg: state => state.user.msg,
      type: state => state.user.type
    }),
  }
}