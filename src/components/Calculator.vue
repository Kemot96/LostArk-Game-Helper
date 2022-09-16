<template>
    <div class="full-width row wrap justify-start items-start content-start">
        <div class="column col-xs-12 col-sm-6 col-md-3 items-center">
            <div id="character">
                <h4>Character</h4>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="CharacterPositiveEngraving1.name"
                    v-model:engravingValue="CharacterPositiveEngraving1.value"></SelectPositiveEngraving>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="CharacterPositiveEngraving2.name"
                    v-model:engravingValue="CharacterPositiveEngraving2.value"></SelectPositiveEngraving>
            </div>
            <div id="stone">
                <h4>Stone</h4>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="true"
                    v-model:engraving="StonePositiveEngraving1.name"
                    v-model:engravingValue="StonePositiveEngraving1.value"></SelectPositiveEngraving>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="true"
                    v-model:engraving="StonePositiveEngraving2.name"
                    v-model:engravingValue="StonePositiveEngraving2.value"></SelectPositiveEngraving>
                <SelectNegativeEngraving v-model:engraving="StoneNegativeEngraving.name"
                    v-model:engravingValue="StoneNegativeEngraving.value"></SelectNegativeEngraving>
            </div>
        </div>
        <div class="column col-6 items-center">
            <h4>Select class:</h4>
            <div class="row justify-center q-pa-md">
                <div class="q-gutter-md row">
                    <q-select outlined v-model="selectedClass" use-input hide-selected fill-input input-debounce="0"
                        @filter="filterClass" :options="listOfClasses" option-value="name" option-label="name"
                        emit-value>
                    </q-select>
                </div>
            </div>
            <div id="summary">
                <h4>Summary</h4>
                <div class="text-weight-bold text-subtitle1" v-for="item in summarySort" :key="item.name"
                    :class="item.type == 'positive' ? 'text-positive' : 'text-negative'">{{ item.name }} + {{
                    item.value
                    }}
                </div>
            </div>
        </div>
        <div class="column col-xs-12 col-sm-6 col-md-3 items-center">
            <div id="necklace">
                <h4>Necklace</h4>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="NecklacePositiveEngraving1.name"
                    v-model:engravingValue="NecklacePositiveEngraving1.value"></SelectPositiveEngraving>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="NecklacePositiveEngraving2.name"
                    v-model:engravingValue="NecklacePositiveEngraving2.value"></SelectPositiveEngraving>
                <SelectNegativeEngraving v-model:engraving="NecklaceNegativeEngraving.name"
                    v-model:engravingValue="NecklaceNegativeEngraving.value"></SelectNegativeEngraving>
            </div>
        </div>
    </div>



    <div class="full-width row wrap justify-start items-start content-start">
        <div class="column col-xs-12 col-sm-6 col-md-3 items-center">
            <div id="ring1">
                <h4>Ring 1</h4>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="FirstRingPositiveEngraving1.name"
                    v-model:engravingValue="FirstRingPositiveEngraving1.value"></SelectPositiveEngraving>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="FirstRingPositiveEngraving2.name"
                    v-model:engravingValue="FirstRingPositiveEngraving2.value"></SelectPositiveEngraving>
                <SelectNegativeEngraving v-model:engraving="FirstRingNegativeEngraving.name"
                    v-model:engravingValue="FirstRingNegativeEngraving.value"></SelectNegativeEngraving>
            </div>

        </div>

        <div class="column col-xs-12 col-sm-6 col-md-3 items-center">
            <div id="ring2">
                <h4>Ring 2</h4>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="SecondRingPositiveEngraving1.name"
                    v-model:engravingValue="SecondRingPositiveEngraving1.value"></SelectPositiveEngraving>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="SecondRingPositiveEngraving2.name"
                    v-model:engravingValue="SecondRingPositiveEngraving2.value"></SelectPositiveEngraving>
                <SelectNegativeEngraving v-model:engraving="SecondRingNegativeEngraving.name"
                    v-model:engravingValue="SecondRingNegativeEngraving.value"></SelectNegativeEngraving>
            </div>
        </div>

        <div class="column col-xs-12 col-sm-6 col-md-3 items-center">
            <div id="earring1">
                <h4>Earring 1</h4>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="FirstEarringPositiveEngraving1.name"
                    v-model:engravingValue="FirstEarringPositiveEngraving1.value"></SelectPositiveEngraving>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="FirstEarringPositiveEngraving2.name"
                    v-model:engravingValue="FirstEarringPositiveEngraving2.value"></SelectPositiveEngraving>
                <SelectNegativeEngraving v-model:engraving="FirstEarringNegativeEngraving.name"
                    v-model:engravingValue="FirstEarringNegativeEngraving.value"></SelectNegativeEngraving>
            </div>
        </div>

        <div class="column col-xs-12 col-sm-6 col-md-3 items-center">
            <div id="earring2">
                <h4>Earring 2</h4>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="SecondEarringPositiveEngraving1.name"
                    v-model:engravingValue="SecondEarringPositiveEngraving1.value"></SelectPositiveEngraving>
                <SelectPositiveEngraving :selectedClass=selectedClass :isStone="false"
                    v-model:engraving="SecondEarringPositiveEngraving2.name"
                    v-model:engravingValue="SecondEarringPositiveEngraving2.value"></SelectPositiveEngraving>
                <SelectNegativeEngraving v-model:engraving="SecondEarringNegativeEngraving.name"
                    v-model:engravingValue="SecondEarringNegativeEngraving.value"></SelectNegativeEngraving>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectPositiveEngraving from './SelectPositiveEngraving.vue'
