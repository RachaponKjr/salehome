export function chacklenghts(prop){
    console.log(prop)
    if (prop.img_all?.length > 3){
        const lenght = prop.img_all?.length - 3
        return [true,lenght]
    }else{
        return false
    }
    return
}