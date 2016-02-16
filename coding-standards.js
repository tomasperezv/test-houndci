/**
 * The goal of this module is to test the integration with houndci.
 *
 * DISCLAIMER: This file will have intentional coding standard problems.
 * @see https://houndci.com/
 */
var Module = function() {
// Indentation problem
this.CONSTANT = 5;

  // Wrong spacing, several different variations
  this._spacingA= [];
  
  this._spacingB =[];
  
    this._spacingC =[];
  
  this._spacingD =  [];    

  // Missing var definition
_testWrongVarDefinition = {};

} // Missing semicolon

/**
 Wrong block comment setup
 * @method _feature
 * @public
 */
Module.prototype._feature = function() {
  // Should warn here about using a global variable
  var element = document.getElementById('test');
  
  /*
   * This line has a wrong length, This line has a wrong length, This line has a wrong length, This line has a wrong length, This line has a wrong length, This line has a wrong length, 
   * This line has a wrong length, This line has a wrong length, This line has a wrong length, This line has a wrong length, This line has a wrong length, This line has a wrong length, 
   */
  var a = new Array();
  var b = new String('test');
  
  // Eval is evil
  eval('b = "retest";');
  
} // Missing semicolon

// Test different types of instantiation
var module = new Module();
var secondModule = new Module;

// More advanced systems should be able to detect trying to access
// To a private variable here.
module._feature();
