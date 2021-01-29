<template>
    <section>
        <v-btn 
        rounded 
        class="btn white--text"
        :class="$vuetify.breakpoint.smAndDown ? '' : 'mr-16'" 
        color="#08CDFF" elevation="0">Tour me Around</v-btn>
        <v-btn elevation="0" text large @click="logout" class="btn">Logout</v-btn>
    </section>
</template>

<script>
    export default {
        data:() => ({
            drawer: false,
            provider: 'teachers'
        }),
        methods: {
            logout() {
                this.$store.dispatch('auth/Logout', this.provider)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>