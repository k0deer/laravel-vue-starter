<template>
    <div v-show="isShowApp">
            <div>
                <!-- left navigation -->
                <!-- top navigation -->
                
                <!-- page content -->
                    <div>
                        <router-view></router-view>
                    </div>
                <!-- /page content -->
                <!-- footer content -->
            </div>
	</div>
</template>

<script>

export default {
    name:'ComponenteLayoutBackEnd',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Administracion App',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome App',
    //   link: [
    //     { rel: 'stylesheet', href: '/css/admin.css' },
    //     ],
    //   script: [
    //     { src: '/js/admin.js', type: 'text/javascript' }
    //     ]
    },
    mounted() {
        console.log('Component LayouyBackEnd Mounted');
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
