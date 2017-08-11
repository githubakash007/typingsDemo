import * as $ from 'jquery';

export class welcome{
     
   ChangeBodyColor(color:string):void{

        //jquery intelligence works just file within this method
       $("body").css("background-color",color);
      

    }


}