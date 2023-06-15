
function towerBuilder(nFloors) {
    let strFloor = [];


    for( let i = 1; i <= nFloors; i++){
        let str = '';
        for(let j = 1; j <= i*2-1; j++){
            str += '*'
        }
        for(let k = 1; k <=nFloors-i; k++){
            str = ' ' + str
        }
        for(let l = 1; l <=nFloors-i; l++){
            str = str + ' '
        }

        strFloor.push(`${str}`)

    }

    return strFloor

}


towerBuilder(10)