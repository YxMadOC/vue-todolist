<template>
    <div>
        <ul id="filters">
            <li>
                <a href="#" data-filter="all" @click="changeFilter('ALL')" :class="{'selected': $store.getters.status === 'ALL'}">ALL</a>
            </li>
            <li>
                <a href="#" data-filter="active" @click="changeFilter('ACTIVE')" :class="{'selected': $store.getters.status === 'ACTIVE'}">Active</a>
            </li>
            <li>
                <a href="#" data-filter="complete" @click="changeFilter('COMPLETED')" :class="{'selected': $store.getters.status === 'COMPLETED'}">Complete</a>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "ListFilter",
        methods: {
            changeFilter(status) {
                this.$store.commit("changeFilter", {
                    status: status
                });
            }
        }
    }
</script>

<style scoped>

</style>