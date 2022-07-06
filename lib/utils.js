import { getItems } from "../services/itemService";

export async function getPathsFromIds(){
    const items=await getItems();
    const ids=items.map(item=>{
        return {
          params: {
            id: convertToPath(item.name),
          },
        };
    });
    return ids;
}
export async function getItemData(id){
    const items=await getItems();

   const product= items.find(item=>convertToPath(item.name)===id);

   return{
        id:id,
        data:product,
   };
}
export function convertToPath(name){
    return name.toLowerCase().replace(/\s/g,'-');
}