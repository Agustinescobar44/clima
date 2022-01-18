import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImagen = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png' 
  ciudad = ""
  loading = false;
  query = false;
  mostrarError=false;
  temperatura= 0;
  humedad = 0;
  clima = ""
  constructor(private _climaService : ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima() {
    this.query = false;
    this.loading = true
     this._climaService.getClima(this.ciudad).subscribe({
      next:(data)=>{
        this.loading = false;
        this.query=true;
        console.log(data);
        
        console.log(data.main.humidity);
        console.log(data.main.temp);
        console.log(data.weather[0].main);
        this.clima = data.weather[0].main
        this.humedad = data.main.humidity
        this.temperatura = data.main.temp -273
        
      },
      error:(e)=>{
        this.error();
        
      }
     });
  }

  error(){
    this.loading = false;
    this.mostrarError =true

    setTimeout(() => {
      this.mostrarError =false;
      this.ciudad = ''
    }, 3000);
  }
}
