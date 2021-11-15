const buildTower = num => {
    tower = []
    stars = '*'

    for (i = 0; i < num; i++) {
        tower.push(stars)
        stars += '**'
        for (j = 0; j < i; j++) {
            tower[j] = ' ' + tower[j] + ' '
        }
    }
    for(let i = 0; i < num; i++){
        console.log(tower[i]);
    }
    return tower
}

console.log(buildTower(6));