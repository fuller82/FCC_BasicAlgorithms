function isOperator(a){var c;switch(a){case"*":case"/":case"+":case"-":c=!0;break;default:c=!1}return c}function buttonPress(a,c){switch(c){case"AC":a.allClear();break;case"C":a.clear();break;case"Calc":a.calc();break;default:a.calcArr[a.calcArr.length-1]!==a.solution||isOperator(c)?("."===c&&"."===a.calcArr[a.calcArr.length-1]||isOperator(c)&&isOperator(a.calcArr[a.calcArr.length-1]))&&a.calcArr.splice(a.calcArr[(a.length-1,1)]):a.allClear(),a.appendValue(c)}return a}$(document).ready(function(){function calculatorObj(a,c,t){this.calcArr=a,this.calcDisplay=c,this.atDecimal=t}calculatorObj.prototype.updateDisplay=function(){$("#calc-display").html(this.calcDisplay),"."===this.calcArr[this.calcArr.length-1]?this.atDecimal=!0:this.atDecimal=!1},calculatorObj.prototype.allClear=function(){return this.calcArr=[],this.calcDisplay="0.0",this.atDecimal=!1,this.updateDisplay(),this},calculatorObj.prototype.clear=function(){return this.calcArr.splice(this.calcArr.length-1,1),this.calcArr[0]?this.calcDisplay=this.calcArr.join(""):this.allClear(),this.updateDisplay(),this},calculatorObj.prototype.appendValue=function(a){return this.calcArr.push(a),this.calcDisplay=this.calcArr.join(" "),this.solution="",this.updateDisplay(),this},calculatorObj.prototype.calc=function(){return this.solution=eval(this.calcArr.join("")),this.calcDisplay=this.solution,this.calcArr=[],this.calcArr.push(this.solution),this.updateDisplay(),this},calculator=new calculatorObj,calculator.allClear(),$(".calc-button").click(function(){calculator=buttonPress(calculator,$(this).html())})});