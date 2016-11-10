import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';
import { ExpensesDetailsPage } from '../expenses-detail/expenses-detail';


@Component({
    templateUrl: "expenses.html"
})
export class ExpensesForm {

    public date: string = new Date().toISOString();
    public todo = { inputDetail: '', inputAmount: "", date: this.date }
    public totalExpenses: number = 0;

    private id: number = 0;

    public expenses: Array<any> = new Array<any>();
    public observations: Array<any> = new Array<any>();

    constructor(public nav: NavController, public alertCtrl: AlertController,public params: NavParams) {


    }

    addExpense() {
        if (this.todo.inputDetail.length != 0 && this.todo.inputAmount.length != 0) {
            this.expenses.push({ id: this.id, detail: this.todo.inputDetail, amount: this.todo.inputAmount, date: this.todo.date });
            this.totalExpenses = this.totalExpenses + parseInt(this.todo.inputAmount);
            this.cleanForm();
            this.id++;

        }
    }

    cleanForm() {

        this.todo.inputDetail = '';
        this.todo.inputAmount = "";
        this.todo.date = new Date().toISOString();

    }

    getDetail(expense) {
        this.nav.push(ExpensesDetailsPage, { detail: expense.detail, amount: expense.amount, date: expense.date });
    }

    addComments() {
        let alert = this.alertCtrl.create({
            title: 'Nueva observacion',
            message: 'Crear nueva observacion sobre los gastos',
            inputs: [
                {
                    name: 'observacion',
                    label: 'Observación'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                },
                {
                    text: 'Añadir',
                    handler: data => {
                        this.observations.push(data.observacion);
                    }
                }
            ]
        });
        alert.present();
    }

    listComments() {

        for (let expense of this.expenses) {
            console.log(expense.detail);
        }

    }

    removeExpense(expenseToDelete) {
        for (var i = 0; i < this.expenses.length; i++) {
            if (this.expenses[i].id == expenseToDelete.id) {

                this.totalExpenses = this.totalExpenses - parseInt(this.expenses[i].amount);
                this.expenses.splice(i, 1);
            }
        }
    }


}