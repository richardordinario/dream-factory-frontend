<template>
    <v-app id="inspire">
        <v-parallax
        :src="require('../../assets/images/landing/parabg.png')"
        height="800"
        >
            <v-container fill-height fluid>
                <v-layout justify-center class="my-10">
                    <v-flex xs12 sm12 md12 lg10>
                        <v-app-bar
                        elevation="0"
                        color="transparent"
                        >
                            <v-toolbar-title>
                                <v-img
                                :src="require('../../assets/images/landing/logo.png')"
                                ></v-img>
                            </v-toolbar-title>
                            <v-toolbar-items class="hidden-md-and-down ma-2">
                                <v-btn 
                                text 
                                x-large 
                                color="white"
                                >Instructors</v-btn>
                                <v-btn
                                text 
                                x-large 
                                color="white"
                                >Classes and Contents</v-btn>
                                <v-btn
                                text 
                                x-large 
                                color="white"
                                >Grade Level</v-btn>
                                <v-btn
                                text 
                                x-large 
                                color="white"
                                >Faqs</v-btn>
                            </v-toolbar-items>
                            <v-spacer></v-spacer>
                            <div class="hidden-md-and-down ma-5">
                                <a href="/login">
                                <v-btn
                                large
                                rounded
                                color="indigo darken-3"
                                dark
                                width="130"
                                class="mx-2"
                                >Login</v-btn>
                                </a>
                                
                                <v-btn
                                large
                                rounded
                                color="info"
                                dark
                                width="130"
                                class="mx-2"
                                >Sign Up</v-btn>
                            </div>
                        </v-app-bar>
                    </v-flex>
                </v-layout>  
            </v-container>
            <!-- <v-container fill-height class="pb-16">
                 <v-layout row wrap justify-center>
                    <v-flex xs12 sm10 md6 lg10>
                        <div :class="$vuetify.breakpoint.smAndDown ? '' : 'mt-16 ml-16'">
                            <p class="text-h3">
                                Create a space in your home that sparks learning and creativity. 
                            </p>
                            <p class="text-h5">The best way to educate your kids is to learn with them.</p>
                            <v-col :cols="$vuetify.breakpoint.smAndDown ? '12' : '6'" class="mt-16">
                                <v-select
                                label="Search by...."
                                solo
                                ></v-select>
                            </v-col>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm10 md6 lg6 class="hidden-sm-and-down">
                         <v-img
                        :src="require('../../assets/images/landing/right-avatar.png')"
                        height="600"
                        width="600"
                        style="float:right;margin-right: -60px"
                        ></v-img>
                    </v-flex>
                </v-layout>  
            </v-container> -->
        </v-parallax>
        
    </v-app>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>