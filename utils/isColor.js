export default function isColor(strColor){
    return CSS.supports('color', strColor)
}