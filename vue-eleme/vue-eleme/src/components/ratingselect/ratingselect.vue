<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="selectByType(2,$event)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="selectByType(0,$event)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="selectByType(1,$event)" class="block negative" :class="{'active':selectType===1}">{{desc.negative}}<span class="count"></span>{{negatives.length}}</span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on':onlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
const POSITIVE = 0
const NEGATIVE = 1
const ALL = 2

export default {
  props: {
    ratings: {
      type: Array,
      default () {
        return []
      }
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    selectType: {
      type: Number,
      default: ALL
    }
  },
  data () {
    return {
      desc: {
        all: '全部',
        positive: '满意',
        negative: '不满意'
      }
    }
  },
  computed: {
    positives () {
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE
      })
    },
    negatives () {
      return this.ratings.filter((rating) => {
        return rating.rateType === NEGATIVE
      })
    }
  },
  methods: {
    selectByType (type, event) {
      this.$emit('selecttype', type)
    },
    toggleContent (event) {
      this.$emit('content')
    }
  }
}
</script>

<style lang="stylus">
@import './ratingselect'
</style>
