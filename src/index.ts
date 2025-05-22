// src/server.ts
import app from './app';

const port = process.env.PORT || 5473;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});