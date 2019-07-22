<template>
    <ol>
        <ListItem v-for="item of items" :item="item" :key="item.id" @change="emitChange" @modified="(val) => emitModify(item.id, val)"/>
    </ol>
</template>

<script>
    import ListItem from './ListItem'

    export default {
        name: "List",
        components: {ListItem},
        props: {
            items: {
                default: []
            }
        },
        methods: {
            emitChange() {
                this.$emit("change");
            },
            emitModify(id, val) {
                this.$emit("modified", id, val);
            }
        }
    }
</script>

<style scoped>

</style>