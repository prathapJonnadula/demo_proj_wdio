

export function getRndInteger( max) {
    let min =1
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function getsubstringusingchar(str,char) {
    str.substring(str.indexOf(char))
}


