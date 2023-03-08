import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "bgata",
    // port: 8889,
    user: "root",
    password: "6648",
    //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  });

  try {
    const query = "SELECT user_id, first_name FROM users";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({ users: data });
  } catch (error) {
    // unhide to check error
    // res.status(500).json({ error: error.message });
  }

  // res.status(200).json({ name: "mysql" });
}
