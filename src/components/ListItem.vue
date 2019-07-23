<template>
    <li>
        <input class="done-todo" name="done-todo" type="checkbox" v-model="item.finished" @change="handleChange">
        <span contenteditable="true" @blur="handleModify" :class="{'checked': item.finished}">{{ item.content }}</span>
    </li>
</template>

<script>
    export default {
        name: "ListItem",
        props: {
            item: {}
        },
        methods: {
            handleChange() {
                this.$emit("change", this.item.finished)
            },
            handleModify(e) {
                this.$emit("modified", e.target.innerText);
            }
        }
    }
</script>

<style scoped>

</style>