import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/service/database.service';



@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit{



  constructor( private database :DatabaseService){}

  //array vuoto dove aggiungere i nuovi valori
  valori: string[] = [];
  elenco:any
  chiavi:any


  ngOnInit():void{
    this.database.getValore().subscribe((data:any)=>{this.elenco=Object.keys(data).map((key)=>{return data[key]})

    //prendo l'id di firebase di ogni valore
    this.chiavi= Object.keys(data)
    console.log(this.chiavi)
    console.log(this.elenco)})

    }



  inviaValore(form:NgForm, testo:string){
    if(testo === "" || testo === undefined){
      alert('Inserisci il valore correttamente')

    }else{

    this.database.insertValore({testo}).subscribe(data=> console.log(data))
     //aggiunge all'array valori il nuovo valore
    this.valori.push(testo)
    }
    form.reset()

  }

  eliminaValore(idFIrebase:string){
    this.database.deleteValore(idFIrebase).subscribe(data=>console.log(data))
  }

}
