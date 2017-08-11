import {welcome as ww} from './welcome';
import * as $ from 'jquery';


$(function () {
    $("#btnWelcome").on('click', function () {

        let wel = new ww();
        console.log(wel);
        wel.ChangeBodyColor();

    });

});
