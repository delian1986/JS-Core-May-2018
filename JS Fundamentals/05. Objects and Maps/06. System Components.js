// 100/100

function systemComponents(input) {
    let components=new Map();

    for (let line of input) {
        let args= line.split(/\s*\|\s*/);

        let systemName=args[0];
        let companyName=args[1];
        let subContentName=args[2];

        if (!components.has(systemName)){
            components.set(systemName,new Map());
        }

        if (!components.get(systemName).get(companyName)){
            components.get(systemName).set(companyName,[]);
        }

        components.get(systemName).get(companyName).push(subContentName);
    }

    let systemsSorted = Array.from(components.keys()).sort((s1, s2) => sortSystems(s1, s2));

    for (let system of systemsSorted) {
        console.log(system);
        let componentsSort=Array.from(components.get(system).keys()).sort((c1,c2)=>sortComponents(system,c1,c2));

        for (let component of componentsSort) {
            console.log(`|||${component}`);
            components.get(system).get(component).forEach(comp=>console.log(`||||||${comp}`));
        }
    }

    function sortSystems(s1,s2) {
        if(components.get(s1).size !== components.get(s2).size) {
            return components.get(s2).size - components.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system,c1,c2) {
        return components.get(system).get(c2).length-components.get(system).get(c1).length;
    }
}

systemComponents(['SULS | Main Site | Home Page' ,
'SULS | Main Site | Login Page' ,
'SULS | Main Site | Register Page' ,
'SULS | Judge Site | Login Page' ,
'SULS | Judge Site | Submittion Page' ,
'Lambda | CoreA | A23' ,
'SULS | Digital Site | Login Page' ,
'Lambda | CoreB | B24' ,
'Lambda | CoreA | A24' ,
'Lambda | CoreA | A25' ,
'Lambda | CoreC | C4' ,
'Indice | Session | Default Storage' ,
'Indice | Session | Default Security']);