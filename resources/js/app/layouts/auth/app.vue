<template>
    <div class="my-login-page" v-show="isShowApp">
        <router-view></router-view>
	</div>
</template>

<script>

export default {
    name:'ComponenteLayoutAuth',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Auth App',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome App',
    //   link: [
    //     { rel: 'stylesheet', href: '/css/auth.css' },
    //     ],
    //   script: [
    //     { src: '/js/auth.js', type: 'text/javascript' }
    //     ]
    },
    mounted() {
        console.log('Component Layout Auth Mounted');
        setTimeout(() => {
            this.isShowApp = true;
        }, 1000);
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
