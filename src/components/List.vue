<template>
    <ol>
        <ListItem v-for="item of items" :item="item" :key="item.id" @change="(status) => emitChange(item.id, status)" @modified="(val) => emitModify(item.id, val)"/>
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
            emitChange(id, status) {
                this.$store.commit("checkItem", {
                    id: id,
                    status: status
                })
            },
            emitModify(id, val) {
                this.$store.commit("modifyItem", {
                    id: id,
                    val: val
                });
            }
        }
    }
</script>

<style scoped>

</style>