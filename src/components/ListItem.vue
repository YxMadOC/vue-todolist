<template>
    <li>
        <input class="done-todo" name="done-todo" type="checkbox" v-model="item.finished" @change="emitChange">
        <span :class="{'checked': item.finished}">{{ item.content }}</span>
    </li>
</template>

<script>
    export default {
        name: "ListItem",
        props: {
            item: {}
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