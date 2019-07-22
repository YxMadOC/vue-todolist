<template>
    <div>
        <ul id="filters">
            <li>
                <a href="#" data-filter="all" @click="emitChange('ALL')" :class="{'selected': filterFlag === 'ALL'}">ALL</a>
            </li>
            <li>
                <a href="#" data-filter="active" @click="emitChange('ACTIVE')" :class="{'selected': filterFlag === 'ACTIVE'}">Active</a>
            </li>
            <li>
                <a href="#" data-filter="complete" @click="emitChange('COMPLETED')" :class="{'selected': filterFlag === 'COMPLETED'}">Complete</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListFilter",
        props: {
            filterFlag: {
                default: 'ALL'
            }
        },
        methods: {
            emitChange(status) {
                this.$emit("change", status);
            }
        }
    }
</script>

<style scoped>

</style>