const ripeWhiteAdmin = require("..");

async function run() {
    await ripeWhiteAdmin.API.load();
    const api = new ripeWhiteAdmin.API();
    try {
        console.info(await api.listContexts());
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`)
    }
}

run();
