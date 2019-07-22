<template>
    <ol>
        <ListItem v-for="(item, index) of items" :item="item" :key="index" @change="emitChange"/>
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
            }
        }
    }
</script>

<style scoped>

</style>