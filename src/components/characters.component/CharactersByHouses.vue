<template src="./characters-by-house.html">
</template>
<style lang="sass" scoped>
    @import "./characters-by-house.scss"
</style>
<script>
export default {
    name: "CharactersList",
    props: {
        selectedHouseName: String,
        characterList: Array,
    },
    data(){
        return{ 
            nameToSearch: '',
            sortbyLastName: false,
            toggleDropdown: false,
            filterResults : []
        }
    },
    methods:{
        SortByProperty(list, propertyname){
            return list.sort((a,b) => {
                if(a[propertyname] > b[propertyname]){
                    return 1
                }
                if(a[propertyname] < b[propertyname]){
                    return -1
                }
                return 0
            }) 
        },
        SortByLastName(list){
            return list.sort((a,b) =>{
                if(a.name.split(" ")[1] > b.name.split(" ")[1]){
                    return 1
                }
                if(a.name.split(" ")[1] < b.name.split(" ")[1]){
                    return -1
                }
                return 0
            })
        },
        FilterAndSort(newvalue)
        {
            if(newvalue){
                this.filterResults = this.characterList.filter(x => x.name.toLowerCase().includes(this.nameToSearch.toLowerCase()));
            }
            else
            {
                this.filterResults = this.characterList;
            }
            
            if(this.sortbyLastName){
                this.filterResults = this.SortByLastName(this.filterResults);
            }else{
                this.filterResults = this.SortByProperty(this.filterResults, "name")
            }
        }
    },
    watch:
    {
        characterList(newvalue)
        {
            this.filterResults = newvalue;
        },
        nameToSearch(newvalue)
        {
            this.FilterAndSort(newvalue);
        },
        sortbyLastName()
        {
            this.FilterAndSort(this.nameToSearch);
        }
        
    },
}
</script>
