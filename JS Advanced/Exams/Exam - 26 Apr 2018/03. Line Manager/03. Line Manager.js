class LineManager {
    constructor(stops) {
        this.stops = stops;
        this.currStop = 0;
        this.timeOnCourse = 0;
        this.delay = 0;
    }


    get nextStopName() {
        if (this.atDepot) {
            return "At depot.";
        } else {
            return this._stops[this.currStop + 1].name;
        }
    }

    set stops(stops) {
        for (let stop of stops) {
            if (stop.name === '' || stop.timeToNext < 0) {
                throw new Error(`stop is invalid`);
            }
            if (typeof stop.name !== "string" || typeof stop.timeToNext !== "number") {
                throw new Error(`stop is invalid`);
            }
        }
        return this._stops = stops;
    }

    arriveAtStop(min) {
        if (min < 0 || this.atDepot) {
            throw new Error()
        }
        this.timeOnCourse += min;
        this.delay += min - this._stops[this.currStop].timeToNext;
        this.currStop++;
        return !this.atDepot;
    }

    get stops() {
        return this._stops;
    }

    get atDepot() {
        return this.currStop === this._stops.length-1
    }

    get currentDelay(){
        return this.delay;
    }
    toString() {
        let line = this.atDepot ? '- Course completed\n' : `- Next stop: ${this._stops[this.currStop + 1].name}\n`;
        return 'Line summary\n' +
            line +
            `- Stops covered: ${this.currStop}\n` +
            `- Time on course: ${this.timeOnCourse} minutes\n` +
            `- Delay: ${this.delay} minutes`

    }
}

const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);
// Travel through all the stops until the bus is at depot
while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

console.log(man.toString());
