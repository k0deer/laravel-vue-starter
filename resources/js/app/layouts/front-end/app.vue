<template>
    <div v-show="isShowApp">
        <router-view></router-view>
	</div>
</template>

<script>

export default {
    name:'ComponenteLayoutFrontEnd',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Home Page',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome App',
    //   link: [
    //     { rel: 'stylesheet', href: '/css/page.css' },
    //     ],
    //   script: [
    //     { src: '/js/page.js', type: 'text/javascript' }
    //     ]
    },
    mounted() {
        console.log('Component LayoutFrontEnd Mounted');
        setTimeout(() => {
            this.isShowApp = true;
        }, 1400);
    },
    components: {
    },
    data(){
        return {
            isShowApp:false
        }
    }
}
</script>

<style>

</style>
