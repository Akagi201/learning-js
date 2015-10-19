
function async2(continuation) {
    setTimeout(function(){
        try {
            var res = 42;
            if (true) { // false
                throw new Error("woops!");
            } else {
                continuation(null, res); // pass 'null' for error
            }
        } catch(e) {
            continuation(e, null);
        }
    }, 2000);
}

async2(function(err, res) {
    if (err) {
        console.log("Error: (cps) failed:", err);
    } else {
        console.log("(cps) received:", res);
    }
});

// Error: (cps) failed: woops!
