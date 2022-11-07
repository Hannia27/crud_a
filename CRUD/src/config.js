import {config} from 'dotenv';
config();

//console.log();
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://ferret-web:HqgE659PowxUpdVXwD2LfLGHp7xo2MyrMlH44k2Ei1WOGrdslKzNqjKP3eJ26RFDqTU4EGaLpYQIcgL1ImmvVQ==@ferret-web.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@ferret-web@"
export  const PORT = process.env.PORT || 3000;