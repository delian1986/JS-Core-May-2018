function arenaTier(inputLines) {
    let arena={};

    for (let line of inputLines) {
        if (line.includes(' -> ')){
            let [name,skill,power]=line.split(' -> ');

            if (!arena.hasOwnProperty(name)){
                arena[name]={};
                arena[name][skill]=Number(power);
                arena[name]['totalPower']=arena[name][skill];
            }else{
                if(!arena[name].hasOwnProperty(skill)){
                    arena[name][skill]=Number(power);
                    arena[name]['totalPower']+=arena[name][skill];
                } else{
                    if (arena[name][skill]<Number(power)){
                        arena[name]['totalPower']-=arena[name][skill];
                        arena[name][skill]=Number(power);
                        arena[name]['totalPower']-=arena[name][skill];
                    }

                }
            }

        } else if(line.includes(' vs ')){
            let [gladiator1, gladiator2]=line.split(' vs ');
            
            if (arena.hasOwnProperty(gladiator1)&&arena.hasOwnProperty(gladiator2)){
                for (let gladiatorSkill in arena[gladiator1]) {
                    let g1Power=arena[gladiator1][gladiatorSkill];
                    let g2Power=arena[gladiator2][gladiatorSkill];
                    
                    if (g1Power&&g2Power && gladiatorSkill!=='totalPower'){
                        if (g1Power>g2Power){
                            delete arena[gladiator2];
                            break;
                        } else{
                            delete arena[gladiator1];
                            break;
                        }
                    }
                    
                }
            }
        }else{
            break;
        }
    }

    let sortedGladiators=Object.keys(arena).sort((g1,g2)=>{
        let diffInTotalPower=arena[g2]['totalPower']-arena[g1]['totalPower'];

        if (diffInTotalPower===0){
            return arena[g1].localeCompare(arena[g2]);
        }

        return diffInTotalPower;
    });

    for (let glad of sortedGladiators) {
        console.log(`${glad}: ${arena[glad]['totalPower']} skill`);

        let sortedSkills=Object.keys(arena[glad]).filter(s=>s!=='totalPower').sort((s1,s2)=>{
            let diffInPower=arena[glad][s2]-arena[glad][s1];

            if (diffInPower===0){
                return s1.localeCompare(s2);
            }
            return diffInPower;
        });

        for (let skill of sortedSkills) {
            console.log(`- ${skill} <!> ${arena[glad][skill]}`);
        }
    }

}
arenaTier(['Pesho -> Duck -> 400' ,
'Julius -> Shield -> 150' ,
'Gladius -> Heal -> 200' ,
'Gladius -> Support -> 250' ,
'Gladius -> Shield -> 250' ,
'Pesho vs Gladius',
'Gladius vs Julius' ,
'Gladius vs Gosho' ,
'Ave Cesar']);
