export class EquipmentService {
    equipments = [
        {
            id: 1,
            name: "Washing machine",
            status: "On"
        },
        {
            id: 2,
            name: "Fridge",
            status: "On"
        },
        {
            id: 3,
            name: "Computer",
            status: "Off"
        }
    ];

    getAppareilById(id: number) {
        const equipment = this.equipments.find(
            (s) => {
                return s.id === id;
            }
        );
        return equipment;
    }

    switchOnAll() {
        for (let equipment of this.equipments) {
            equipment.status = "On";
        }
    }

    switchOffAll() {
        for (let equipment of this.equipments) {
            equipment.status = "Off";
        }
    }

    switchOnOne(i: number) {
        this.equipments[i].status = "On";
    }

    switchOffOne(i: number) {
        this.equipments[i].status = "Off";
    }
}