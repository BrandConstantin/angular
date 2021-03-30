import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput) {
    this.bluePrintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }
}
