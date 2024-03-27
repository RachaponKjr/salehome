export function mapImages(props) {
    const images = []
    // push in array images
    if (props) {
        for (let i = 0; i < props.img_all?.length; i++) {
            images.push(`http://18.140.121.108:5500/public/img_all/${props.img_all[i]}`)
        }
    }else{
        console.log('no images url !')
    }
    // console.log(images)
    return images
}