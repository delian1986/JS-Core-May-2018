function arenaTier(input) {
    let arena=new Map();

    for (let line of input) {
        if (line==='Ave Cesar') {
            break;
        }
        if (line.indexOf(' -> ')!==-1){
            let [glad,skill,power]=line.split(' -> ');

            if (!arena.has(glad)){
                arena.set(glad,new Map());
            }
            if (!arena.get(glad).has(skill)){
                arena.get(glad).set(skill,0);
            }

            if (arena.get(glad).get(skill)<power){
                arena.get(glad).set(skill,Number(power))
            }
        } else{
            let [glad1,glad2]=line.split(' vs ');

            if (arena.has(glad1)&&arena.has(glad2)){
                let g1Skills=[...arena.get(glad1)].map((a)=>a[0]);
                let g2Skills=[...arena.get(glad2)].map((a)=>a[0]);

                let [commonSkill]=g1Skills.filter(function (s) {
                    return g2Skills.indexOf(s)!==-1;
                });
                if (commonSkill){
                    let g1Power=arena.get(glad1).get(commonSkill);
                    let g2Power=arena.get(glad2).get(commonSkill);

                    if (g1Power>g2Power){
                        arena.delete(glad2)
                    }else if(g1Power<g2Power){
                        arena.delete(glad1)
                    }
                }
            }
        }
    }
    let totalPower=new Map();
    for (let glad of arena) {
        let powers=[...arena.get(glad[0])];
        let power=0;
        powers.forEach((p)=>{
            power+=Number(p[1])
        });
        totalPower.set(glad[0],power);
    }

    let sortedPower=[...totalPower].sort((a,b)=>{
        if (a[1]-b[1]!==0){
            return b[1]-a[1];
        } else{
            return a[0].localeCompare(b[0]);
        }
    });

    for (let glad of sortedPower) {
        console.log(`${glad[0]}: ${glad[1]} skill`);
        let sortedSkills=[...arena.get(glad[0])].sort((a,b)=>{
            if (a[1]-b[1]!==0){
                return b[1]-a[1];
            } else{
                return a[0].localeCompare(b[0]);
            }
        })
        for (let power of sortedSkills) {
            console.log(`- ${power[0]} <!> ${power[1]}`);
        }
    }
}

arenaTier([ 'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar' ]);

// arenaTier([ 'Pesho -> BattleCry -> 400',
//     'Gosho -> PowerPunch -> 300',
//     'Stamat -> Duck -> 200',
//     'Stamat -> Tiger -> 250',
//     'Ave Cesar' ]
// )