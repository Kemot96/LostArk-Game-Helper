<template>
    <h1>Select class:</h1>
    <select v-model="selectedClass">
        <option value=""></option>
        <option v-for="item in classes" :value="item.name">{{ item.name }}</option>
    </select>

    <div id="summary">
        <h1>Summary</h1>
        <div v-for="item in summarySort" :key="item.name">{{ item.name }} + {{ item.value }}  {{item.type}}</div>
    </div>


    <div id="character">
        <h1>Character</h1>
        <select v-model="CharacterPositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="CharacterPositiveEngraving1.value">
            <option :value="12">12</option>
            <option :value="9">9</option>
            <option :value="6">6</option>
            <option :value="3">3</option>
        </select>

        <br>
        <select v-model="CharacterPositiveEngraving2.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="CharacterPositiveEngraving2.value">
            <option :value="12">12</option>
            <option :value="9">9</option>
            <option :value="6">6</option>
            <option :value="3">3</option>
        </select>
    </div>

    <div id="stone">
        <h1>Stone</h1>
        <select v-model="StonePositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeAllClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}
            </option>
        </select>
        <select v-model.number="StonePositiveEngraving1.value">
            <option :value="10">10</option>
            <option :value="9">9</option>
            <option :value="8">8</option>
            <option :value="7">7</option>
            <option :value="6">6</option>
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
            <option :value="0">0</option>
        </select>

        <br>
        <select v-model="StonePositiveEngraving2.name">
            <option value=""></option>
            <option v-for="engraving in removeAllClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}
            </option>
        </select>
        <select v-model.number="StonePositiveEngraving2.value">
            <option :value="10">10</option>
            <option :value="9">9</option>
            <option :value="8">8</option>
            <option :value="7">7</option>
            <option :value="6">6</option>
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
            <option :value="0">0</option>
        </select>

        <br>
        <select v-model="StoneNegativeEngraving.name">
            <option value=""></option>
            <option v-for="engraving in negativeEngravings" :value="engraving.name">{{ engraving.name }}</option>
        </select>
        <select v-model.number="StoneNegativeEngraving.value">
            <option :value="10">10</option>
            <option :value="9">9</option>
            <option :value="8">8</option>
            <option :value="7">7</option>
            <option :value="6">6</option>
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
            <option :value="0">0</option>
        </select>
    </div>


    <div id="ring1">
        <h1>Ring 1</h1>
        <select v-model="FirstRingPositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="FirstRingPositiveEngraving1.value">
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>

        <br>
        <select v-model="FirstRingPositiveEngraving2.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="FirstRingPositiveEngraving2.value">
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>

        <br>
        <select v-model="FirstRingNegativeEngraving.name">
            <option value=""></option>
            <option v-for="engraving in negativeEngravings" :value="engraving.name">{{ engraving.name }}</option>
        </select>
        <select v-model.number="FirstRingNegativeEngraving.value">
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>
    </div>

    <div id="ring2">
        <h1>Ring 2</h1>
        <select v-model="SecondRingPositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="SecondRingPositiveEngraving1.value">
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>

        <br>
        <select v-model="SecondRingPositiveEngraving2.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="SecondRingPositiveEngraving2.value">
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>

        <br>
        <select v-model="SecondRingNegativeEngraving.name">
            <option value=""></option>
            <option v-for="engraving in negativeEngravings" :value="engraving.name">{{ engraving.name }}</option>
        </select>
        <select v-model.number="SecondRingNegativeEngraving.value">
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>
    </div>

    <div id="earring1">
        <h1>Earring 1</h1>
        <select v-model="FirstEarringPositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="FirstEarringPositiveEngraving1.value">
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>

        <br>
        <select v-model="FirstEarringPositiveEngraving2.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="FirstEarringPositiveEngraving2.value">
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>

        <br>
        <select v-model="FirstEarringNegativeEngraving.name">
            <option value=""></option>
            <option v-for="engraving in negativeEngravings" :value="engraving.name">{{ engraving.name }}</option>
        </select>
        <select v-model.number="FirstEarringNegativeEngraving.value">
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>
    </div>

    <div>{{ FirstEarringPositiveEngraving1.name }} with value {{ FirstEarringPositiveEngraving1.value }}</div>
    <div>{{ FirstEarringPositiveEngraving2.name }} with value {{ FirstEarringPositiveEngraving2.value }}</div>
    <div>{{ FirstEarringNegativeEngraving.name }} with value {{ FirstEarringNegativeEngraving.value }}</div>

    <div id="earring2">
        <h1>Earring 2</h1>
        <select v-model="SecondEarringPositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="SecondEarringPositiveEngraving1.value">
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>

        <br>
        <select v-model="SecondEarringPositiveEngraving2.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="SecondEarringPositiveEngraving2.value">
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>

        <br>
        <select v-model="SecondEarringNegativeEngraving.name">
            <option value=""></option>
            <option v-for="engraving in negativeEngravings" :value="engraving.name">{{ engraving.name }}</option>
        </select>
        <select v-model.number="SecondEarringNegativeEngraving.value">
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>
    </div>

    <div id="necklace">
        <h1>Necklace</h1>
        <select v-model="NecklacePositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="NecklacePositiveEngraving1.value">
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>

        <br>
        <select v-model="NecklacePositiveEngraving2.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name
            }}</option>
        </select>
        <select v-model.number="NecklacePositiveEngraving2.value">
            <option :value="5">5</option>
            <option :value="4">4</option>
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>

        <br>
        <select v-model="NecklaceNegativeEngraving.name">
            <option value=""></option>
            <option v-for="engraving in negativeEngravings" :value="engraving.name">{{ engraving.name }}</option>
        </select>
        <select v-model.number="NecklaceNegativeEngraving.value">
            <option :value="3">3</option>
            <option :value="2">2</option>
            <option :value="1">1</option>
        </select>
    </div>

