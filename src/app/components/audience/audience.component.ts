import { Component, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
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
  fNameUpdated: string = '';
  lNameUpdated: string = '';
  indexItemDelete: number = 0;
  indexItemUpdate: number = 0;
  idRow: number = 0;
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
    // GET ROW ID 
    let id = this.myGrid.getrowid(this.idRow);
    // DELETE BY ROW ID 
    this.myGrid.deleterow(id);
    // HIDE MODAL 
    this.modalDeleteRef?.hide();
  }
  deleteModalDecline(): void {
    this.modalDeleteRef?.hide();
  }
  // UPDATE MODAL
  updateModal(row: any) {
    this.fNameUpdated = row.bounddata.firstname;
    this.lNameUpdated = row.bounddata.lastname;
    this.modalUpdateRef = this.modalService.show(this.updateM);
  }
  updateModalConfirm(): void {
    // GET ROW ID 
    let id = this.myGrid.getrowid(this.idRow);
    // UPDATE ROW ID 
    this.myGrid.updaterow(id, {
      firstname: this.fNameUpdated,
      lastname: this.lNameUpdated,
    });
    this.lNameUpdated = '';
    this.fNameUpdated = '';
    this.myGrid.ensurerowvisible(this.idRow);
    // HIDE MODAL 
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
  // GET GRID WIDTH
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }
    return 940;
  }
  // GENERATE ROWS
  generaterow(): any {
    let row: any = {};
    row['firstname'] =
      this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
    row['lastname'] =
      this.lastNames[Math.floor(Math.random() * this.lastNames.length)];

    return row;
  }
  // GENERATE GRID DATA
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
      text: 'Action',
      datafield: 'action',
      width: 120,
      createwidget: (
        row: any,
        column: any,
        value: string,
        htmlElement: HTMLElement
      ): void => {
        const deleteBtn = document.createElement('span');
        const updateBtn = document.createElement('span');
        const deleteId = `myDeleteBtn${this.counter}`;
        const updateId = `myupdateBtn${this.counter}`;
        deleteBtn.id = deleteId;
        updateBtn.id = updateId;
        deleteBtn.innerText = 'delete';
        updateBtn.innerText = 'update';
        deleteBtn.style.border = 'none';
        deleteBtn.style.marginRight = '5px';
        updateBtn.style.border = 'none';

        htmlElement.appendChild(deleteBtn);
        htmlElement.appendChild(updateBtn);

        const optionsDelete = {
          width: '50%',
          height: 90,
          template: 'danger',
        };
        const optionsUpdate = {
          width: '50%',
          height: 90,
          template: 'success',
        };

        const myDeleteBtn = jqwidgets.createInstance(
          `#${deleteId}`,
          'jqxButton',
          optionsDelete
        );
        myDeleteBtn.addEventHandler('click', () => {
          this.idRow = row.boundindex;
          this.deleteModal();
        });
        const myUpdateBtn = jqwidgets.createInstance(
          `#${updateId}`,
          'jqxButton',
          optionsUpdate
        );
        myUpdateBtn.addEventHandler('click', () => {
          this.idRow = row.boundindex;
          this.updateModal(row);
        });
        this.counter++;
      },
      initwidget: (
        row: number,
        column: any,
        value: any,
        htmlElement: HTMLElement
      ): void => {},
    },
  ];

}
