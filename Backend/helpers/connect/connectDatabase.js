const mysql = require("mysql2");
const util = require("util");

// Tạo connection pool

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: parseInt(process.env.POOL_MAX), // Số lượng kết nối tối đa trong pool
    queueLimit: parseInt(process.env.POOL_MIN), // Số lượng yêu cầu tối đa trong hàng đợi
    acquireTimeout: parseInt(process.env.POOL_ACQUIRE), // Thời gian tối đa để lấy kết nối
    idleTimeout: parseInt(process.env.POOL_IDLE), // Thời gian tối đa mà một kết nối có thể không sử dụng
});

// Kết nối tới database

const query = async (sql) => {
    const getConnection = util.promisify(pool.getConnection).bind(pool);
    const queryPromise = util.promisify(pool.query).bind(pool);

    let connection;
    try {
        connection = await getConnection();

        const results = await queryPromise(sql);

        return results;
    } catch (error) {
        console.error("Lỗi:", error);
        throw error;
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = query;
