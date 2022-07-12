<template>
    <h1>Select class:</h1>
    <select v-model="selectedClass">
        <option value=""></option>
        <option v-for="item in classes" :value="item.name">{{ item.name }}</option>
    </select>

    <div id="summary"></div>


    <div id="character">
        <h1>Character</h1>
        <select v-model="CharacterPositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
        </select>
        <select v-model.number="CharacterPositiveEngraving2.value">
            <option :value="12">12</option>
            <option :value="9">9</option>
            <option :value="6">6</option>
            <option :value="3">3</option>
        </select>
    </div>

    <div>{{ CharacterPositiveEngraving1.name }} with value {{ CharacterPositiveEngraving1.value }}</div>
    <div>{{ CharacterPositiveEngraving2.name }} with value {{ CharacterPositiveEngraving2.value }}</div>

    <div id="stone">
        <h1>Stone</h1>
        <select v-model="StonePositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeAllClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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
            <option v-for="engraving in removeAllClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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

    <div>{{ StonePositiveEngraving1.name }} with value {{ StonePositiveEngraving1.value }}</div>
    <div>{{ StonePositiveEngraving2.name }} with value {{ StonePositiveEngraving2.value }}</div>
    <div>{{ StoneNegativeEngraving.name }} with value {{ StoneNegativeEngraving.value }}</div>


    <div id="ring1">
<h1>Ring 1</h1>
<select v-model="FirstRingPositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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

    <div>{{ FirstRingPositiveEngraving1.name }} with value {{ FirstRingPositiveEngraving1.value }}</div>
    <div>{{ FirstRingPositiveEngraving2.name }} with value {{ FirstRingPositiveEngraving2.value }}</div>
    <div>{{ FirstRingNegativeEngraving.name }} with value {{ FirstRingNegativeEngraving.value }}</div>

    <div id="ring2">
<h1>Ring 2</h1>
    <select v-model="SecondRingPositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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

    <div>{{ SecondRingPositiveEngraving1.name }} with value {{ SecondRingPositiveEngraving1.value }}</div>
    <div>{{ SecondRingPositiveEngraving2.name }} with value {{ SecondRingPositiveEngraving2.value }}</div>
    <div>{{ SecondRingNegativeEngraving.name }} with value {{ SecondRingNegativeEngraving.value }}</div>

    <div id="earring1">
<h1>Earring 1</h1>
    <select v-model="FirstEarringPositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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

    <div>{{ SecondEarringPositiveEngraving1.name }} with value {{ SecondEarringPositiveEngraving1.value }}</div>
    <div>{{ SecondEarringPositiveEngraving2.name }} with value {{ SecondEarringPositiveEngraving2.value }}</div>
    <div>{{ SecondEarringNegativeEngraving.name }} with value {{ SecondEarringNegativeEngraving.value }}</div>

        <div id="necklace">
