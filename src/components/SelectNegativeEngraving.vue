<script>

export default {
  data() {
    return {
      selectNegativeEngraving: this.$negativeEngravings,
    }
  },
    props: ['engraving', 'engravingValue'],
    emits: ['update:engraving', 'update:engravingValue'],
    computed: {
    name: {
      get() {
        return this.engraving
      },
      set(name) {
        this.$emit('update:engraving', name)
      }
    },
    value: {
      get() {
        return this.engravingValue
      },
      set(value) {
        this.$emit('update:engravingValue', value)
      }
    }
  },
  methods:
  {
    filterNegativeEngraving(val, update, abort) {
            update(() => {
                const needle = val.toLowerCase()
                this.selectNegativeEngraving = this.$negativeEngravings.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
            })
        },
  }
}
</script>


<template>
    <div class="q-pa-md">
        <div class="q-gutter-md row">
            <q-select outlined v-model="name" use-input hide-selected fill-input
                input-debounce="0" @filter="filterNegativeEngraving" :options="selectNegativeEngraving"
                option-value="name" option-label="name" emit-value>
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
            <q-input v-model.number="value" type="number" filled
                                style="max-width: 70px" />
        </div>
    </div>
</template>

