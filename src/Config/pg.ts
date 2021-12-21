import { Pool } from 'pg'

const pool = new Pool({
    connectionString: 'postgres://postgres:1407@localhost:5432/airport'
})

const fetch = async (SQL: any, ...values: any) => {
    const client = await pool.connect()
    try {
        const { 
            rows: [row]
        } = await client.query(SQL, values)
        return row;
    } catch (error) {
        console.log(error);
    } finally {
        client.release()
    }
}

const fetchAll = async (SQL: any, ...values: any) => {
    const client = await pool.connect()
    try {
        const { 
            rows
        } = await client.query(SQL, values)        
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        client.release()
    }
}

export {
    fetch,
    fetchAll
}
