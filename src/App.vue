<template>
    <div id="app">
        <div class="class">
            <h4>Select class:</h4>
            <div class="row justify-center q-pa-md">
                <div class="q-gutter-md row">
                    <q-select outlined v-model="selectedClass" use-input hide-selected fill-input input-debounce="0"
                        @filter="filterClass" :options="selectClass" option-value="name" option-label="name" emit-value>
                    </q-select>
                </div>
            </div>
        </div>
        <div class="full-width row wrap justify-start items-start content-start">
            <div class="column col-3 items-center">
                <div id="character">
                    <h4>Character</h4>
                    <SelectPositiveEngraving 
                    v-model:engraving="CharacterPositiveEngraving1.name"
                    v-model:engravingValue="CharacterPositiveEngraving1.value"></SelectPositiveEngraving>
                    <SelectPositiveEngraving 
                    v-model:engraving="CharacterPositiveEngraving2.name"
                    v-model:engravingValue="CharacterPositiveEngraving2.value"></SelectPositiveEngraving>
                </div>
                <div id="stone">
                    <h4>Stone</h4>
                    <SelectPositiveEngraving 
                    v-model:engraving="StonePositiveEngraving1.name"
                    v-model:engravingValue="StonePositiveEngraving1.value"></SelectPositiveEngraving>
                    <SelectPositiveEngraving 
                    v-model:engraving="StonePositiveEngraving2.name"
                    v-model:engravingValue="StonePositiveEngraving2.value"></SelectPositiveEngraving>
                    <SelectNegativeEngraving 
                    v-model:engraving="StoneNegativeEngraving.name"
                    v-model:engravingValue="StoneNegativeEngraving.value"></SelectNegativeEngraving >

                
                </div>
            </div>
            <div class="column col-6 items-center">
                <div id="summary">
                    <h4>Summary</h4>
                    <div class="text-weight-bold text-subtitle1" v-for="item in summarySort" :key="item.name"
                        :class="item.type == 'positive' ? 'text-positive' : 'text-negative'">{{ item.name }} + {{
                        item.value
                        }}
                    </div>
                </div>
            </div>
            <div class="column col-3 items-center">
                <div id="necklace">
                    <h4>Necklace</h4>
                    <SelectPositiveEngraving 
                    v-model:engraving="NecklacePositiveEngraving1.name"
                    v-model:engravingValue="NecklacePositiveEngraving1.value"></SelectPositiveEngraving>
                    <SelectPositiveEngraving 
                    v-model:engraving="NecklacePositiveEngraving2.name"
                    v-model:engravingValue="NecklacePositiveEngraving2.value"></SelectPositiveEngraving>
                    <SelectNegativeEngraving 
                    v-model:engraving="NecklaceNegativeEngraving.name"
                    v-model:engravingValue="NecklaceNegativeEngraving.value"></SelectNegativeEngraving >
                </div>
            </div>
        </div>



        <div class="full-width row wrap justify-start items-start content-start">
            <div class="column col-3 items-center">
                <div id="ring1">
                    <h4>Ring 1</h4>
                    <SelectPositiveEngraving 
                    v-model:engraving="FirstRingPositiveEngraving1.name"
                    v-model:engravingValue="FirstRingPositiveEngraving1.value"></SelectPositiveEngraving>
                    <SelectPositiveEngraving 
                    v-model:engraving="FirstRingPositiveEngraving2.name"
                    v-model:engravingValue="FirstRingPositiveEngraving2.value"></SelectPositiveEngraving>
                    <SelectNegativeEngraving 
                    v-model:engraving="FirstRingNegativeEngraving.name"
                    v-model:engravingValue="FirstRingNegativeEngraving.value"></SelectNegativeEngraving >
                </div>

            </div>

            <div class="column col-3 items-center">
                <div id="ring2">
                    <h4>Ring 2</h4>
                    <SelectPositiveEngraving 
                    v-model:engraving="SecondRingPositiveEngraving1.name"
                    v-model:engravingValue="SecondRingPositiveEngraving1.value"></SelectPositiveEngraving>
                    <SelectPositiveEngraving 
                    v-model:engraving="SecondRingPositiveEngraving2.name"
                    v-model:engravingValue="SecondRingPositiveEngraving2.value"></SelectPositiveEngraving>
                    <SelectNegativeEngraving 
                    v-model:engraving="SecondRingNegativeEngraving.name"
                    v-model:engravingValue="SecondRingNegativeEngraving.value"></SelectNegativeEngraving >
                </div>
            </div>

            <div class="column col-3 items-center">
                <div id="earring1">
                    <h4>Earing 1</h4>
                    <SelectPositiveEngraving 
                    v-model:engraving="FirstEarringPositiveEngraving1.name"
                    v-model:engravingValue="FirstEarringPositiveEngraving1.value"></SelectPositiveEngraving>
                    <SelectPositiveEngraving 
                    v-model:engraving="FirstEarringPositiveEngraving2.name"
                    v-model:engravingValue="FirstEarringPositiveEngraving2.value"></SelectPositiveEngraving>
                    <SelectNegativeEngraving 
                    v-model:engraving="FirstEarringNegativeEngraving.name"
                    v-model:engravingValue="FirstEarringNegativeEngraving.value"></SelectNegativeEngraving >
                </div>
            </div>

            <div class="column col-3 items-center">
                <div id="earring2">
                    <h4>Earing 2</h4>
                    <SelectPositiveEngraving 
                    v-model:engraving="SecondEarringPositiveEngraving1.name"
                    v-model:engravingValue="SecondEarringPositiveEngraving1.value"></SelectPositiveEngraving>
                    <SelectPositiveEngraving 
                    v-model:engraving="SecondEarringPositiveEngraving2.name"
                    v-model:engravingValue="SecondEarringPositiveEngraving2.value"></SelectPositiveEngraving>
                    <SelectNegativeEngraving 
                    v-model:engraving="SecondEarringNegativeEngraving.name"
                    v-model:engravingValue="SecondEarringNegativeEngraving.value"></SelectNegativeEngraving >
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import SelectPositiveEngraving from './components/SelectPositiveEngraving.vue'
import SelectNegativeEngraving from './components/SelectNegativeEngraving.vue'

