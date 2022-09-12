<template>
    <div class="full-width row wrap justify-start items-start content-start">
        <div class="column col-xs-12 col-sm-6 col-md-3 items-start content-center">
            <q-btn @click="getPrices" color="amber" glossy label="Get prices from lostarkmarket.online" />
            
            <div>
                <q-icon size="25px" name="img:img/items/use_6_104.webp" /> Crystallized Guardian Stone
            </div>
            <q-input v-model.number="crystallizedGuardianStone" type="number" filled style="max-width: 80px" />

            <div>
                <q-icon size="25px" name="img:img/items/use_6_105.webp" /> Crystallized Destruction Stone
            </div>
            <q-input v-model.number="crystallizedDestructionStone" type="number" filled style="max-width: 80px" />

            <div>
                <q-icon size="25px" name="img:img/items/use_7_155.webp" /> Honor Leapstone
            </div>
            <q-input v-model.number="honorLeapstone" type="number" filled style="max-width: 80px" />

            <div>
                <q-icon size="25px" name="img:img/items/use_7_156.webp" /> Great Honor Leapstone
            </div>
            <q-input v-model.number="greatHonorLeapstone" type="number" filled style="max-width: 80px" />

            <div>
                <q-icon size="25px" name="img:img/items/use_7_161.webp" /> Solar Grace
            </div>
            <q-input v-model.number="solarGrace" type="number" filled style="max-width: 80px" />

            <div>
                <q-icon size="25px" name="img:img/items/use_7_162.webp" /> Solar Blessing
            </div>
            <q-input v-model.number="solarBlessing" type="number" filled style="max-width: 80px" />

            <div>
                <q-icon size="25px" name="img:img/items/use_7_163.webp" /> Solar Protection
            </div>
            <q-input v-model.number="solarProtection" type="number" filled style="max-width: 80px" />

            <div>
                <q-icon size="25px" name="img:img/items/use_8_225.webp" /> Honor Shard Pouch (S)
            </div>
            <q-input v-model.number="honorShardPouchSmall" type="number" filled style="max-width: 80px" />

            <div>
                <q-icon size="25px" name="img:img/items/use_8_226.webp" /> Honor Shard Pouch (M)
            </div>
            <q-input v-model.number="honorShardPouchMedium" type="number" filled style="max-width: 80px" />

            <div>
                <q-icon size="25px" name="img:img/items/use_8_227.webp" /> Honor Shard Pouch (L)
            </div>
            <q-input v-model.number="honorShardPouchLarge" type="number" filled style="max-width: 80px" />

            <div>
                <q-icon size="25px" name="img:img/items/use_7_181.webp" /> Powder of Sage
            </div>
            <q-input v-model.number="powderOfSage" type="number" filled style="max-width: 80px" />

            <div>
                <q-checkbox v-model="convertHonorLeapstones"
                    label="Convert Honor Leapstones To Great Honor Leapstones" />

            </div>
        </div>
        <div class="column col-xs-12 col-sm-12 col-md-9 items-start">
            <h3><q-icon name="img:img/items/money_10.webp" /> PvP merchant (gold value per 100 Coins of Courage)</h3>
            <div class="text-weight-bold text-subtitle1" v-for="item in coinsOfCourageSort" :key="item.name">{{
                 item.name 
                }} = {{  item.value  }}g
            </div>

            <h3><q-icon name="img:img/items/use_1_40.webp" /> Pirate merchant (gold value per 100 Pirate Coins)</h3>
            <div class="text-weight-bold text-subtitle1" v-for="item in pirateCoinsSort" :key="item.name">{{  item.name 
                }} = {{  item.value  }}g
            </div>

            <h3><q-icon name="img:img/items/tokenitem_17.webp" /> Guild merchant (gold value per 100 Sylmael Bloodstones)</h3>
            <div class="text-weight-bold text-subtitle1" v-for="item in bloodstonesSort" :key="item.name">{{
                 item.name 
                }} = {{  item.value  }}g
            </div>
        </div>
    </div>
</template>



<script>

