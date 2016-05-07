# This is an intentionally wrong code in order to test the integration with houndci
window.myMethod = ->
  console.log('test')

# Overriding a method
window.myMethod = ->
  console.log('test-1')

# Wrong spacing: different styles
  namespace = {};
  namespace= {};
namespace =  {};
  namespace =     {};

# no debugger!
test = ->
  debugger;