</template>


<script>
export default {
    data() {
        return {
            selectedClass: "",
            classes: [
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
                { id: 13, name: "Shadowhunter" },
                { id: 14, name: "Sharpshooter" },
                { id: 15, name: "Deadeye" },
                { id: 16, name: "Artillerist" },
                { id: 17, name: "Gunslinger" },
            ],
            positiveEngravings: [
                { id: 1, name: "Barrage Enhancement", class: "Artillerist" },
                { id: 2, name: "Berserker's Technique", class: "Berserker" },
                { id: 3, name: "Blessed Aura", class: "Paladin" },
                { id: 4, name: "Combat Readiness", class: "Gunlancer" },
                { id: 5, name: "Control", class: "Glaivier" },
                { id: 6, name: "Death Strike", class: "Sharpshooter" },
                { id: 7, name: "Deathblow", class: "Striker" },
                { id: 8, name: "Demonic Impulse", class: "Shadowhunter" },
                { id: 9, name: "Desperate Salvation", class: "Bard" },
                { id: 10, name: "Energy Overflow", class: "Soulfist" },
                { id: 11, name: "Enhanced Weapon", class: "Deadeye" },
                { id: 12, name: "Esoteric Flurry", class: "Striker" },
                { id: 13, name: "Esoteric Skill Enhancement", class: "Wardancer" },
                { id: 14, name: "Firepower Enhancement", class: "Artillerist" },
                { id: 15, name: "First Intention", class: "Wardancer" },
                { id: 16, name: "Gravity Training", class: "Destroyer" },
                { id: 17, name: "Igniter", class: "Sorceress" },
                { id: 18, name: "Judgment", class: "Paladin" },
                { id: 19, name: "Lone Knight", class: "Gunlancer" },
                { id: 20, name: "Loyal Companion", class: "Sharpshooter" },
                { id: 21, name: "Mayhem", class: "Berserker" },
                { id: 22, name: "Peacemaker", class: "Gunslinger" },
                { id: 23, name: "Perfect Suppression", class: "Shadowhunter" },
                { id: 24, name: "Pinnacle", class: "Glaivier" },
                { id: 25, name: "Pistoleer", class: "Deadeye" },
                { id: 26, name: "Rage Hammer", class: "Destroyer" },
                { id: 27, name: "Reflux", class: "Sorceress" },
                { id: 28, name: "Remaining Energy", class: "Deathblade" },
                { id: 29, name: "Robust Spirit", class: "Soulfist" },
                { id: 30, name: "Shock Training", class: "Scrapper" },
                { id: 31, name: "Surge", class: "Deathblade" },
                { id: 32, name: "Time to Hunt", class: "Gunslinger" },
                { id: 33, name: "True Courage", class: "Bard" },
                { id: 34, name: "Ultimate Skill: Taijutsu", class: "Scrapper" },
                { id: 35, name: "Adrenaline", class: "" },
                { id: 36, name: "All-Out Attack", class: "" },
                { id: 37, name: "Ambush Master", class: "" },
                { id: 38, name: "Awakening", class: "" },
                { id: 39, name: "Barricade", class: "" },
                { id: 40, name: "Broken Bone", class: "" },
                { id: 41, name: "Contender", class: "" },
                { id: 42, name: "Crisis Evasion", class: "" },
                { id: 43, name: "Crushing Fist", class: "" },
                { id: 44, name: "Cursed Doll", class: "" },
                { id: 45, name: "Disrespect", class: "" },
                { id: 46, name: "Divine Protection", class: "" },
                { id: 47, name: "Drops of Ether", class: "" },
                { id: 48, name: "Emergency Rescue", class: "" },
                { id: 49, name: "Enhanced Shield", class: "" },
                { id: 50, name: "Ether Predator", class: "" },
                { id: 51, name: "Expert", class: "" },
                { id: 52, name: "Explosive Expert", class: "" },
                { id: 53, name: "Fortitude", class: "" },
                { id: 54, name: "Grudge", class: "" },
                { id: 55, name: "Heavy Armor", class: "" },
                { id: 56, name: "Hit Master", class: "" },
                { id: 57, name: "Keen Blunt Weapon", class: "" },
                { id: 58, name: "Lightning Fury", class: "" },
                { id: 59, name: "Magick Stream", class: "" },
                { id: 60, name: "Mass Increase", class: "" },
                { id: 61, name: "Master Brawler", class: "" },
                { id: 62, name: "Master of Escape", class: "" },
                { id: 63, name: "Master's Tenacity", class: "" },
                { id: 64, name: "Max MP Increase", class: "" },
                { id: 65, name: "MP Efficiency Increase", class: "" },
                { id: 66, name: "Necromancy", class: "" },
                { id: 67, name: "Precise Dagger", class: "" },
                { id: 68, name: "Preemptive Strike", class: "" },
                { id: 69, name: "Propulsion", class: "" },
                { id: 70, name: "Raid Captain", class: "" },
                { id: 71, name: "Shield Piercing", class: "" },
                { id: 72, name: "Sight Focus", class: "" },
                { id: 73, name: "Spirit Absorption", class: "" },
                { id: 74, name: "Stabilized Status", class: "" },
                { id: 75, name: "Strong Will", class: "" },
                { id: 76, name: "Super Charge", class: "" },
                { id: 77, name: "Vital Point Hit", class: "" },

            ],

            negativeEngravings: [
                { id: 1, name: "Atk. Power Reduction" },
                { id: 2, name: "Atk. Speed Reduction" },
                { id: 3, name: "Defense Reduction" },
                { id: 4, name: "Move Speed Reduction" },
            ],

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
                if (a.type< b.type) {
                    return 1;
                }
                if (a.type > b.type) {
                    return -1;
                }
                return 0;
            }
            let array = this.summary.sort( compare )
            return array.sort(({value:a}, {value:b}) => b-a)

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
            return this.positiveEngravings.filter(engraving => engraving.class == this.selectedClass || engraving.class == "")
        },
        removeAllClassesPositiveEngravings() {
            return this.positiveEngravings.filter(engraving => engraving.class == "")
        },
    },
    methods:
    {
        addSummaryElement(engravingName, engravingValue) {
            if (engravingName !== "") {
                let engravingIsNegative = false
                this.negativeEngravings.forEach(function (item, index, array) {
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
                this.negativeEngravings.forEach(function (item, index, array) {
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