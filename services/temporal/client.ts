
import { Client, Connection } from '@temporalio/client';

export const createTemporalClient = async () => {
  const connection = await Connection.connect({ address: 'localhost:7233' }); // Configurable
  return new Client({
    connection,
  });
};
