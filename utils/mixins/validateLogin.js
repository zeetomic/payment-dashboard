export const validateLogin = {
  data() {
    return {
      valid: true,
      emailRule: [
        () => !!this.email || 'Email is required',
      ],
      passwordRule: [
        () => !!this.password || 'Password is required',
      ],
    }
  }
}