const classes = [
    { id: 1, name: "Berserker" },
    { id: 2, name: "Destroyer" },
    { id: 3, name: "Gunlancer" },
    { id: 4, name: "Paladin" },
    { id: 5, name: "Bard" },
    { id: 6, name: "Sorceress" },
    { id: 7, name: "Wardancer" },
    { id: 8, name: "Scrapper" },
    { id: 9, name: "Soulfist" },
    { id: 10, name: "Glaivier" },
    { id: 11, name: "Striker" },
    { id: 12, name: "Deathblade" },
    { id: 13, name: "Shadowhunter", },
    { id: 14, name: "Sharpshooter" },
    { id: 15, name: "Deadeye" },
    { id: 16, name: "Artillerist" },
    { id: 17, name: "Gunslinger" },
]
const positiveEngravings = [
    { id: 1, name: "Barrage Enhancement", class: "Artillerist", icon: 'img/engravings/gl_skill_01_26.webp' },
    { id: 2, name: "Berserker's Technique", class: "Berserker", icon: 'img/engravings/buff_138.webp' },
    { id: 3, name: "Blessed Aura", class: "Paladin", icon: 'img/engravings/ability_215.webp' },
    { id: 4, name: "Combat Readiness", class: "Gunlancer", icon: 'img/engravings/buff_19.webp' },
    { id: 5, name: "Control", class: "Glaivier", icon: 'img/engravings/ability_208.webp' },
    { id: 6, name: "Death Strike", class: "Sharpshooter", icon: 'img/engravings/buff_245.webp' },
    { id: 7, name: "Deathblow", class: "Striker", icon: 'img/engravings/ability_230.webp' },
    { id: 8, name: "Demonic Impulse", class: "Shadowhunter", icon: 'img/engravings/ability_212.webp' },
    { id: 9, name: "Desperate Salvation", class: "Bard", icon: 'img/engravings/buff_135.webp' },
    { id: 10, name: "Energy Overflow", class: "Soulfist", icon: 'img/engravings/buff_235.webp' },
    { id: 11, name: "Enhanced Weapon", class: "Deadeye", icon: 'img/engravings/buff_33.webp' },
    { id: 12, name: "Esoteric Flurry", class: "Striker", icon: 'img/engravings/ability_229.webp' },
    { id: 13, name: "Esoteric Skill Enhancement", class: "Wardancer", icon: 'img/engravings/buff_238.webp' },
    { id: 14, name: "Firepower Enhancement", class: "Artillerist", icon: 'img/engravings/buff_171.webp' },
    { id: 15, name: "First Intention", class: "Wardancer", icon: 'img/engravings/ability_25.webp' },
    { id: 16, name: "Gravity Training", class: "Destroyer", icon: 'img/engravings/buff_42.webp' },
    { id: 17, name: "Igniter", class: "Sorceress", icon: 'img/engravings/ability_240.webp' },
    { id: 18, name: "Judgment", class: "Paladin", icon: 'img/engravings/ability_214.webp' },
    { id: 19, name: "Lone Knight", class: "Gunlancer", icon: 'img/engravings/buff_13.webp' },
    { id: 20, name: "Loyal Companion", class: "Sharpshooter", icon: 'img/engravings/buff_77.webp' },
    { id: 21, name: "Mayhem", class: "Berserker", icon: 'img/engravings/buff_173.webp' },
    { id: 22, name: "Peacemaker", class: "Gunslinger", icon: 'img/engravings/ability_225.webp' },
    { id: 23, name: "Perfect Suppression", class: "Shadowhunter", icon: 'img/engravings/ability_211.webp' },
    { id: 24, name: "Pinnacle", class: "Glaivier", icon: 'img/engravings/ability_207.webp' },
    { id: 25, name: "Pistoleer", class: "Deadeye", icon: 'img/engravings/buff_124.webp' },
    { id: 26, name: "Rage Hammer", class: "Destroyer", icon: 'img/engravings/achieve_08_49.webp' },
    { id: 27, name: "Reflux", class: "Sorceress", icon: 'img/engravings/ability_241.webp' },
    { id: 28, name: "Remaining Energy", class: "Deathblade", icon: 'img/engravings/ability_209.webp' },
    { id: 29, name: "Robust Spirit", class: "Soulfist", icon: 'img/engravings/ability_45.webp' },
    { id: 30, name: "Shock Training", class: "Scrapper", icon: 'img/engravings/buff_177.webp' },
    { id: 31, name: "Surge", class: "Deathblade", icon: 'img/engravings/ability_210.webp' },
    { id: 32, name: "Time to Hunt", class: "Gunslinger", icon: 'img/engravings/ability_228.webp' },
    { id: 33, name: "True Courage", class: "Bard", icon: 'img/engravings/buff_220.webp' },
    { id: 34, name: "Ultimate Skill: Taijutsu", class: "Scrapper", icon: 'img/engravings/achieve_07_22.webp' },
    { id: 35, name: "Adrenaline", class: "", icon: 'img/engravings/ability_235.webp' },
    { id: 36, name: "All-Out Attack", class: "", icon: 'img/engravings/ability_236.webp' },
    { id: 37, name: "Ambush Master", class: "", icon: 'img/engravings/buff_148.webp' },
    { id: 38, name: "Awakening", class: "", icon: 'img/engravings/buff_113.webp' },
    { id: 39, name: "Barricade", class: "", icon: 'img/engravings/buff_170.webp' },
    { id: 40, name: "Broken Bone", class: "", icon: 'img/engravings/buff_94.webp' },
    { id: 41, name: "Contender", class: "", icon: 'img/engravings/buff_136.webp' },
    { id: 42, name: "Crisis Evasion", class: "", icon: 'img/engravings/buff_162.webp' },
    { id: 43, name: "Crushing Fist", class: "", icon: 'img/engravings/buff_83.webp' },
    { id: 44, name: "Cursed Doll", class: "", icon: 'img/engravings/buff_237.webp' },
    { id: 45, name: "Disrespect", class: "", icon: 'img/engravings/achieve_04_30.webp' },
    { id: 46, name: "Divine Protection", class: "", icon: 'img/engravings/buff_229.webp' },
    { id: 47, name: "Drops of Ether", class: "", icon: 'img/engravings/buff_18.webp' },
    { id: 48, name: "Emergency Rescue", class: "", icon: 'img/engravings/ability_238.webp' },
    { id: 49, name: "Enhanced Shield", class: "", icon: 'img/engravings/buff_239.webp' },
    { id: 50, name: "Ether Predator", class: "", icon: 'img/engravings/buff_74.webp' },
    { id: 51, name: "Expert", class: "", icon: 'img/engravings/ability_237.webp' },
    { id: 52, name: "Explosive Expert", class: "", icon: 'img/engravings/buff_121.webp' },
    { id: 53, name: "Fortitude", class: "", icon: 'img/engravings/buff_66.webp' },
    { id: 54, name: "Grudge", class: "", icon: 'img/engravings/buff_71.webp' },
    { id: 55, name: "Heavy Armor", class: "", icon: 'img/engravings/buff_46.webp' },
    { id: 56, name: "Hit Master", class: "", icon: 'img/engravings/ability_233.webp' },
    { id: 57, name: "Keen Blunt Weapon", class: "", icon: 'img/engravings/achieve_03_40.webp' },
    { id: 58, name: "Lightning Fury", class: "", icon: 'img/engravings/buff_191.webp' },
    { id: 59, name: "Magick Stream", class: "", icon: 'img/engravings/buff_63.webp' },
    { id: 60, name: "Mass Increase", class: "", icon: 'img/engravings/ability_231.webp' },
    { id: 61, name: "Master Brawler", class: "", icon: 'img/engravings/ability_224.webp' },
    { id: 62, name: "Master of Escape", class: "", icon: 'img/engravings/buff_10.webp' },
    { id: 63, name: "Master's Tenacity", class: "", icon: 'img/engravings/buff_147.webp' },
    { id: 64, name: "Max MP Increase", class: "", icon: 'img/engravings/buff_122.webp' },
    { id: 65, name: "MP Efficiency Increase", class: "", icon: 'img/engravings/buff_166.webp' },
    { id: 66, name: "Necromancy", class: "", icon: 'img/engravings/buff_29.webp' },
    { id: 67, name: "Precise Dagger", class: "", icon: 'img/engravings/ability_239.webp' },
    { id: 68, name: "Preemptive Strike", class: "", icon: 'img/engravings/achieve_08_62.webp' },
    { id: 69, name: "Propulsion", class: "", icon: 'img/engravings/ability_232.webp' },
    { id: 70, name: "Raid Captain", class: "", icon: 'img/engravings/buff_210.webp' },
    { id: 71, name: "Shield Piercing", class: "", icon: 'img/engravings/buff_89.webp' },
    { id: 72, name: "Sight Focus", class: "", icon: 'img/engravings/ability_234.webp' },
    { id: 73, name: "Spirit Absorption", class: "", icon: 'img/engravings/buff_65.webp' },
    { id: 74, name: "Stabilized Status", class: "", icon: 'img/engravings/buff_105.webp' },
    { id: 75, name: "Strong Will", class: "", icon: 'img/engravings/buff_44.webp' },
    { id: 76, name: "Super Charge", class: "", icon: 'img/engravings/achieve_06_14.webp' },
    { id: 77, name: "Vital Point Hit", class: "", icon: 'img/engravings/buff_168.webp' },
]


