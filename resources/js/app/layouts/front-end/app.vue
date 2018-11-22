<template>
<div>

    <Header />
    <div class="container" v-show="isShowApp">
        <router-view></router-view>
	</div>

</div>

</template>

<script>

import Header from './inc/header.vue';

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
        Header
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
