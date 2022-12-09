import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor() { }

  id?: any;
  x?: any;
  y?: any;
  width?: any;
  height?: any;
  rotateAngle?: any;
  borderColor?: any;
  fillColor?: any;

}