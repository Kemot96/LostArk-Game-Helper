<template>
    <div class="text-weight-bold text-subtitle1" v-for="item in tripodsJSON" :key="item.id">{{ item.name }}
        {{item.value}}
        <div v-if="item.id == updateID">
            <div class="q-pa-md" style="max-width: 300px">

                <q-form @submit="updateTripod(item.id)" class="q-gutter-md">

                    <q-input filled outlined v-model="newName" label="Name" />
                    <q-input v-model.number="newValue" type="number" filled style="max-width: 200px" />


                    <q-btn label="Accept" type="submit" color="primary" />
                    <q-btn @click="stopModifyItem()" color="red-8" label="Cancel" />
                </q-form>

            </div>
        </div>
        <div v-else>
            <q-btn @click="modifyItem(item.id, item.name, item.value)" color="deep-purple-7" label="Modify" />
            <q-btn @click="deleteTripod(item.id)" color="red-8" label="Delete" />
        </div>


    </div>

    <br><br><br><br><br><br>
    <div class="q-pa-md" style="max-width: 300px">

        <q-form @submit="addTripod" class="q-gutter-md">

            <q-input filled outlined v-model="name" label="Name" />
            <q-input v-model.number="value" type="number" filled style="max-width: 200px" />

            <div>
                <q-btn label="Submit" type="submit" color="primary" />
            </div>
        </q-form>

    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface Tripods {
    id: number
    name: string
    value: number
}

export default defineComponent({

    data() {
        return {
            tripodsJSON: new Array<Tripods>(),
            name: "",
            value: 0,
            updateID: 0,
            newName: "",
            newValue: 0
        }
    },
    mounted() {
        this.getTripods();
    },
    methods: {
        modifyItem(id: number, name : string, value : number) {
            this.updateID = id
            this.newName = name
            this.newValue = value
        },
        stopModifyItem()
        {
            this.updateID = 0
            this.newName = ''
            this.newValue = 0
        },
        getTripods() {
            axios.get('http://localhost:8081/api/tripods')
                .then((res) => {
                    this.tripodsJSON = res.data
                }).catch(err => console.error(err));
        },
        addTripod() {
            axios.post('http://localhost:8081/api/tripods', {
                name: this.name,
                value: this.value
            })
                .then(() => {
                    this.getTripods();
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        deleteTripod(id: number) {
            axios.delete('http://localhost:8081/api/tripods/' + id)
                .then(() => {
                    this.getTripods();
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        updateTripod(id: number) {
            axios.put('http://localhost:8081/api/tripods/' + id, {
                name: this.newName,
                value: this.newValue
            })
                .then(() => {
                    this.stopModifyItem();
                    this.getTripods();
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

    },
});
</script>