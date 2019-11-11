<template>
    <v-container grey lighten-4>
        <v-row v-for="j in 2" v-bind:key="j" no-gutters v-bind:class="j === 1 ? 'mb-5': ''">
            <v-col v-for="i in j + 1" v-bind:key="i"  >
                <v-card class="pa-5" tile outlined>
                    {{ i }} of {{j + 1}}
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-5" no-gutters>
            <v-col v-for="i in 3" v-bind:key="i">
                <v-card outlined tile class="pa-2">One of three columns</v-card>
            </v-col>
        </v-row>
        <v-row class="my-5" no-gutters>
            <template v-for="i in 4" >
                <v-col :key="i">
                    <v-card outlined tile class="pa-3">column</v-card>
                </v-col>
                <v-responsive v-if="i == 2" :key="`width-${i}`" width="100%"></v-responsive>
            </template>
        </v-row>

        <v-row no-gutters class="my-5">
            <v-col v-for="i in 4" :key="i">
                <v-card outlined tile class="pa-3">
                    column
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>
