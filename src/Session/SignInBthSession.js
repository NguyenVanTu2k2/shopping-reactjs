
var SignInBth = (
    function () {
        let value = false;

        let getValue = function () {
            return value;    // Or pull this from cookie/localStorage
        };

        let setValue = function (Value) {
            value = Value;
            // Also set this in cookie/localStorage
        };

        return {
            getValue: getValue,
            setValue: setValue
        }

    })();

export default SignInBth;