<h1>Necklace</h1>
<select v-model="NecklacePositiveEngraving1.name">
            <option value=""></option>
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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
            <option v-for="engraving in removeOtherClassesPositiveEngravings" :value="engraving.name">{{ engraving.name }}</option>
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

    <div>{{ NecklacePositiveEngraving1.name }} with value {{ NecklacePositiveEngraving1.value }}</div>
    <div>{{ NecklacePositiveEngraving2.name }} with value {{ NecklacePositiveEngraving2.value }}</div>
    <div>{{ NecklaceNegativeEngraving.name }} with value {{ NecklaceNegativeEngraving.value }}</div>

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
        removeOtherClassesPositiveEngravings(){
            return this.positiveEngravings.filter(engraving => engraving.class == this.selectedClass || engraving.class == "")
        },
        removeAllClassesPositiveEngravings(){
            return this.positiveEngravings.filter(engraving => engraving.class == "")
        },
    },
    watch: {
        'selectedClass': function () {
            localStorage.setItem('selectedClass', this.selectedClass)
        },


        'CharacterPositiveEngraving1.name': function () {
            localStorage.setItem('CharacterPositiveEngraving1.name', this.CharacterPositiveEngraving1.name)
        },
        'CharacterPositiveEngraving1.value': function () {
            localStorage.setItem('CharacterPositiveEngraving1.value',this.CharacterPositiveEngraving1.value)
        },
        'CharacterPositiveEngraving2.name': function () {
            localStorage.setItem('CharacterPositiveEngraving2.name', this.CharacterPositiveEngraving2.name)
        },
        'CharacterPositiveEngraving2.value': function () {
            localStorage.setItem('CharacterPositiveEngraving2.value',this.CharacterPositiveEngraving2.value)
        },


        'StonePositiveEngraving1.name': function () {
            localStorage.setItem('StonePositiveEngraving1.name', this.StonePositiveEngraving1.name)
        },
        'StonePositiveEngraving1.value': function () {
            localStorage.setItem('StonePositiveEngraving1.value',this.StonePositiveEngraving1.value)
        },
        'StonePositiveEngraving2.name': function () {
            localStorage.setItem('StonePositiveEngraving2.name', this.StonePositiveEngraving2.name)
        },
        'StonePositiveEngraving2.value': function () {
            localStorage.setItem('StonePositiveEngraving2.value',this.StonePositiveEngraving2.value)
        },
        'StoneNegativeEngraving.name': function () {
            localStorage.setItem('StoneNegativeEngraving.name', this.StoneNegativeEngraving.name)
        },
        'StoneNegativeEngraving.value': function () {
            localStorage.setItem('StoneNegativeEngraving.value',this.StoneNegativeEngraving.value)
        },


        'FirstRingPositiveEngraving1.name': function () {
            localStorage.setItem('FirstRingPositiveEngraving1.name', this.FirstRingPositiveEngraving1.name)
        },
        'FirstRingPositiveEngraving1.value': function () {
            localStorage.setItem('FirstRingPositiveEngraving1.value',this.FirstRingPositiveEngraving1.value)
        },
        'FirstRingPositiveEngraving2.name': function () {
            localStorage.setItem('FirstRingPositiveEngraving2.name', this.FirstRingPositiveEngraving2.name)
        },
        'FirstRingPositiveEngraving2.value': function () {
            localStorage.setItem('FirstRingPositiveEngraving2.value',this.FirstRingPositiveEngraving2.value)
        },
        'FirstRingNegativeEngraving.name': function () {
            localStorage.setItem('FirstRingNegativeEngraving.name', this.FirstRingNegativeEngraving.name)
        },
        'FirstRingNegativeEngraving.value': function () {
            localStorage.setItem('FirstRingNegativeEngraving.value',this.FirstRingNegativeEngraving.value)
        },


        'SecondRingPositiveEngraving1.name': function () {
            localStorage.setItem('SecondRingPositiveEngraving1.name', this.SecondRingPositiveEngraving1.name)
        },
        'SecondRingPositiveEngraving1.value': function () {
            localStorage.setItem('SecondRingPositiveEngraving1.value',this.SecondRingPositiveEngraving1.value)
        },
        'SecondRingPositiveEngraving2.name': function () {
            localStorage.setItem('SecondRingPositiveEngraving2.name', this.SecondRingPositiveEngraving2.name)
        },
        'SecondRingPositiveEngraving2.value': function () {
            localStorage.setItem('SecondRingPositiveEngraving2.value',this.SecondRingPositiveEngraving2.value)
        },
        'SecondRingNegativeEngraving.name': function () {
            localStorage.setItem('SecondRingNegativeEngraving.name', this.SecondRingNegativeEngraving.name)
        },
        'SecondRingNegativeEngraving.value': function () {
            localStorage.setItem('SecondRingNegativeEngraving.value',this.SecondRingNegativeEngraving.value)
        },


        'FirstEarringPositiveEngraving1.name': function () {
            localStorage.setItem('FirstEarringPositiveEngraving1.name', this.FirstEarringPositiveEngraving1.name)
        },
        'FirstEarringPositiveEngraving1.value': function () {
            localStorage.setItem('FirstEarringPositiveEngraving1.value',this.FirstEarringPositiveEngraving1.value)
        },
        'FirstEarringPositiveEngraving2.name': function () {
            localStorage.setItem('FirstEarringPositiveEngraving2.name', this.FirstEarringPositiveEngraving2.name)
        },
        'FirstEarringPositiveEngraving2.value': function () {
            localStorage.setItem('FirstEarringPositiveEngraving2.value',this.FirstEarringPositiveEngraving2.value)
        },
        'FirstEarringNegativeEngraving.name': function () {
            localStorage.setItem('FirstEarringNegativeEngraving.name', this.FirstEarringNegativeEngraving.name)
        },
        'FirstEarringNegativeEngraving.value': function () {
            localStorage.setItem('FirstEarringNegativeEngraving.value',this.FirstEarringNegativeEngraving.value)
        },


        'SecondEarringPositiveEngraving1.name': function () {
            localStorage.setItem('SecondEarringPositiveEngraving1.name', this.SecondEarringPositiveEngraving1.name)
        },
        'SecondEarringPositiveEngraving1.value': function () {
            localStorage.setItem('SecondEarringPositiveEngraving1.value',this.SecondEarringPositiveEngraving1.value)
        },
        'SecondEarringPositiveEngraving2.name': function () {
            localStorage.setItem('SecondEarringPositiveEngraving2.name', this.SecondEarringPositiveEngraving2.name)
        },
        'SecondEarringPositiveEngraving2.value': function () {
            localStorage.setItem('SecondEarringPositiveEngraving2.value',this.SecondEarringPositiveEngraving2.value)
        },
        'SecondEarringNegativeEngraving.name': function () {
            localStorage.setItem('SecondEarringNegativeEngraving.name', this.SecondEarringNegativeEngraving.name)
        },
        'SecondEarringNegativeEngraving.value': function () {
            localStorage.setItem('SecondEarringNegativeEngraving.value',this.SecondEarringNegativeEngraving.value)
        },


        'NecklacePositiveEngraving1.name': function () {
            localStorage.setItem('NecklacePositiveEngraving1.name', this.NecklacePositiveEngraving1.name)
        },
        'NecklacePositiveEngraving1.value': function () {
            localStorage.setItem('NecklacePositiveEngraving1.value',this.NecklacePositiveEngraving1.value)
        },
        'NecklacePositiveEngraving2.name': function () {
            localStorage.setItem('NecklacePositiveEngraving2.name', this.NecklacePositiveEngraving2.name)
        },
        'NecklacePositiveEngraving2.value': function () {
            localStorage.setItem('NecklacePositiveEngraving2.value',this.NecklacePositiveEngraving2.value)
        },
        'NecklaceNegativeEngraving.name': function () {
            localStorage.setItem('NecklaceNegativeEngraving.name', this.NecklaceNegativeEngraving.name)
        },
        'NecklaceNegativeEngraving.value': function () {
            localStorage.setItem('NecklaceNegativeEngraving.value',this.NecklaceNegativeEngraving.value)
        },
    }
}
</script>