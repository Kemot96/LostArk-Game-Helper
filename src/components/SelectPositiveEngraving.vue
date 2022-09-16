<script lang="ts">
import { defineComponent } from 'vue';
import { positiveEngravings } from '../data.js'

export default defineComponent({
  data() {
    return {
      listOfPositiveEngravings: positiveEngravings,
    }
  },
  props: ['selectedClass', 'engraving', 'engravingValue', 'isStone'],
  emits: ['update:engraving', 'update:engravingValue'],
  computed: {
    name: {
      get() {
        return this.engraving
      },
      set(name : string) {
        this.$emit('update:engraving', name)
      }
    },
    value: {
      get() {
        return this.engravingValue
      },
      set(value : number) {
        this.$emit('update:engravingValue', value)
      }
    },
    removeAllClassesPositiveEngravings() {
      return positiveEngravings.filter(engraving => engraving.class == "")
    },
    removeOtherClassesPositiveEngravings() {
      return positiveEngravings.filter(engraving => engraving.class == this.selectedClass || engraving.class == "")
    },
  },
  methods:
  {
    filterPositiveEngraving(val: string, update: any, abort: any) {
      update(() => {
        const needle = val.toLowerCase()
        if (this.isStone == true) {
          this.listOfPositiveEngravings = this.removeAllClassesPositiveEngravings.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
        }
        else {
          this.listOfPositiveEngravings = this.removeOtherClassesPositiveEngravings.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
        }

      })
    },
  }
});
</script>


<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select outlined v-model="name" use-input hide-selected fill-input input-debounce="0"
        @filter="filterPositiveEngraving" :options="listOfPositiveEngravings" option-value="name" option-label="name"
        emit-value>
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section avatar>
              <q-avatar> <img :src="scope.opt.icon">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ scope.opt.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
      <q-input v-model.number="value" type="number" filled style="max-width: 70px" />
    </div>
  </div>
</template>

