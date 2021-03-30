const controller = require("./db/controller");
const router = require("express").Router();

router.post("/api/people", controller.createPerson);
router.post("/api/addtag", controller.createTag);   
router.post("/api/addrelationship", controller.createRelationship);
router.get("/api/getpeople",controller.getPeople);
router.get("/api/getpeoplebyid/:id", controller.getPeopleById);
router.get("/api/gettags", controller.getTags);
router.get("/api/getrelationships",controller.getRelationship);
module.exports = router;
