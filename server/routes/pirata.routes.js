const PirataController = require("../controllers/pirata.controller")

module.exports = (app) =>{
  app.post("/api/pirata", PirataController.create_pirata);
  app.get("/api/piratas", PirataController.get_all);
  app.get("/api/pirata/:id", PirataController.get_pirata);
  app.put("/api/pirata/:id", PirataController.update_pirata);
  app.delete("/api/pirata/:id", PirataController.delete_pirata);
}