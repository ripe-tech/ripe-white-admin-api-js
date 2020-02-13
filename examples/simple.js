const ripeWhiteAdmin = require("..");

async function run() {
    await ripeWhiteAdmin.API.load();
    const api = new ripeWhiteAdmin.API();
    console.info(await api.listContexts());
}

run();
