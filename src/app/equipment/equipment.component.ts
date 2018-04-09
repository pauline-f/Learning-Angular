import { Component, Input, OnInit } from '@angular/core';
import { EquipmentService } from '../services/equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  @Input() equipmentName: string;
  @Input() equipmentStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.equipmentStatus;
  }

  getColor() {
    if (this.equipmentStatus === "On") {
      return "green";
    } else if (this.equipmentStatus === "Off") {
      return "red";
    }
  }

  onSwitch() {
    if (this.equipmentStatus === "On") {
      this.equipmentService.switchOffOne(this.index);
    } else if (this.equipmentStatus === "Off"){
      this.equipmentService.switchOnOne(this.index);
    }
  }

}
