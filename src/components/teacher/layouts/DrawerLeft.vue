<template>
    <section> 
        <div class="d-flex flex-column justify-center align-center mt-10">
            <v-avatar :size="mini ? '62' : '92'">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>
            <p class="text-subtitle-1 mb-0 pb-0">John Cruz</p>
            <span class="font-weight-light text-caption mt-0 pt-0">Instructor</span>
        </div>
        
        <div class="text-center mt-5 mb-0 pb-0">
            <v-btn color="#08CDFF" class="white--text btn text-center" rounded> 
                <v-icon small>mdi-plus</v-icon>
                <span v-if="!mini">Add Subject</span>
            </v-btn>
        </div>
        <v-list dense rounded>
            <div v-for="nav in navs" :key="nav.id">
                <v-subheader>{{nav.header}}</v-subheader>
                <router-link v-for="(list, i) in nav.list" :key="i" :to="{ name: list.route}">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="#08CDFF" :class="!mini ? 'nav__list-icon' : ''">{{list.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="nav__list">
                                {{list.title}}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </div>
        </v-list>
    </section>
</template>

<script>
    export default {
        props: {
            mini: Boolean
        },
        data() {
            return {
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
    }
</script>

<style lang="scss" scoped>

</style>