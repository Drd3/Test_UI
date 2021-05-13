<template src="./HouseList.html">
</template>
<style scoped lang="scss">
  @import "./house-list-navbar.scss";
</style>

<script>
import ServiceHelper from "../../services/ServiceHelper";
import  CharactersByHouses from "./../characters.component/CharactersByHouses";

const serviceHelper = new ServiceHelper

export default {
  components: { CharactersByHouses },
  name: 'HousesList',
  data(){
    return{
      housesList: [],
      selectectHouse: [],
      selectectHouseName: "",
      houseCode : "",
      characterList : []
    }
  },
  methods:{
    GetCharactersList(houseName){
      serviceHelper.GetCharactersByHouse(houseName).then((result) =>{
        this.selectectHouse = result
      })
    },
    DetectHouseImage(houseName){
      let url
      switch (houseName) {
        case 'Gryffindor':
          url = 'https://pm1.narvii.com/6221/df785b76f76ae3c057aec149b31fa795afb07731_hq.jpg'
          break;
          
        case 'Slytherin':
          url = 'https://i.pinimg.com/originals/fe/6e/c8/fe6ec8327a30910ae8ac8c69fe93ebbc.jpg'
        break;
        case 'Hufflepuff':
          url = 'https://cdn.lanetaneta.com/wp-content/uploads/2019/09/Harry-Potter-10-divertidos-memes-de-Hufflepuff-que-son-demasiado-780x405.jpg'
        break;
        case 'Ravenclaw':
          url = 'https://cdn.superaficionados.com/imagenes/razones-adorar-casa-ravenclaw-howgarts-og.jpg'
        break;
        default:
          break;
      }  
      return url
    },
    
    HousesWithCharactersCount(charactersList){

      let housesNames = this.characterList.data.map(x => x.house)
      this.housesNames = [... new Set(housesNames)]
      this.housesNames = this.housesNames.filter( x => x != "")

      let characters = charactersList.data
      let allhousesNames = []

      this.housesNames.forEach( houseItem => {
        let filterCharacters = characters.filter(x => x.house == houseItem)
        allhousesNames.push({name: houseItem, length: filterCharacters.length })
      })
      return allhousesNames
    }
  },
  created(){
    serviceHelper.GetAllCharacters().then((result) => 
    {
      this.characterList = result;
      this.housesList = this.HousesWithCharactersCount(this.characterList);
    })
  }
}
</script>
