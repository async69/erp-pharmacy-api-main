const dbName = process.env.DATABASE_NAME || "erp_unknown_db"
const deployedDBUri = process.env.DEPLOYED === "false"?
    `mongodb://localhost:27017/${dbName}` :
    `mongodb+srv://yab:Lumberjack_6969@test-y8c98.mongodb.net/${dbName}?authSource=admin&replicaSet=test-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`
export default {
    deployedDBUri
}