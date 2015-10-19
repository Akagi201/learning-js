process.on('uncaughtException', function (err) {
    console.error("Error caught in uncaughtException event:", err);
    //logger(err);
    process.exit(1);
});

try {
    setTimeout(function () {
        throw new Error("error");
    }, 1)
} catch (err) {
    // can not catch it
    console.log(err);
}
