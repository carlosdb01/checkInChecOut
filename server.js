const { app } = require('./app');
const { sequelize } = require('./app/utils/database.util');

const startServer = async () => {
    try {
		
		console.log("Requesting authentication ");
        await sequelize.authenticate();
		
		console.log("Synchronizing database connection");
        await sequelize.sync();

		console.log("Opening the server port");
        const PORT = 8080;

		
        app.listen(PORT, () => {
            console.log("Express app running!");
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
