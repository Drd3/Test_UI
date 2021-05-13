import  axios  from "axios";

const url =  'http://hp-api.herokuapp.com/api'
const endPointCharacters = '/characters'

const endPointHouse = '/characters/house'

export default class ServiceHelper{
    async GetAllCharacters(){
      let characterList = await axios.get( url + endPointCharacters)
      return characterList;
    }
    async GetCharactersByHouse(selectedHouse){
      let data = await axios.get(url + endPointHouse + "/" + selectedHouse)
      return data.data
    }
}
