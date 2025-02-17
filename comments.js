// Create web server
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Add route to server
app.get('/comments', (req, res) => {
  res.json({ comments: [{ body: 'some comment' }] });
});
// 4. Start server
app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});