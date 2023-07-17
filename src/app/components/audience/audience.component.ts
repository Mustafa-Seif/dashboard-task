import { Component, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.scss'],
})
export class AudienceComponent {
  @ViewChild('myGrid', { static: false }) myGrid!: jqxGridComponent;
  @ViewChild('deleteM', { static: false }) deleteM!: any;
  @ViewChild('updateM', { static: false }) updateM!: any;
  fNameUpdated:string ='';
  lNameUpdated:string ='';
  indexItemDelete: number = 0;
  indexItemUpdate: number = 0;

  modalDeleteRef?: BsModalRef;
  modalUpdateRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  // DELETE MODAL
  deleteModal() {
    this.modalDeleteRef = this.modalService.show(this.deleteM, {
      class: 'modal-sm',
    });
  }
  deleteModalConfirm(): void {
    this.modalDeleteRef?.hide();
  }

  deleteModalDecline(): void {
    this.modalDeleteRef?.hide();
  }

  // UPDATE MODAL
  updateModal() {
    this.modalUpdateRef = this.modalService.show(this.updateM);
  }
  updateModalConfirm(): void {
    this.modalUpdateRef?.hide();
  }
  updateModalDecline(): void {
    this.modalUpdateRef?.hide();
  }


  firstNames: string[] = [
    'Andrew',
    'Nancy',
    'Shelley',
    'Regina',
    'Yoshi',
    'Antoni',
    'Mayumi',
    'Ian',
    'Peter',
    'Lars',
    'Petra',
    'Martin',
    'Sven',
    'Elio',
    'Beate',
    'Cheryl',
    'Michael',
  ];
  lastNames: string[] = [
    'Fuller',
    'Davolio',
    'Burke',
    'Murphy',
    'Nagase',
    'Saavedra',
    'Ohno',
    'Devling',
    'Wilson',
    'Peterson',
    'Winkler',
    'Bein',
    'Petersen',
    'Rossi',
    'Vileid',
    'Saylor',
    'Bjorn',
    'Nodier',
  ];

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 940;
  }
  generaterow(): any {
    let row: any = {};
    row['firstname'] =
      this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
    row['lastname'] =
      this.lastNames[Math.floor(Math.random() * this.lastNames.length)];

    return row;
  }
  generateData(): any {
    let data: any = {};
    for (let i = 0; i < 18; i++) {
      let row = this.generaterow();
      data[i] = row;
    }
    return data;
  }
  source: any = {
    localdata: this.generateData(),
    datatype: 'local',
    datafields: [
      { name: 'firstname', type: 'string' },
      { name: 'lastname', type: 'string' },
      { name: 'actions', type: 'string' },
    ],
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);
  counter: number = 1;
  columns: any[] = [
    { text: 'First Name', datafield: 'firstname', width: 400 },
    { text: 'Last Name', datafield: 'lastname', width: 400 },
    {
      text: 'Action', datafield: 'action', width: 120,
      createwidget: (row: number, column: any, value: string, htmlElement: HTMLElement): void => {
          const deleteBtn = document.createElement('button');
          const updateBtn = document.createElement('button');
          const deleteId = `myDeleteBtn${this.counter}`;
          const updateId = `myupdateBtn${this.counter}`;
          deleteBtn.id = deleteId;
          updateBtn.id = updateId;
          deleteBtn.innerText = "delete"
          updateBtn.innerText = "update"
          deleteBtn.style.border = 'none';
          updateBtn.style.border = 'none';

          htmlElement.appendChild(deleteBtn);
          htmlElement.appendChild(updateBtn);

          const optionsDelete = {
              width: '50%', height: 90, template: 'danger', 
          };
          const optionsUpdate = {
            width: '50%', height: 90, template: 'success', 
        };

          const myDeleteBtn = jqwidgets.createInstance(`#${deleteId}`, 'jqxButton', optionsDelete);
          myDeleteBtn.addEventHandler('click',  ()=> {
              console.log("delete");
              
          });
          const myUpdateBtn = jqwidgets.createInstance(`#${updateId}`, 'jqxButton', optionsUpdate);
          myUpdateBtn.addEventHandler('click',  ()=> {
            console.log("update");
              
          });
          this.counter++;
      },
      initwidget: (row: number, column: any, value: any, htmlElement: HTMLElement): void => {
        
      }
  },  
  ];

  updateRow(id: number) {
    // const rowIndex = this.dataAdapter.records.findIndex((item: any) => item.id === id);
    // // Check if the row index is valid
    // if (rowIndex > -1) {
    //   // Get the row data
    //   const rowData = this.dataAdapter.records[rowIndex];
    // }
    // console.log('updateRow');

    // let addRowButton = jqwidgets.createInstance('.updateItem', 'jqxButton');
    // return console.log("widget", addRowButton);
    
  }

  deleteRow(id: number) {
    // const rowIndex = this.dataAdapter.records.findIndex((item: any) => item.id === id);
    // // Check if the row index is valid
    // if (rowIndex > -1) {
    //   // Remove the row from the data source
    //   this.dataAdapter.records.splice(rowIndex, 1);
    //   this.myGrid.updatebounddata();
    // }
    // console.log('deleteRow');
  }
}
