<template>
    <v-container>

        <v-row>
            <v-carousel cycle interval="5000" vertical delimiter-icon="mdi-minus" :show-arrows="false" >
                <v-carousel-item v-for="i in color" :key="i" transition="fade-transition" reverse-transition="fade-transition">
                    <v-sheet elevation="5" class="" :color="i" height="100%">
                        <v-row class="fill-height" justify="center" align="center">
                            <div class="display-4">{{i}}</div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-row>
        <v-row justify="center">
            <v-col :class="i === 2 ? 'blue': 'red'" v-for="i in 2" :key="i" >
                <div :class="i === 1 ? 'text-right' : ''">
                    <v-btn large outlined >meetup</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name: 'home',
        component: {
    },
        data(){
            return {
                color: ['green', 'blue', 'purple', 'orange']
            }
        }
    }

</script>
