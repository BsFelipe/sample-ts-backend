import app from './app';

const port = process.env.PORT || 3050;
app.listen(port, () => {
  console.log();
  console.log(`Listening on ${port}`);
  console.log(`CRTL on http://localhost:${port}`);
});
