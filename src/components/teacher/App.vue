<template>
    <v-app v-if="auth && logged">
        <v-app-bar 
        app
        color="white"
        elevation="1"
        >   
        <v-app-bar-nav-icon 
        @click.stop="drawer = !drawer"
        class="blue--text 
        hidden-md-and-up"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <Navbar/>
        </v-app-bar>
        <v-navigation-drawer 
        v-model="drawer"
        class="drawerLeft"
        :mini-variant.sync="mini"
        mini-variant-width="100"
        width="233"
        :permanent="!$vuetify.breakpoint.smAndDown"
        app>
            
            <v-app-bar color="#08CDFF">
                <v-spacer></v-spacer>
                <v-app-bar-nav-icon 
                class="hidden-sm-and-down"
                color="white"
                @click.stop="mini = !mini"
                ></v-app-bar-nav-icon>
                <v-spacer v-if="mini"></v-spacer>
            </v-app-bar>   
            <DrawerLeft :mini="mini"/>
            
        </v-navigation-drawer>
        <v-main class="main">
            <v-container>
                <v-layout justify-center class="mt-10">
                    <v-flex xs12 sm10 md12 lg12 xl10>
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Navbar from './layouts/Navbar'
    import DrawerLeft from './layouts/DrawerLeft'
    export default {
        components: {
            Navbar,
            DrawerLeft
        },
        data() {
            return {
                drawer: false,
                mini: false,
                auth: false,
                role: 'teachers',
            }
        },
        computed: {
            logged: {
                get() {
                    return this.$store.getters['auth/getLogged']
                }
            }
        },
        mounted() {
            this.auth = localStorage.getItem('token')
            //console.log(this.$store.getters['auth/getRole'])
            this.$store.dispatch('auth/Authenticate', this.role)
        },
        watch: {
            group() {
                this.drawer = false;
            },
        },
    }
</script>