export default {
    data() {
        return {
            solarGrace: 0,
            solarBlessing: 0,
            solarProtection: 0,
            greatHonorLeapstone: 0,
            honorLeapstone: 0,
            crystallizedDestructionStone: 0,
            crystallizedGuardianStone: 0,
            honorShardPouchLarge: 0,
            honorShardPouchMedium: 0,
            honorShardPouchSmall: 0,
            powderOfSage: 0,
            convertHonorLeapstones: false,

            coinsOfCourageValues: [],
            pirateCoinsValues: [],
            bloodstonesValues: []
        }
    },
    mounted() {
        if(localStorage.getItem('solarGrace') !== null)
        this.solarGrace = localStorage.getItem('solarGrace');
        if(localStorage.getItem('solarBlessing') !== null)
        this.solarBlessing = localStorage.getItem('solarBlessing');
        if(localStorage.getItem('solarProtection') !== null)
        this.solarProtection = localStorage.getItem('solarProtection');
        if(localStorage.getItem('greatHonorLeapstone') !== null)
        this.greatHonorLeapstone = localStorage.getItem('greatHonorLeapstone');
        if(localStorage.getItem('honorLeapstone') !== null)
        this.honorLeapstone = localStorage.getItem('honorLeapstone');
        if(localStorage.getItem('crystallizedDestructionStone') !== null)
        this.crystallizedDestructionStone = localStorage.getItem('crystallizedDestructionStone');
        if(localStorage.getItem('crystallizedGuardianStone') !== null)
        this.crystallizedGuardianStone = localStorage.getItem('crystallizedGuardianStone');
        if(localStorage.getItem('honorShardPouchLarge') !== null)
        this.honorShardPouchLarge = localStorage.getItem('honorShardPouchLarge');
        if(localStorage.getItem('honorShardPouchMedium') !== null)
        this.honorShardPouchMedium = localStorage.getItem('honorShardPouchMedium');
        if(localStorage.getItem('honorShardPouchSmall') !== null)
        this.honorShardPouchSmall = localStorage.getItem('honorShardPouchSmall');
        if(localStorage.getItem('powderOfSage') !== null)
        this.powderOfSage = localStorage.getItem('powderOfSage');
        if(localStorage.getItem('convertHonorLeapstones') !== null)
        this.convertHonorLeapstones  = JSON.parse(localStorage.getItem('convertHonorLeapstones'));
    },
    methods: {
        getPrices() {
            fetch('https://www.lostarkmarket.online/api/export-market-live/Europe%20Central?category=Enhancement%20Material')
                .then(res => res.json())
                .then((out) => {
                    out.forEach((item) => {
                        if (item.name == "Solar Grace") {
                            this.solarGrace = item.lowPrice
                        }
                        if (item.name == "Solar Blessing") {
                            this.solarBlessing = item.lowPrice
                        }
                        if (item.name == "Solar Protection") {
                            this.solarProtection = item.lowPrice
                        }
                        if (item.name == "Great Honor Leapstone") {
                            this.greatHonorLeapstone = item.lowPrice
                        }
                        if (item.name == "Honor Leapstone") {
                            this.honorLeapstone = item.lowPrice
                        }
                        if (item.name == "Crystallized Destruction Stone") {
                            this.crystallizedDestructionStone = item.lowPrice
                        }
                        if (item.name == "Crystallized Guardian Stone") {
                            this.crystallizedGuardianStone = item.lowPrice
                        }
                        if (item.name == "Honor Shard Pouch (L)") {
                            this.honorShardPouchLarge = item.lowPrice
                        }
                        if (item.name == "Honor Shard Pouch (M)") {
                            this.honorShardPouchMedium = item.lowPrice
                        }
                        if (item.name == "Honor Shard Pouch (S)") {
                            this.honorShardPouchSmall = item.lowPrice
                        }
                        if (item.name == "Powder of Sage") {
                            this.powderOfSage = item.lowPrice
                        }

                    });
                }).catch(err => console.error(err));
        },
        calculateCourageValue() {
            this.coinsOfCourageValues = []
            let valueOfSolarGrace = Math.floor(this.solarGrace / 80 * 100)
            this.coinsOfCourageValues.push({ name: "Solar Grace", value: valueOfSolarGrace })
            let valueOfSolarBlessing = Math.floor(this.solarBlessing / 250 * 100)
            this.coinsOfCourageValues.push({ name: "Solar Blessing", value: valueOfSolarBlessing })
            let valueOfSolarProtection = Math.floor(this.solarProtection / 360 * 100)
            this.coinsOfCourageValues.push({ name: "Solar Protection", value: valueOfSolarProtection })
            let valueOfGreatHonorLeapstone = Math.floor(this.greatHonorLeapstone / 40 * 100)
            this.coinsOfCourageValues.push({ name: "Great Honor Leapstone", value: valueOfGreatHonorLeapstone })


            if (this.convertHonorLeapstones == false) {
                let valueOfHonorLeapstone = Math.floor(this.honorLeapstone / 40 * 100)
                this.coinsOfCourageValues.push({ name: "Honor Leapstone", value: valueOfHonorLeapstone })

            }
            else {
                let valueOfHonorLeapstone = Math.floor(this.honorLeapstone / 40 * 100 / 5)
                this.coinsOfCourageValues.push({ name: "Honor Leapstone", value: valueOfHonorLeapstone })
            }

            let valueOfCrystallizedDestructionStone = Math.floor(this.crystallizedDestructionStone / 60 * 100)
            this.coinsOfCourageValues.push({ name: "Crystallized Destruction Stone", value: valueOfCrystallizedDestructionStone })
            let valueOfCrystallizedGuardianStone = Math.floor(this.crystallizedGuardianStone / 20 * 100)
            this.coinsOfCourageValues.push({ name: "Crystallized Guardian Stone", value: valueOfCrystallizedGuardianStone })
            let valueOfHonorShardPouchLarge = Math.floor(this.honorShardPouchLarge / 670 * 100)
            this.coinsOfCourageValues.push({ name: "Honor Shard Pouch (L)", value: valueOfHonorShardPouchLarge })
        },
        calculatePirateValue() {
            this.pirateCoinsValues = []
            let valueOfCrystallizedDestructionStone = Math.floor(this.crystallizedDestructionStone / 330 * 100)
            this.pirateCoinsValues.push({ name: "Crystallized Destruction Stone", value: valueOfCrystallizedDestructionStone })
            let valueOfCrystallizedGuardianStone = Math.floor(this.crystallizedGuardianStone / 70 * 100)
            this.pirateCoinsValues.push({ name: "Crystallized Guardian Stone", value: valueOfCrystallizedGuardianStone })
            let valueOfHonorShardPouchMedium = Math.floor(this.honorShardPouchMedium / 800 * 100)
            this.pirateCoinsValues.push({ name: "Honor Shard Pouch (M)", value: valueOfHonorShardPouchMedium })
        },
        calculateBloodstoneValue() {
            this.bloodstonesValues = []
            let valueOfGreatHonorLeapstone = Math.floor(this.greatHonorLeapstone / 90 * 100)
            this.bloodstonesValues.push({ name: "Great Honor Leapstone", value: valueOfGreatHonorLeapstone })

            if (this.convertHonorLeapstones == false) {
                let valueOfHonorLeapstone50 = Math.floor(this.honorLeapstone / 50 * 100)
                this.bloodstonesValues.push({ name: "Honor Leapstone (x50 bloodstones)", value: valueOfHonorLeapstone50 })

                let valueOfHonorLeapstone60 = Math.floor(this.honorLeapstone / 60 * 100)
                this.bloodstonesValues.push({ name: "Honor Leapstone (x60 bloodstones)", value: valueOfHonorLeapstone60 })

                let valueOfHonorLeapstone80 = Math.floor(this.honorLeapstone / 80 * 100)
                this.bloodstonesValues.push({ name: "Honor Leapstone (x80 bloodstones)", value: valueOfHonorLeapstone80 })
            }
            else {
                let valueOfHonorLeapstone50 = Math.floor(this.honorLeapstone / 50 * 100 / 5)
                this.bloodstonesValues.push({ name: "Honor Leapstone (x50 bloodstones)", value: valueOfHonorLeapstone50 })

                let valueOfHonorLeapstone60 = Math.floor(this.honorLeapstone / 60 * 100 / 5)
                this.bloodstonesValues.push({ name: "Honor Leapstone (x60 bloodstones)", value: valueOfHonorLeapstone60 })

                let valueOfHonorLeapstone80 = Math.floor(this.honorLeapstone / 80 * 100 / 5)
                this.bloodstonesValues.push({ name: "Honor Leapstone (x80 bloodstones)", value: valueOfHonorLeapstone80 })
            }


            let valueOfCrystallizedGuardianStone70 = Math.floor(this.crystallizedGuardianStone * 2 / 70 * 100)
            this.bloodstonesValues.push({ name: "Crystallized Guardian Stone (x70 bloodstones)", value: valueOfCrystallizedGuardianStone70 })

            let valueOfCrystallizedGuardianStone75 = Math.floor(this.crystallizedGuardianStone * 2 / 75 * 100)
            this.bloodstonesValues.push({ name: "Crystallized Guardian Stone (x75 bloodstones)", value: valueOfCrystallizedGuardianStone75 })

            let valueOfCrystallizedGuardianStone80 = Math.floor(this.crystallizedGuardianStone * 2 / 80 * 100)
            this.bloodstonesValues.push({ name: "Crystallized Guardian Stone (x80 bloodstones)", value: valueOfCrystallizedGuardianStone80 })

            let valueOfCrystallizedDestructionStone220 = Math.floor(this.crystallizedDestructionStone * 2 / 220 * 100)
            this.bloodstonesValues.push({ name: "Crystallized Destruction Stone (x220 bloodstones)", value: valueOfCrystallizedDestructionStone220 })

            let valueOfCrystallizedDestructionStone230 = Math.floor(this.crystallizedDestructionStone * 2 / 230 * 100)
            this.bloodstonesValues.push({ name: "Crystallized Destruction Stone (x230 bloodstones)", value: valueOfCrystallizedDestructionStone230 })

            let valueOfCrystallizedDestructionStone240 = Math.floor(this.crystallizedDestructionStone * 2 / 240 * 100)
            this.bloodstonesValues.push({ name: "Crystallized Destruction Stone (x240 bloodstones)", value: valueOfCrystallizedDestructionStone240 })

            let valueOfHonorShardPouchSmall660 = Math.floor(this.crystallizedDestructionStone / 660 * 100)
            this.bloodstonesValues.push({ name: "Honor Shard Pouch (S) (x660 bloodstones)", value: valueOfHonorShardPouchSmall660 })

            let valueOfHonorShardPouchSmall740 = Math.floor(this.crystallizedDestructionStone / 740 * 100)
            this.bloodstonesValues.push({ name: "Honor Shard Pouch (S) (x740 bloodstones)", value: valueOfHonorShardPouchSmall740 })

            let valueOfHonorShardPouchSmall830 = Math.floor(this.crystallizedDestructionStone / 830 * 100)
            this.bloodstonesValues.push({ name: "Honor Shard Pouch (S) (x830 bloodstones)", value: valueOfHonorShardPouchSmall830 })

            let valueOfSolarGrace130 = Math.floor(this.solarGrace / 130 * 100)
            this.bloodstonesValues.push({ name: "Sun Supplementary Material Chest [worst case scenario] (x130 bloodstones)", value: valueOfSolarGrace130 })

            let valueOfSolarGrace150 = Math.floor(this.solarGrace / 150 * 100)
            this.bloodstonesValues.push({ name: "Sun Supplementary Material Chest [worst case scenario] (x150 bloodstones)", value: valueOfSolarGrace150 })

            let valueOfSolarGrace170 = Math.floor(this.solarGrace / 170 * 100)
            this.bloodstonesValues.push({ name: "Sun Supplementary Material Chest [worst case scenario] (x170 bloodstones)", value: valueOfSolarGrace170 })

            let valueOfPowderOfSage1000 = Math.floor(this.powderOfSage / 1000 * 100)
            this.bloodstonesValues.push({ name: "Powder of Sage (x1000 bloodstones)", value: valueOfPowderOfSage1000 })

            let valueOfPowderOfSage1120 = Math.floor(this.powderOfSage / 1120 * 100)
            this.bloodstonesValues.push({ name: "Powder of Sage (x1120 bloodstones)", value: valueOfPowderOfSage1120 })

            let valueOfPowderOfSage1250 = Math.floor(this.powderOfSage / 1250 * 100)
            this.bloodstonesValues.push({ name: "Powder of Sage (x1250 bloodstones)", value: valueOfPowderOfSage1250 })
        }
    },
    watch: {
        'solarGrace': function () {
            localStorage.setItem('solarGrace', this.solarGrace)
            this.calculateCourageValue()
        },
        'solarBlessing': function () {
            localStorage.setItem('solarBlessing', this.solarBlessing)
            this.calculateCourageValue()
        },
        'solarProtection': function () {
            localStorage.setItem('solarProtection', this.solarProtection)
            this.calculateCourageValue()
        },
        'greatHonorLeapstone': function () {
            localStorage.setItem('greatHonorLeapstone', this.greatHonorLeapstone)
            this.calculateCourageValue()
            this.calculateBloodstoneValue()
        },
        'honorLeapstone': function () {
            localStorage.setItem('honorLeapstone', this.honorLeapstone)
            this.calculateCourageValue()
            this.calculateBloodstoneValue()
        },
        'crystallizedDestructionStone': function () {
            localStorage.setItem('crystallizedDestructionStone', this.crystallizedDestructionStone)
            this.calculatePirateValue()
            this.calculateCourageValue()
            this.calculateBloodstoneValue()
        },
        'crystallizedGuardianStone': function () {
            localStorage.setItem('crystallizedGuardianStone', this.crystallizedGuardianStone)
            this.calculatePirateValue()
            this.calculateCourageValue()
            this.calculateBloodstoneValue()
        },
        'honorShardPouchLarge': function () {
            localStorage.setItem('honorShardPouchLarge', this.honorShardPouchLarge)
            this.calculateCourageValue()
        },
        'honorShardPouchMedium': function () {
            localStorage.setItem('honorShardPouchMedium', this.honorShardPouchMedium)
            this.calculatePirateValue()
        },
        'honorShardPouchSmall': function () {
            localStorage.setItem('honorShardPouchSmall', this.honorShardPouchSmall)
            this.calculateBloodstoneValue()
        },
        'powderOfSage': function () {
            localStorage.setItem('powderOfSage', this.powderOfSage)
            this.calculateBloodstoneValue()
        },
        'convertHonorLeapstones': function () {
            localStorage.setItem('convertHonorLeapstones', JSON.stringify(this.convertHonorLeapstones))
            this.calculateCourageValue()
            this.calculateBloodstoneValue()
        },
    },
    computed:
    {
        pirateCoinsSort() {
            function compare(a, b) {
                if (a.type < b.type) {
                    return 1;
                }
                if (a.type > b.type) {
                    return -1;
                }
                return 0;
            }
            let array = this.pirateCoinsValues.sort(({ value: a }, { value: b }) => b - a)
            array = array.sort(compare)
            return array

        },
        coinsOfCourageSort() {
            function compare(a, b) {
                if (a.type < b.type) {
                    return 1;
                }
                if (a.type > b.type) {
                    return -1;
                }
                return 0;
            }
            let array = this.coinsOfCourageValues.sort(({ value: a }, { value: b }) => b - a)
            array = array.sort(compare)
            return array

        },
        bloodstonesSort() {
            function compare(a, b) {
                if (a.type < b.type) {
                    return 1;
                }
                if (a.type > b.type) {
                    return -1;
                }
                return 0;
            }
            let array = this.bloodstonesValues.sort(({ value: a }, { value: b }) => b - a)
            array = array.sort(compare)
            return array

        },
    }
}
</script>