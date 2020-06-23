<template>
  <v-dialog
    v-model="dialogChangePassword"
    width="90%"
  >
    <template v-slot:activator="{ on }">
      <v-btn large outlined v-on="on" width="100%" class="primary" dark>Change Password</v-btn>
    </template>
    <v-sheet class="pa-4">
      <div class="container">
        <span class="font-weight-medium headline">Change Password</span>
        <div class="py-4"></div>
        <v-form
          ref="form"
          lazy-validation
        >
          <v-text-field
            label="Current Password"
            outlined
            type="password"
            v-model="current_password"
            :rules="current_passwordRule"
          ></v-text-field>
          <v-text-field
            label="New Password"
            outlined
            type="password"
            v-model="new_password"
            :rules="new_passwordRule"
          ></v-text-field>
          <v-text-field
            label="Confirm New Password"
            outlined
            type="password"
            v-model="new_password1"
            :rules="new_passwordMatch"
          ></v-text-field>
          <v-btn color="#415593" dark large style="width: 100%" :loading="loading" @click="handleChangePassword()">
            <span>Change Now</span>
          </v-btn>
        </v-form>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script>
import { message } from "~/utils/mixins/message.js";
import { validateChangePass } from '~/utils/mixins/validateChangePass.js';

export default {
  mixins: [message, validateChangePass],
  data() {
    return {
      current_password: '',
      new_password: '',
      new_password1: '',

      loading: false,
      dialogChangePassword: false
    }
  },

  methods: {
    handleChangePassword() {
      if(this.$refs.form.validate()) {
        this.loading = true;
        this.$store.dispatch('user/handleChangePassword', {
          current_password: this.current_password,
          new_password: this.new_password
        })
        .then(() => {
          if(this.type === 'error'){ 
            this.$toast.error(this.msg);
          } else {
            this.$toast.success(this.msg);
          }
          this.dialogChangePassword = false;
          this.loading = false;
          this.current_password= '',
          this.new_password= '',
          this.new_password1= ''
        })
      }
    },
  }
}
</script>