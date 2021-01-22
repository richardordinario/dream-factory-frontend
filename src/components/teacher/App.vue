<template>
    <v-app>
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
            <v-container
            fill-height
            >
                <v-layout justify-center>
                    <v-flex xs12 sm10 md8 lg8>
                        
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
                navs: [
                    {
                        header: 'MAIN',
                        list: [
                            {
                                title: 'Dashboard',
                                icon: 'mdi-view-dashboard',
                                route: 'Dashboard'
                            },
                            {
                                title: 'My Courses',
                                icon: 'mdi-book',
                                route: 'Dashboard'
                            },
                            {
                                title: 'My Students',
                                icon: 'mdi-school',
                                route: 'Dashboard'
                            },
                            {
                                title: 'Forum',
                                icon: 'mdi-comment-alert',
                                route: 'Dashboard'
                            },
                        ]
                    },
                    {
                        header: 'ACCOUNT',
                        list: [
                            {
                                title: 'Messages',
                                icon: 'mdi-comment-alert',
                                route: 'Dashboard'
                            },
                            {
                                title: 'My Account',
                                icon: 'mdi-account',
                                route: 'Dashboard'
                            },
                        ]
                    }
                ]
            }
        },
        watch: {
            group() {
            this.drawer = false;
            },
        },
    }
</script>