import SelectNegativeEngraving from './SelectNegativeEngraving.vue'
import { classes } from '../data.js'
import { negativeEngravings } from '../data.js'



interface Engravings {
    name: string
    value: number
    type: "positive" | "negative"
}


export default defineComponent({
    components:
    {
        SelectPositiveEngraving,
        SelectNegativeEngraving
    },
    data() {
        return {
            selectedClass: "",
            listOfClasses: classes,
            selectNegativeEngraving: this.negativeEngravings,


            FirstRingPositiveEngraving1: { name: "", value: 0 },
            FirstRingPositiveEngraving2: { name: "", value: 0 },
            FirstRingNegativeEngraving: { name: "", value: 0 },

            SecondRingPositiveEngraving1: { name: "", value: 0 },
            SecondRingPositiveEngraving2: { name: "", value: 0 },
            SecondRingNegativeEngraving: { name: "", value: 0 },

            FirstEarringPositiveEngraving1: { name: "", value: 0 },
            FirstEarringPositiveEngraving2: { name: "", value: 0 },
            FirstEarringNegativeEngraving: { name: "", value: 0 },

            SecondEarringPositiveEngraving1: { name: "", value: 0 },
            SecondEarringPositiveEngraving2: { name: "", value: 0 },
            SecondEarringNegativeEngraving: { name: "", value: 0 },

            NecklacePositiveEngraving1: { name: "", value: 0 },
            NecklacePositiveEngraving2: { name: "", value: 0 },
            NecklaceNegativeEngraving: { name: "", value: 0 },

            StonePositiveEngraving1: { name: "", value: 0 },
            StonePositiveEngraving2: { name: "", value: 0 },
            StoneNegativeEngraving: { name: "", value: 0 },

            CharacterPositiveEngraving1: { name: "", value: 0 },
            CharacterPositiveEngraving2: { name: "", value: 0 },

            summary: new Array<Engravings>(),
        }
    },
    updated() {
        this.summary.forEach(function (item, index, array) {
            if (item.value == 0) {
                array.splice(index, 1)
            }
        });
    },
    mounted() {
        let getSelectedClass = localStorage.getItem('selectedClass')

        if (getSelectedClass !== null)
            this.selectedClass = getSelectedClass;


        let getCharacterPositiveEngraving1Name = localStorage.getItem('CharacterPositiveEngraving1.name')
        let getCharacterPositiveEngraving1Value = localStorage.getItem('CharacterPositiveEngraving1.value')
        let getCharacterPositiveEngraving2Name = localStorage.getItem('CharacterPositiveEngraving2.name')
        let getCharacterPositiveEngraving2Value = localStorage.getItem('CharacterPositiveEngraving2.value')

        if (getCharacterPositiveEngraving1Name !== null)
            this.CharacterPositiveEngraving1.name = getCharacterPositiveEngraving1Name;

        if (getCharacterPositiveEngraving1Value !== null)
            this.CharacterPositiveEngraving1.value = parseInt(getCharacterPositiveEngraving1Value);

        if (getCharacterPositiveEngraving2Name !== null)
            this.CharacterPositiveEngraving2.name = getCharacterPositiveEngraving2Name;

        if (getCharacterPositiveEngraving2Value !== null)
            this.CharacterPositiveEngraving2.value = parseInt(getCharacterPositiveEngraving2Value);


        let getStonePositiveEngraving1Name = localStorage.getItem('StonePositiveEngraving1.name')
        let getStonePositiveEngraving1Value = localStorage.getItem('StonePositiveEngraving1.value')
        let getStonePositiveEngraving2Name = localStorage.getItem('StonePositiveEngraving2.name')
        let getStonePositiveEngraving2Value = localStorage.getItem('StonePositiveEngraving2.value')
        let getStoneNegativeEngravingName = localStorage.getItem('StoneNegativeEngraving.name')
        let getStoneNegativeEngravingValue = localStorage.getItem('StoneNegativeEngraving.value')

        if (getStonePositiveEngraving1Name !== null)
            this.StonePositiveEngraving1.name = getStonePositiveEngraving1Name;

        if (getStonePositiveEngraving1Value !== null)
            this.StonePositiveEngraving1.value = parseInt(getStonePositiveEngraving1Value);

        if (getStonePositiveEngraving2Name !== null)
            this.StonePositiveEngraving2.name = getStonePositiveEngraving2Name;

        if (getStonePositiveEngraving2Value !== null)
            this.StonePositiveEngraving2.value = parseInt(getStonePositiveEngraving2Value);

        if (getStoneNegativeEngravingName !== null)
            this.StoneNegativeEngraving.name = getStoneNegativeEngravingName;

        if (getStoneNegativeEngravingValue !== null)
            this.StoneNegativeEngraving.value = parseInt(getStoneNegativeEngravingValue);


        let getFirstRingPositiveEngraving1Name = localStorage.getItem('FirstRingPositiveEngraving1.name')
        let getFirstRingPositiveEngraving1Value = localStorage.getItem('FirstRingPositiveEngraving1.value')
        let getFirstRingPositiveEngraving2Name = localStorage.getItem('FirstRingPositiveEngraving2.name')
        let getFirstRingPositiveEngraving2Value = localStorage.getItem('FirstRingPositiveEngraving2.value')
        let getFirstRingNegativeEngravingName = localStorage.getItem('FirstRingNegativeEngraving.name')
        let getFirstRingNegativeEngravingValue = localStorage.getItem('FirstRingNegativeEngraving.value')

        if (getFirstRingPositiveEngraving1Name !== null)
            this.FirstRingPositiveEngraving1.name = getFirstRingPositiveEngraving1Name;

        if (getFirstRingPositiveEngraving1Value !== null)
            this.FirstRingPositiveEngraving1.value = parseInt(getFirstRingPositiveEngraving1Value);

        if (getFirstRingPositiveEngraving2Name !== null)
            this.FirstRingPositiveEngraving2.name = getFirstRingPositiveEngraving2Name;

        if (getFirstRingPositiveEngraving2Value !== null)
            this.FirstRingPositiveEngraving2.value = parseInt(getFirstRingPositiveEngraving2Value);

        if (getFirstRingNegativeEngravingName !== null)
            this.FirstRingNegativeEngraving.name = getFirstRingNegativeEngravingName;

        if (getFirstRingNegativeEngravingValue !== null)
            this.FirstRingNegativeEngraving.value = parseInt(getFirstRingNegativeEngravingValue);


        let getSecondRingPositiveEngraving1Name = localStorage.getItem('SecondRingPositiveEngraving1.name')
        let getSecondRingPositiveEngraving1Value = localStorage.getItem('SecondRingPositiveEngraving1.value')
        let getSecondRingPositiveEngraving2Name = localStorage.getItem('SecondRingPositiveEngraving2.name')
        let getSecondRingPositiveEngraving2Value = localStorage.getItem('SecondRingPositiveEngraving2.value')
        let getSecondRingNegativeEngravingName = localStorage.getItem('SecondRingNegativeEngraving.name')
        let getSecondRingNegativeEngravingValue = localStorage.getItem('SecondRingNegativeEngraving.value')

        if (getSecondRingPositiveEngraving1Name !== null)
            this.SecondRingPositiveEngraving1.name = getSecondRingPositiveEngraving1Name;

        if (getSecondRingPositiveEngraving1Value !== null)
            this.SecondRingPositiveEngraving1.value = parseInt(getSecondRingPositiveEngraving1Value);

        if (getSecondRingPositiveEngraving2Name !== null)
            this.SecondRingPositiveEngraving2.name = getSecondRingPositiveEngraving2Name;

        if (getSecondRingPositiveEngraving2Value !== null)
            this.SecondRingPositiveEngraving2.value = parseInt(getSecondRingPositiveEngraving2Value);

        if (getSecondRingNegativeEngravingName !== null)
            this.SecondRingNegativeEngraving.name = getSecondRingNegativeEngravingName;

        if (getSecondRingNegativeEngravingValue !== null)
            this.SecondRingNegativeEngraving.value = parseInt(getSecondRingNegativeEngravingValue);


        let getFirstEarringPositiveEngraving1Name = localStorage.getItem('FirstEarringPositiveEngraving1.name')
        let getFirstEarringPositiveEngraving1Value = localStorage.getItem('FirstEarringPositiveEngraving1.value')
        let getFirstEarringPositiveEngraving2Name = localStorage.getItem('FirstEarringPositiveEngraving2.name')
        let getFirstEarringPositiveEngraving2Value = localStorage.getItem('FirstEarringPositiveEngraving2.value')
        let getFirstEarringNegativeEngravingName = localStorage.getItem('FirstEarringNegativeEngraving.name')
        let getFirstEarringNegativeEngravingValue = localStorage.getItem('FirstEarringNegativeEngraving.value')

        if (getFirstEarringPositiveEngraving1Name !== null)
            this.FirstEarringPositiveEngraving1.name = getFirstEarringPositiveEngraving1Name;

        if (getFirstEarringPositiveEngraving1Value !== null)
            this.FirstEarringPositiveEngraving1.value = parseInt(getFirstEarringPositiveEngraving1Value);

        if (getFirstEarringPositiveEngraving2Name !== null)
            this.FirstEarringPositiveEngraving2.name = getFirstEarringPositiveEngraving2Name;

        if (getFirstEarringPositiveEngraving2Value !== null)
            this.FirstEarringPositiveEngraving2.value = parseInt(getFirstEarringPositiveEngraving2Value);

        if (getFirstEarringNegativeEngravingName !== null)
            this.FirstEarringNegativeEngraving.name = getFirstEarringNegativeEngravingName;

        if (getFirstEarringNegativeEngravingValue !== null)
            this.FirstEarringNegativeEngraving.value = parseInt(getFirstEarringNegativeEngravingValue);


        let getSecondEarringPositiveEngraving1Name = localStorage.getItem('SecondEarringPositiveEngraving1.name')
        let getSecondEarringPositiveEngraving1Value = localStorage.getItem('SecondEarringPositiveEngraving1.value')
        let getSecondEarringPositiveEngraving2Name = localStorage.getItem('SecondEarringPositiveEngraving2.name')
        let getSecondEarringPositiveEngraving2Value = localStorage.getItem('SecondEarringPositiveEngraving2.value')
        let getSecondEarringNegativeEngravingName = localStorage.getItem('SecondEarringNegativeEngraving.name')
        let getSecondEarringNegativeEngravingValue = localStorage.getItem('SecondEarringNegativeEngraving.value')

        if (getSecondEarringPositiveEngraving1Name !== null)
            this.SecondEarringPositiveEngraving1.name = getSecondEarringPositiveEngraving1Name;

        if (getSecondEarringPositiveEngraving1Value !== null)
            this.SecondEarringPositiveEngraving1.value = parseInt(getSecondEarringPositiveEngraving1Value);

        if (getSecondEarringPositiveEngraving2Name !== null)
            this.SecondEarringPositiveEngraving2.name = getSecondEarringPositiveEngraving2Name;

        if (getSecondEarringPositiveEngraving2Value !== null)
            this.SecondEarringPositiveEngraving2.value = parseInt(getSecondEarringPositiveEngraving2Value);

        if (getSecondEarringNegativeEngravingName !== null)
            this.SecondEarringNegativeEngraving.name = getSecondEarringNegativeEngravingName;

        if (getSecondEarringNegativeEngravingValue !== null)
            this.SecondEarringNegativeEngraving.value = parseInt(getSecondEarringNegativeEngravingValue);


        let getNecklacePositiveEngraving1Name = localStorage.getItem('NecklacePositiveEngraving1.name')
        let getNecklacePositiveEngraving1Value = localStorage.getItem('NecklacePositiveEngraving1.value')
        let getNecklacePositiveEngraving2Name = localStorage.getItem('NecklacePositiveEngraving2.name')
        let getNecklacePositiveEngraving2Value = localStorage.getItem('NecklacePositiveEngraving2.value')
        let getNecklaceNegativeEngravingName = localStorage.getItem('NecklaceNegativeEngraving.name')
        let getNecklaceNegativeEngravingValue = localStorage.getItem('NecklaceNegativeEngraving.value')

        if (getNecklacePositiveEngraving1Name !== null)
            this.NecklacePositiveEngraving1.name = getNecklacePositiveEngraving1Name;

        if (getNecklacePositiveEngraving1Value !== null)
            this.NecklacePositiveEngraving1.value = parseInt(getNecklacePositiveEngraving1Value);

        if (getNecklacePositiveEngraving2Name !== null)
            this.NecklacePositiveEngraving2.name = getNecklacePositiveEngraving2Name;

        if (getNecklacePositiveEngraving2Value !== null)
            this.NecklacePositiveEngraving2.value = parseInt(getNecklacePositiveEngraving2Value);

        if (getNecklaceNegativeEngravingName !== null)
            this.NecklaceNegativeEngraving.name = getNecklaceNegativeEngravingName;

        if (getNecklaceNegativeEngravingValue !== null)
            this.NecklaceNegativeEngraving.value = parseInt(getNecklaceNegativeEngravingValue);
    },

    computed:
    {
        summarySort() {
            function compare(a: Engravings, b: Engravings) {
                if (a.type < b.type) {
                    return 1;
                }
                if (a.type > b.type) {
                    return -1;
                }
                return 0;
            }
            let array = this.summary.sort(({ value: a }, { value: b }) => b - a)
            array = array.sort(compare)
            return array

        },


        //character
        characterPositiveEngraving1_str() {
            return JSON.stringify(this.CharacterPositiveEngraving1)
        },
        characterPositiveEngraving2_str() {
            return JSON.stringify(this.CharacterPositiveEngraving2)
        },

        //stone
        stonePositiveEngraving1_str() {
            return JSON.stringify(this.StonePositiveEngraving1)
        },

        stonePositiveEngraving2_str() {
            return JSON.stringify(this.StonePositiveEngraving2)
        },

        stoneNegativeEngraving_str() {
            return JSON.stringify(this.StoneNegativeEngraving)
        },

        //first ring
        firstRingPositiveEngraving1_str() {
            return JSON.stringify(this.FirstRingPositiveEngraving1)
        },

        firstRingPositiveEngraving2_str() {
            return JSON.stringify(this.FirstRingPositiveEngraving2)
        },

        firstRingNegativeEngraving_str() {
            return JSON.stringify(this.FirstRingNegativeEngraving)
        },

        //second ring
        secondRingPositiveEngraving1_str() {
            return JSON.stringify(this.SecondRingPositiveEngraving1)
        },

        secondRingPositiveEngraving2_str() {
            return JSON.stringify(this.SecondRingPositiveEngraving2)
        },

        secondRingNegativeEngraving_str() {
            return JSON.stringify(this.SecondRingNegativeEngraving)
        },

        //first earring
        firstEarringPositiveEngraving1_str() {
            return JSON.stringify(this.FirstEarringPositiveEngraving1)
        },

        firstEarringPositiveEngraving2_str() {
            return JSON.stringify(this.FirstEarringPositiveEngraving2)
        },

        firstEarringNegativeEngraving_str() {
            return JSON.stringify(this.FirstEarringNegativeEngraving)
        },

        //second earring
        secondEarringPositiveEngraving1_str() {
            return JSON.stringify(this.SecondEarringPositiveEngraving1)
        },

        secondEarringPositiveEngraving2_str() {
            return JSON.stringify(this.SecondEarringPositiveEngraving2)
        },

        secondEarringNegativeEngraving_str() {
            return JSON.stringify(this.SecondEarringNegativeEngraving)
        },

        //necklace
        necklacePositiveEngraving1_str() {
            return JSON.stringify(this.NecklacePositiveEngraving1)
        },

        necklacePositiveEngraving2_str() {
            return JSON.stringify(this.NecklacePositiveEngraving2)
        },

        necklaceNegativeEngraving_str() {
            return JSON.stringify(this.NecklaceNegativeEngraving)
        },
    },
    methods:
    {
        filterClass(val: string, update: any, abort: any) {
            update(() => {
                const needle = val.toLowerCase()
                this.listOfClasses = classes.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
            })
        },


        addSummaryElement(engravingName: string, engravingValue: number) {
            if (engravingName !== "") {
                let engravingIsNegative = false
                negativeEngravings.forEach(function (item, index, array) {
                    if (item.name == engravingName) {
                        engravingIsNegative = true
                    }
                })
                if (this.summary.some(item => item.name === engravingName)) {
                    var index = this.summary.map(function (e) { return e.name; }).indexOf(engravingName)
                    var value = this.summary[index].value
                    if (engravingIsNegative) {
                        this.summary[index] = { name: engravingName, value: value + engravingValue, type: "negative" }
                    }
                    else {
                        this.summary[index] = { name: engravingName, value: value + engravingValue, type: "positive" }
                    }

                }
                else {
                    if (engravingIsNegative) {
                        this.summary.push({ name: engravingName, value: engravingValue, type: "negative" })
                    }
                    else {
                        this.summary.push({ name: engravingName, value: engravingValue, type: "positive" })
                    }

                }
            }
        },

        removeSummaryElement(engravingName: string, engravingValue: number) {
            if (engravingName !== "") {
                let engravingIsNegative = false
                negativeEngravings.forEach(function (item, index, array) {
                    if (item.name == engravingName) {
                        engravingIsNegative = true
                    }
                })
                if (this.summary.some(item => (item.name === engravingName) && (item.value == engravingValue))) {
                    var index = this.summary.map(function (e) { return e.name; }).indexOf(engravingName)
                    this.summary.splice(index, 1)

                }
                else {
                    var index = this.summary.map(function (e) { return e.name; }).indexOf(engravingName)
                    var value = this.summary[index].value
                    if (engravingIsNegative) {
                        this.summary[index] = { name: engravingName, value: value - engravingValue, type: "negative" }
                    }
                    else {
                        this.summary[index] = { name: engravingName, value: value - engravingValue, type: "positive" }
                    }

                }
            }

        }

    },
    watch: {
        'selectedClass': function () {
            localStorage.setItem('selectedClass', this.selectedClass)
        },

        //character
        characterPositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('CharacterPositiveEngraving1.name', this.CharacterPositiveEngraving1.name)
            localStorage.setItem('CharacterPositiveEngraving1.value', this.CharacterPositiveEngraving1.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        characterPositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('CharacterPositiveEngraving2.name', this.CharacterPositiveEngraving2.name)
            localStorage.setItem('CharacterPositiveEngraving2.value', this.CharacterPositiveEngraving2.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },


        //stone
        stonePositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('StonePositiveEngraving1.name', this.StonePositiveEngraving1.name)
            localStorage.setItem('StonePositiveEngraving1.value', this.StonePositiveEngraving1.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        stonePositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('StonePositiveEngraving2.name', this.StonePositiveEngraving2.name)
            localStorage.setItem('StonePositiveEngraving2.value', this.StonePositiveEngraving2.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        stoneNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('StoneNegativeEngraving.name', this.StoneNegativeEngraving.name)
            localStorage.setItem('StoneNegativeEngraving.value', this.StoneNegativeEngraving.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },


        //first ring
        firstRingPositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstRingPositiveEngraving1.name', this.FirstRingPositiveEngraving1.name)
            localStorage.setItem('FirstRingPositiveEngraving1.value', this.FirstRingPositiveEngraving1.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        firstRingPositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstRingPositiveEngraving2.name', this.FirstRingPositiveEngraving2.name)
            localStorage.setItem('FirstRingPositiveEngraving2.value', this.FirstRingPositiveEngraving2.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        firstRingNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstRingNegativeEngraving.name', this.FirstRingNegativeEngraving.name)
            localStorage.setItem('FirstRingNegativeEngraving.value', this.FirstRingNegativeEngraving.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },

        //second ring
        secondRingPositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondRingPositiveEngraving1.name', this.SecondRingPositiveEngraving1.name)
            localStorage.setItem('SecondRingPositiveEngraving1.value', this.SecondRingPositiveEngraving1.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        secondRingPositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondRingPositiveEngraving2.name', this.SecondRingPositiveEngraving2.name)
            localStorage.setItem('SecondRingPositiveEngraving2.value', this.SecondRingPositiveEngraving2.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        secondRingNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondRingNegativeEngraving.name', this.SecondRingNegativeEngraving.name)
            localStorage.setItem('SecondRingNegativeEngraving.value', this.SecondRingNegativeEngraving.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },


        //first earring
        firstEarringPositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstEarringPositiveEngraving1.name', this.FirstEarringPositiveEngraving1.name)
            localStorage.setItem('FirstEarringPositiveEngraving1.value', this.FirstEarringPositiveEngraving1.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        firstEarringPositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstEarringPositiveEngraving2.name', this.FirstEarringPositiveEngraving2.name)
            localStorage.setItem('FirstEarringPositiveEngraving2.value', this.FirstEarringPositiveEngraving2.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        firstEarringNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstEarringNegativeEngraving.name', this.FirstEarringNegativeEngraving.name)
            localStorage.setItem('FirstEarringNegativeEngraving.value', this.FirstEarringNegativeEngraving.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },

        //second earring
        secondEarringPositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondEarringPositiveEngraving1.name', this.SecondEarringPositiveEngraving1.name)
            localStorage.setItem('SecondEarringPositiveEngraving1.value', this.SecondEarringPositiveEngraving1.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        secondEarringPositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondEarringPositiveEngraving2.name', this.SecondEarringPositiveEngraving2.name)
            localStorage.setItem('SecondEarringPositiveEngraving2.value', this.SecondEarringPositiveEngraving2.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        secondEarringNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondEarringNegativeEngraving.name', this.SecondEarringNegativeEngraving.name)
            localStorage.setItem('SecondEarringNegativeEngraving.value', this.SecondEarringNegativeEngraving.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },



        //necklace
        necklacePositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('NecklacePositiveEngraving1.name', this.NecklacePositiveEngraving1.name)
            localStorage.setItem('NecklacePositiveEngraving1.value', this.NecklacePositiveEngraving1.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        necklacePositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('NecklacePositiveEngraving2.name', this.NecklacePositiveEngraving2.name)
            localStorage.setItem('NecklacePositiveEngraving2.value', this.NecklacePositiveEngraving2.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        necklaceNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('NecklaceNegativeEngraving.name', this.NecklaceNegativeEngraving.name)
            localStorage.setItem('NecklaceNegativeEngraving.value', this.NecklaceNegativeEngraving.value.toString())
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
    }
});
</script>

<style>
.class {
    text-align: center;
}
</style>