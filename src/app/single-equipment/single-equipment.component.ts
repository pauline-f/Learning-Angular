import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../services/equipment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-equipment',
  templateUrl: './single-equipment.component.html',
  styleUrls: ['./single-equipment.component.scss']
})
export class SingleEquipmentComponent implements OnInit {

name: string = 'Equipment';
status: string = 'Status';

  constructor(private equipmentService: EquipmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.equipmentService.getAppareilById(+id).name;
    this.status = this.equipmentService.getAppareilById(+id).status;
  }

}
