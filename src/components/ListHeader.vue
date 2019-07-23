<template>
    <div>
        <div>
            <h2>Vue To Do List</h2>
            <p>
                <em>Simple Todo List with adding and filter by diff status.</em>
            </p>
        </div>
        <div>
            <input v-model="field" class="input-text" type="text" name="ListItem" />
            &nbsp;
            <div id="button" @click="addItem">Add</div>
        </div>
    </div>
</template>

<script>

import uuid from 'uuid/v1'

export default {
    name: 'ListHeader',
    data() {
        return {
            field: ''
        }
    },
    methods: {
        addItem() {
            this.$store.dispatch('addItem', {
                item: { id: uuid(), content: this.field, finished: false }
            });
            this.field = '';
        }
    }
}

</script>