const express = require('express');

// ...

const app = express();
const routers = require('./routers');

app.use(express.json());

app.use('/login', routers.loginRoutes);
app.use('/user', routers.userRoutes);
app.use('/categories', routers.categoriesRoutes);

app.use((err, _req, res, _next) => {
  res
    .status(500)
    .json({ message: err.message });
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
