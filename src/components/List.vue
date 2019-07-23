<template>
    <ol>
        <ListItem v-for="item of items" :item="item" :key="item.id" @change="(status) => handleChange(item.id, status)" @modified="(val) => handleModify(item.id, val)"/>
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
            handleChange(id, status) {
                this.$store.commit("checkItem", {
                    id: id,
                    status: status
                })
            },
            handleModify(id, val) {
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