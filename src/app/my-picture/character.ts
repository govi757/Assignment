export class Hero {
    nm: string;
    avtar: string;
    desc: string;

    constructor(nm?: string, avtar?: string, desc?: string) {
        this.nm = nm;
        this.avtar = avtar;
        this.desc = desc;
    }
}