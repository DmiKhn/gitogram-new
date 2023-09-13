<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul ref="slider" class="stories">
        <li ref="item" class="stories-item"
          v-for="(trending, ndx) in trendings"
          :key="trending.id"
        >
          <sliderItem
            :data="getStoryData(trending)"
            :active="slideNdx === ndx"
            :loading="slideNdx === ndx && loading"
            :btnsShown="activeBtns"
            @onNextSlide="handleSlide(ndx + 1)"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onProgressFinish="handleSlide(ndx + 1)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { sliderItem } from '../../components/sliderItem'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'storiesSlider',
    components: {
      sliderItem
    },
    props: {
      initialSlide: {
        type: Number
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        // ndx: 0,
        slideNdx: 0,
        sliderPosition: 0,
        loading: false,
        btnsShown: true
      }
    },
    computed: {
      ...mapGetters({
        trendings: 'trendings/allState'
      }),
      activeBtns () {
        if (this.btnsShown === false) return []
        if (this.slideNdx === 0) return ['next']
        if (this.slideNdx === this.trendings.length - 1) return ['prev']
        return ['next', 'prev']
      }
    },
    methods: {
      ...mapActions({
        fetchTrendings: 'trendings/fetchTrendings',
        fetchReadme: 'trendings/fetchReadme'
      }),
      async fetchReadmeForActiveSlide () {
        const { id, owner, name } = this.trendings[this.slideNdx]
        await this.fetchReadme({ id, owner: owner.login, repo: name })
      },
      getStoryData (obj) {
        return {
          id: obj.id,
          userAvatar: obj.owner?.avatar_url,
          username: obj.owner?.login,
          content: obj.readme
        }
      },
      moveSlider (slideNdx) {
        const { slider, item } = this.$refs
        const slideWidth = parseInt(
          getComputedStyle(item[0]).getPropertyValue('width'),
          10
        )

        // console.log(item)

        this.slideNdx = slideNdx
        this.sliderPosition = -(slideWidth * slideNdx)

        console.log(slider.children[slideNdx])

        slider.style.transform = `translateX(${this.sliderPosition}px)`
        slider.style.transition = '.4s'
        // slider.style.scale = 'null'
      },
      handleSlide (slideNdx) {
        this.moveSlider(slideNdx)
      },
      async loadReadme () {
        this.loading = true
        this.btnsShown = false
        try {
          await this.fetchReadmeForActiveSlide()
        } catch (e) {
          console.log(e)
          throw e
        } finally {
          this.loading = false
          this.btnsShown = true
        }
        await this.fetchReadmeForActiveSlide()
      }
    },
    async mounted () {
      // console.log(this.trendings)
      if (!this.trendings || this.trendings?.length === 0) {
        await this.fetchTrendings()
      }
      if (this.initialSlide) {
        const ndx = this.trendings.findIndex(item => item.id === this.initialSlide)
        this.handleSlide(ndx)
      }
      // await this.fetchTrendings()
      await this.loadReadme()
    }
  }
</script>

<style scoped>
  .stories-container {
    margin: 0;
    height: 660px;
    position: relative;
  }
  .stories {
    display: flex;
    align-items: center;
    position: absolute;
    left: 25vh;
  }

  /* .stories-item {
    margin-left: -188px;
  } */
</style>