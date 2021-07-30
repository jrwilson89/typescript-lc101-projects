import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
export class Rocket {
    totalCapacityKg: number
    name:  string
    cargoItems: Cargo[]=[]
    astronauts: Astronaut[]=[]
    constructor (name: string, totalCapacityKg: number) {
        this.totalCapacityKg=totalCapacityKg
        this.name=name
    }
    sumMass(items: Payload[]): number {
        let sumMass: number=0;
            for (let i: number = 0; i < items.length; i++) {
            sumMass += items[i].massKg;
        }
        console.log(items);
        return sumMass;
        ;
    }
    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts)
    }
    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)===true) {
            this.cargoItems.push(cargo)
            return true
        } else {
            return false
        }
        
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)===true) {
            this.astronauts.push(astronaut)
            return true
        } else {
            return false
        }
    }

}