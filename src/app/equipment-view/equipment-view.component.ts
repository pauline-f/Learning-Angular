import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../services/equipment.service';

@Component({
  selector: 'app-equipment-view',
  templateUrl: './equipment-view.component.html',
  styleUrls: ['./equipment-view.component.scss']
})
export class EquipmentViewComponent implements OnInit {

isAuth: boolean = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      },2000
    );
  });


  equipments: any[];

  constructor(private equipmentService: EquipmentService) {
  }

  ngOnInit() {
    this.equipments = this.equipmentService.equipments;
  }

  onOn() {
    this.equipmentService.switchOnAll();
  }

  onOff() {
    if (confirm("Are you sure?")) {
      this.equipmentService.switchOffAll();
    } else {
      return null;
    }
    
  }

}
