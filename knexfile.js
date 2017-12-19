const devConfig = {
	client:'mysql',           //Nombre del driver
	connection: {		  //Configurar conexion con servidor
	host: '127.0.0.1',
	port:'3306',
	user: 'concarneau',
	password:'l43t1t14',
	database:'Dev_Feedstock'
},
migrations:{
 directory: './src/database/migrations'
},
seeds:{
  directory:'./src/database/seeds'
}
};

// Configuracion de producción travis (after devConfig)

const prodConfig = Object.assign(
  {},
  devConfig,
  { client: 'pg', connection: process.env.DATABASE_URL}
)

module.exports = {
  development: devConfig,
  production: prodConfig
}
//Aqui termina configutscion produccion Travis
