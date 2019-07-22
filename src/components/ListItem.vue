<template>
    <li>
        <input class="done-todo" name="done-todo" type="checkbox" v-model="item.finished" @change="emitChange">
        <span contenteditable="true" @blur="emitModify" :class="{'checked': item.finished}">{{ item.content }}</span>
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
            },
            emitModify(e) {
                this.$emit("modified", e.target.innerText);
            }
        }
    }
</script>

<style scoped>

</style>