const negativeEngravings = [
    { id: 1, name: "Atk. Power Reduction", icon: 'img/engravings/ability_236.webp' },
    { id: 2, name: "Atk. Speed Reduction", icon: 'img/engravings/ability_236.webp' },
    { id: 3, name: "Defense Reduction", icon: 'img/engravings/ability_236.webp' },
    { id: 4, name: "Move Speed Reduction", icon: 'img/engravings/ability_236.webp' },
]



export default {
    components:
    {
        SelectPositiveEngraving,
        SelectNegativeEngraving
    },
    data() {
        return {
            selectedClass: "",
            selectClass: classes,
            selectPositiveEngraving: positiveEngravings,
            selectNegativeEngraving: negativeEngravings,


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

            summary: [],

        }
    },
    mounted() {
        this.selectedClass = localStorage.getItem('selectedClass');

        this.CharacterPositiveEngraving1.name = localStorage.getItem("CharacterPositiveEngraving1.name")
        this.CharacterPositiveEngraving1.value = localStorage.getItem("CharacterPositiveEngraving1.value")
        this.CharacterPositiveEngraving2.name = localStorage.getItem("CharacterPositiveEngraving2.name")
        this.CharacterPositiveEngraving2.value = localStorage.getItem("CharacterPositiveEngraving2.value")

        this.StonePositiveEngraving1.name = localStorage.getItem("StonePositiveEngraving1.name")
        this.StonePositiveEngraving1.value = localStorage.getItem("StonePositiveEngraving1.value")
        this.StonePositiveEngraving2.name = localStorage.getItem("StonePositiveEngraving2.name")
        this.StonePositiveEngraving2.value = localStorage.getItem("StonePositiveEngraving2.value")
        this.StoneNegativeEngraving.name = localStorage.getItem("StoneNegativeEngraving.name")
        this.StoneNegativeEngraving.value = localStorage.getItem("StoneNegativeEngraving.value")

        this.FirstRingPositiveEngraving1.name = localStorage.getItem("FirstRingPositiveEngraving1.name")
        this.FirstRingPositiveEngraving1.value = localStorage.getItem("FirstRingPositiveEngraving1.value")
        this.FirstRingPositiveEngraving2.name = localStorage.getItem("FirstRingPositiveEngraving2.name")
        this.FirstRingPositiveEngraving2.value = localStorage.getItem("FirstRingPositiveEngraving2.value")
        this.FirstRingNegativeEngraving.name = localStorage.getItem("FirstRingNegativeEngraving.name")
        this.FirstRingNegativeEngraving.value = localStorage.getItem("FirstRingNegativeEngraving.value")

        this.SecondRingPositiveEngraving1.name = localStorage.getItem("SecondRingPositiveEngraving1.name")
        this.SecondRingPositiveEngraving1.value = localStorage.getItem("SecondRingPositiveEngraving1.value")
        this.SecondRingPositiveEngraving2.name = localStorage.getItem("SecondRingPositiveEngraving2.name")
        this.SecondRingPositiveEngraving2.value = localStorage.getItem("SecondRingPositiveEngraving2.value")
        this.SecondRingNegativeEngraving.name = localStorage.getItem("SecondRingNegativeEngraving.name")
        this.SecondRingNegativeEngraving.value = localStorage.getItem("SecondRingNegativeEngraving.value")

        this.FirstEarringPositiveEngraving1.name = localStorage.getItem("FirstEarringPositiveEngraving1.name")
        this.FirstEarringPositiveEngraving1.value = localStorage.getItem("FirstEarringPositiveEngraving1.value")
        this.FirstEarringPositiveEngraving2.name = localStorage.getItem("FirstEarringPositiveEngraving2.name")
        this.FirstEarringPositiveEngraving2.value = localStorage.getItem("FirstEarringPositiveEngraving2.value")
        this.FirstEarringNegativeEngraving.name = localStorage.getItem("FirstEarringNegativeEngraving.name")
        this.FirstEarringNegativeEngraving.value = localStorage.getItem("FirstEarringNegativeEngraving.value")

        this.SecondEarringPositiveEngraving1.name = localStorage.getItem("SecondEarringPositiveEngraving1.name")
        this.SecondEarringPositiveEngraving1.value = localStorage.getItem("SecondEarringPositiveEngraving1.value")
        this.SecondEarringPositiveEngraving2.name = localStorage.getItem("SecondEarringPositiveEngraving2.name")
        this.SecondEarringPositiveEngraving2.value = localStorage.getItem("SecondEarringPositiveEngraving2.value")
        this.SecondEarringNegativeEngraving.name = localStorage.getItem("SecondEarringNegativeEngraving.name")
        this.SecondEarringNegativeEngraving.value = localStorage.getItem("SecondEarringNegativeEngraving.value")

        this.NecklacePositiveEngraving1.name = localStorage.getItem("NecklacePositiveEngraving1.name")
        this.NecklacePositiveEngraving1.value = localStorage.getItem("NecklacePositiveEngraving1.value")
        this.NecklacePositiveEngraving2.name = localStorage.getItem("NecklacePositiveEngraving2.name")
        this.NecklacePositiveEngraving2.value = localStorage.getItem("NecklacePositiveEngraving2.value")
        this.NecklaceNegativeEngraving.name = localStorage.getItem("NecklaceNegativeEngraving.name")
        this.NecklaceNegativeEngraving.value = localStorage.getItem("NecklaceNegativeEngraving.value")
    },
    computed:
    {
        summarySort() {
            function compare(a, b) {
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

        //arrays
        removeOtherClassesPositiveEngravings() {
            return positiveEngravings.filter(engraving => engraving.class == this.selectedClass || engraving.class == "")
        },
        removeAllClassesPositiveEngravings() {
            return positiveEngravings.filter(engraving => engraving.class == "")
        },
    },
    methods:
    {
        filterClass(val, update, abort) {
            update(() => {
                const needle = val.toLowerCase()
                this.selectClass = classes.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
            })
        },

        filterPositiveEngraving(val, update, abort) {
            update(() => {
                const needle = val.toLowerCase()
                this.selectPositiveEngraving = this.removeOtherClassesPositiveEngravings.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
            })
        },


        filterPositiveEngravingWithoutClassEngravings(val, update, abort) {
            update(() => {
                const needle = val.toLowerCase()
                this.selectPositiveEngraving = this.removeAllClassesPositiveEngravings.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
            })
        },

        filterNegativeEngraving(val, update, abort) {
            update(() => {
                const needle = val.toLowerCase()
                this.selectNegativeEngraving = negativeEngravings.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
            })
        },

        addSummaryElement(engravingName, engravingValue) {
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
                        this.summary[index] = { name: engravingName, value: parseInt(value) + parseInt(engravingValue), type: "negative" }
                    }
                    else {
                        this.summary[index] = { name: engravingName, value: parseInt(value) + parseInt(engravingValue), type: "positive" }
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

        removeSummaryElement(engravingName, engravingValue) {
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
                        this.summary[index] = { name: engravingName, value: parseInt(value) - parseInt(engravingValue), type: "negative" }
                    }
                    else {
                        this.summary[index] = { name: engravingName, value: parseInt(value) - parseInt(engravingValue), type: "positive" }
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
            localStorage.setItem('CharacterPositiveEngraving1.value', this.CharacterPositiveEngraving1.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        characterPositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('CharacterPositiveEngraving2.name', this.CharacterPositiveEngraving2.name)
            localStorage.setItem('CharacterPositiveEngraving2.value', this.CharacterPositiveEngraving2.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },


        //stone
        stonePositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('StonePositiveEngraving1.name', this.StonePositiveEngraving1.name)
            localStorage.setItem('StonePositiveEngraving1.value', this.StonePositiveEngraving1.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        stonePositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('StonePositiveEngraving2.name', this.StonePositiveEngraving2.name)
            localStorage.setItem('StonePositiveEngraving2.value', this.StonePositiveEngraving2.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        stoneNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('StoneNegativeEngraving.name', this.StoneNegativeEngraving.name)
            localStorage.setItem('StoneNegativeEngraving.value', this.StoneNegativeEngraving.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },


        //first ring
        firstRingPositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstRingPositiveEngraving1.name', this.FirstRingPositiveEngraving1.name)
            localStorage.setItem('FirstRingPositiveEngraving1.value', this.FirstRingPositiveEngraving1.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        firstRingPositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstRingPositiveEngraving2.name', this.FirstRingPositiveEngraving2.name)
            localStorage.setItem('FirstRingPositiveEngraving2.value', this.FirstRingPositiveEngraving2.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        firstRingNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstRingNegativeEngraving.name', this.FirstRingNegativeEngraving.name)
            localStorage.setItem('FirstRingNegativeEngraving.value', this.FirstRingNegativeEngraving.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },

        //second ring
        secondRingPositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondRingPositiveEngraving1.name', this.SecondRingPositiveEngraving1.name)
            localStorage.setItem('SecondRingPositiveEngraving1.value', this.SecondRingPositiveEngraving1.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        secondRingPositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondRingPositiveEngraving2.name', this.SecondRingPositiveEngraving2.name)
            localStorage.setItem('SecondRingPositiveEngraving2.value', this.SecondRingPositiveEngraving2.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        secondRingNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondRingNegativeEngraving.name', this.SecondRingNegativeEngraving.name)
            localStorage.setItem('SecondRingNegativeEngraving.value', this.SecondRingNegativeEngraving.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },


        //first earring
        firstEarringPositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstEarringPositiveEngraving1.name', this.FirstEarringPositiveEngraving1.name)
            localStorage.setItem('FirstEarringPositiveEngraving1.value', this.FirstEarringPositiveEngraving1.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        firstEarringPositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstEarringPositiveEngraving2.name', this.FirstEarringPositiveEngraving2.name)
            localStorage.setItem('FirstEarringPositiveEngraving2.value', this.FirstEarringPositiveEngraving2.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        firstEarringNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('FirstEarringNegativeEngraving.name', this.FirstEarringNegativeEngraving.name)
            localStorage.setItem('FirstEarringNegativeEngraving.value', this.FirstEarringNegativeEngraving.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },

        //second earring
        secondEarringPositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondEarringPositiveEngraving1.name', this.SecondEarringPositiveEngraving1.name)
            localStorage.setItem('SecondEarringPositiveEngraving1.value', this.SecondEarringPositiveEngraving1.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        secondEarringPositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondEarringPositiveEngraving2.name', this.SecondEarringPositiveEngraving2.name)
            localStorage.setItem('SecondEarringPositiveEngraving2.value', this.SecondEarringPositiveEngraving2.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        secondEarringNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('SecondEarringNegativeEngraving.name', this.SecondEarringNegativeEngraving.name)
            localStorage.setItem('SecondEarringNegativeEngraving.value', this.SecondEarringNegativeEngraving.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },



        //necklace
        necklacePositiveEngraving1_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('NecklacePositiveEngraving1.name', this.NecklacePositiveEngraving1.name)
            localStorage.setItem('NecklacePositiveEngraving1.value', this.NecklacePositiveEngraving1.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        necklacePositiveEngraving2_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('NecklacePositiveEngraving2.name', this.NecklacePositiveEngraving2.name)
            localStorage.setItem('NecklacePositiveEngraving2.value', this.NecklacePositiveEngraving2.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
        necklaceNegativeEngraving_str: function (newValueString, oldValueString) {
            let newObjectString = JSON.parse(newValueString)
            let oldObjectString = JSON.parse(oldValueString)
            localStorage.setItem('NecklaceNegativeEngraving.name', this.NecklaceNegativeEngraving.name)
            localStorage.setItem('NecklaceNegativeEngraving.value', this.NecklaceNegativeEngraving.value)
            this.addSummaryElement(newObjectString.name, newObjectString.value)
            this.removeSummaryElement(oldObjectString.name, oldObjectString.value)
        },
    }
}
</script>

<style>
.class {
    text-align: center;
}
</style>