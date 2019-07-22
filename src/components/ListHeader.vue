<template>
    <div>
        <div>
            <h2>Jquery To Do List</h2>
            <p>
                <em>Simple Todo List with adding and filter by diff status.</em>
            </p>
        </div>
        <div>
            <input v-model="field" class="input-text" type="text" name="ListItem" />
            &nbsp;
            <div id="button" @click="emitChange">Add</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ListHeader',
    data() {
        return {
            field: ''
        }
    },
    methods: {
        emitChange() {
            this.$emit("change", this.field);
            this.field = '';
        }
    }
}

</script>