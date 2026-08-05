const { Client } = require('pg');

async function run() {
  const passwords = ['postgres', 'password', 'admin', 'root', ''];
  let connected = false;

  for (const pw of passwords) {
    const client = new Client({
      user: 'postgres',
      password: pw,
      host: 'localhost',
      port: 5432,
      database: 'postgres'
    });

    try {
      await client.connect();
      console.log('Connected with password: "' + pw + '"');
      connected = true;

      try {
        await client.query("CREATE USER axionyx WITH PASSWORD 'axionyx_pilot'");
        console.log('Created user axionyx');
      } catch (e) {
        console.log('User axionyx might already exist or error: ', e.message);
      }

      try {
        await client.query("ALTER USER axionyx WITH PASSWORD 'axionyx_pilot'");
        console.log('Updated user axionyx password');
      } catch (e) {}

      try {
        await client.query("CREATE DATABASE axionyx_ref_lab OWNER axionyx");
        console.log('Created database axionyx_ref_lab');
      } catch (e) {
        console.log('Database might already exist: ', e.message);
      }

      process.exit(0);
    } catch(e) {
      // ignore and try next
    }
  }

  if (!connected) {
    console.log('Failed to connect as postgres user with any common password');
  }
}

run();
