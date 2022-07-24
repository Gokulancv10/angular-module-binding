import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = new Array(
    // { type: 'server', name: "Testing", description: "Testing" },
    // { type: 'server-blue-print', name: "Gokulan", description: "DevOps Team" },
    // { type: 'server', name: "Vinoth", description: "Hari" }
  );

  createServer(serverData: {serverName: string, serverDescription: string}) {
    this.servers.push(
      {
        type: 'server',
        name: serverData.serverName,
        description: serverData.serverDescription
      }
    );
  }

  createServerBluePrint(serverBluePrintData: {serverName: string, serverDescription: string}) {
    this.servers.push(
      {
        type: 'server-blue-print',
        name: serverBluePrintData.serverName,
        description: serverBluePrintData.serverDescription
      }
    );
  }

  // clearFormInputs() {
  //   this.serverName = '';
  //   this.serverDescription = '';
  // }
}
