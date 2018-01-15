<template>
  <form ref="validation">
    <slot></slot>
  </form>
</template>

<script>
  if (process.browser) {
    require('jquery-validation')
    require('jquery-validation/dist/additional-methods.js')
  }

  export default {
    props: {
      options: {
        default: function () {
          return {}
        }
      }
    },
    methods: {
      valid: function () {
        var self = this
        return $(self.$refs.validation).valid()
      }
    },
    mounted () {
      let self = this

      $(self.$refs.validation).validate({
        rules: {
          name: {
            required: true
          },
          phone: {
            required: true
          }
        },
        messages: {
          name: {
            required: 'Bạn cần nhập tên'
          },
          phone: {
            required: 'Bạn cần nhập nghề nghiệp'
          }
        }
      })
    }
  }
</script>
