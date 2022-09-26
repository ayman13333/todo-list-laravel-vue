<template>
    <div>
        <div >
            <list-item-vue
            v-for="(item,index) in passedItems" :key="index"
             :item="item"
             class="item"
             />
        </div>
    </div>

</template>
<script>
    import listItemVue from './listItem.vue';
    export default{
    props:['items'],
    data () {
    return {
      passedItems: [], // you cannot use the same name as declared for props
    }
  },
    components:{
        listItemVue
    },
    created()
       {
          this.passedItems=items;
          console.log('done');
       }
    }
</script>
<style scoped>
.item{
    background: bisque;
    padding: 5px;
    margin-top: 5px;
}
</style>
