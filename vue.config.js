module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: 
        `
          @import "@/assets/scss/common.scss";
          @import "@/assets/scss/_base.scss";
          @import "@/assets/scss/_extend.scss";
          @import "@/assets/scss/_mixin.scss";
        `
      }
    }
  }
}