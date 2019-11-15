<template>
    <div>
<v-container  v-for="i in alignment" :key="i" :class="i.color" class="mb-6"  >
    <v-row style="height: 150px" no-gutters :align="i.align" :order="i.order">
        <v-col v-for="j in 3" :key="j" >
            <v-card class="pa-5" tile outlined>One of three columns</v-card>
        </v-col>
    </v-row>
</v-container>
        <v-container>
            <v-row>
                <v-col order="2">
                    <v-card class="pa-3">post</v-card>
                </v-col>
                <v-col order="5" offset="5">
                    <v-card outlined tile class="pa-3">care</v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col offset="5">
                    <v-card outlined tile class="pa-3 d-block" >
                        wipe
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "meetups",
        data: () => ({
            alignment : [
                {color: 'red', align: 'start', order: 10},
                {color: 'blue', align: 'center', order: 2},
                {color: 'orange', align: 'end', order: 3},
                {color: 'green', align: 'start', order: 4}
            ],
        })

    }
;
</script>

<style scoped>

</style>
