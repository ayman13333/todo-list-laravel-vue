<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title"> To Do list</h2>
            <add-item-form-vue v-on:itemchanged="getList()" />
        </div>
        <list-item-vue v-on:itemchanged="getList()"
        v-for="(item,index) in items" :key="index"
        :item="item" />
    </div>

</template>

<script>

import addItemFormVue from './addItemForm.vue';
import listItemVue from './listItem.vue';
    export default {
       components:{
        addItemFormVue,
        listItemVue
       },
       data:function()
       {
        return{
            items:[]
        }
       },
       methods :{
        getList()
        {
            axios.get('api/items')
            .then(response =>{
                this.items=response.data
            })
            .catch(error =>{
                console.log(error);
            })
        }
       },
       created()
       {
        this.getList();
       }
    }
</script>
<style scoped>
.todoListContainer{
    width: 350px;
    margin: auto;
}
.heading{
    background: aquamarine;
    padding: 10px;
}
#title{
    text-align: center;
}
</style>
