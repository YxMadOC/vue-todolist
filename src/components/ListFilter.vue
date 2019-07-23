<template>
    <div>
        <ul id="filters">
            <li>
                <a href="#" data-filter="all" @click="changeFilter('ALL')" :class="{'selected': status === 'ALL'}">ALL</a>
            </li>
            <li>
                <a href="#" data-filter="active" @click="changeFilter('ACTIVE')" :class="{'selected': status === 'ACTIVE'}">Active</a>
            </li>
            <li>
                <a href="#" data-filter="complete" @click="changeFilter('COMPLETED')" :class="{'selected': status === 'COMPLETED'}">Complete</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "ListFilter",
        methods: {
            changeFilter(status) {
                this.$store.commit("changeFilter", {
                    status: status
                });
            }
        },
        computed:{
            ...mapGetters([
                'status'
            ])
        }
    }
</script>

<style scoped>

</style>