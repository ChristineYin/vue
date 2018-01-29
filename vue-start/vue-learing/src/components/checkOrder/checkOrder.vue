<template>
  <div>
    <my-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支持状态！
      <div class="button" @on-close="checkStatus" @click="checkStatus">支付成功</div>
      <div class="button" @on-close="checkStatus" @click="checkStatus">支付失败</div>
    </my-dialog>
    <my-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">购买成功！</my-dialog>
    <my-dialog :is-show="isShowFailDialog" @on-close="toOrderList">购买失败！</my-dialog>
  </div>
</template>

<script>
import MyDialog from 'components/base/dialog'

export default {
  components: {
    MyDialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [String, Number]
    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      this.$http.post('/api/createOrder', {
        orderId: this.orderId
      })
      .then((res) => {
        this.isShowSuccessDialog = true
        this.$emit('on-close-check-dialog')
      }, (e) => {
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
    },
    toOrderList () {
      this.$router.push({path: '/orderList'})
    }
  }
}
</script>