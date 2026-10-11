import { createServer } from 'vite';

const server = await createServer({
  server: {
    port: 3000
  }
});

try {
  await server.listen();
  server.printUrls();
} catch (error) {
  console.error('Unable to start Laundry Care Express:', error);
  process.exitCode = 1;
}
