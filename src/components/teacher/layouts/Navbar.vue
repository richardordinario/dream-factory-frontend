<template>
    <section>
        <v-btn 
        rounded 
        class="btn white--text"
        :class="$vuetify.breakpoint.smAndDown ? '' : 'mr-16'" 
        color="#08CDFF" elevation="0">Tour me Around</v-btn>
        <v-btn elevation="0" text large class="btn ">Logout</v-btn>
    </section>
</template>

<script>
    export default {
        data:() => ({
            drawer: false,
        }),
    }
</script>

<style lang="scss" scoped>

</style>