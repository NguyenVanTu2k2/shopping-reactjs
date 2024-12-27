var SignUpBth = (
    function() {
    let value = false;
  
    let getValue = function() {
      return value;   
    };
  
    let setValue = function(Value) {
      value = Value;     
      
    };
  
    return {
      getValue: getValue,
      setValue: setValue
    }
  
  })();

  export default SignUpBth;