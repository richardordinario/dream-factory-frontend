<template>
    <v-app>
        <v-main>
            <v-container fill-height>
                <v-row class="justify-content-center justify-center">
                    <v-col cols="12" sm="6" md="8" lg="8" xl="6">
                        <v-card elevation="12">
                            <v-row no-gutters>
                                <v-col cols="12" md="6" class="blue darken-1"></v-col>
                                <v-col cols="12" md="6">
                                    
                                    
                                    
                                    <v-card-text>
                                        <div class="
                                        text-h5 
                                        blue--text 
                                        text--darken-1
                                        font-weight-light">Login as</div>
                                        <v-row class="justify-content-center justify-center">
                                            <v-btn-toggle
                                            v-model="form.provider"
                                            color="blue"
                                            rounded
                                            center
                                            mandatory
                                            class="my-16"
                                            >
                                                <v-btn class="btn" value="users">Student</v-btn>
                                                <v-btn class="btn" value="teachers">Guardian</v-btn>
                                                <v-btn class="btn" value="admins">Teacher</v-btn>
                                            </v-btn-toggle>
                                        </v-row>
                                        <v-form @submit.prevent="login">
                                            <v-text-field
                                            dense
                                            outlined
                                            placeholder="Email" 
                                            type="email"
                                            v-model="form.email"
                                            ></v-text-field>
                                            <v-text-field
                                            dense
                                            outlined
                                            placeholder="Password"
                                            type="password"
                                             v-model="form.password"
                                            ></v-text-field>
                                            <v-btn type="submit" @click="login" block>Login</v-btn>
                                        </v-form>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn text class="text-caption">No Account yet?</v-btn>
                                    </v-card-actions>
                                   
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        auth: false,
        form: {
            email: '', password: '', provider: ''
        },
        creds: {
            role: 'teacher',
            token: true
        }
    }),
    methods: {
        login() {
            console.log(this.form)  
            this.$store.dispatch('auth/Login', this.form)
        }
    }
}
</script>

<style>

</style>