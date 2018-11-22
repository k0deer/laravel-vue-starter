<template>
    <div>
    	<router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:"ComponentLayoutErrorPage",
        mounted() {
            console.log('Component LayoutErrorPage Mounted');
        }
    }
</script>