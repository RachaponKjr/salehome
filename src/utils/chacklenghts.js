export function chacklenghts(props){
    if (props.img_all?.length > 3){
        const lenght = props.img_all?.length - 3
        return [true,lenght]
    }else{
        return false
    }
}