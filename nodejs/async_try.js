
function async(cb, err) {
    setTimeout(function() {
        try {
            if (true) {
                throw new Error("woops!");
            } else {
                cb("done");
            }
        } catch (e) {
            err(e);
        }
    }, 2000)
}

async(function(res) {
    console.log("received: ", res);
}, function(err) {
    console.log("Error: async threw an exception:", err);
});
// Error: async threw an exception: Error: woops!
