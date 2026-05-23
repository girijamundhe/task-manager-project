const express = require("express");
const router = express.Router();

const Project = require("../models/Project");


// CREATE PROJECT
router.post("/", async(req, res) => {

  try {

    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      user: req.body.user
    });

    const project = await newProject.save();

    res.json(project);

  } catch(err) {

    res.status(500).send("Server Error");

  }

});


// GET PROJECTS
router.get("/", async(req, res) => {

  try {

    const projects = await Project.find();

    res.json(projects);

  } catch(err) {

    res.status(500).send("Server Error");

  }

});


// UPDATE PROJECT
router.put("/:id", async(req, res) => {

  try {

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(project);

  } catch(err) {

    res.status(500).send("Server Error");

  }

});


// DELETE PROJECT
router.delete("/:id", async(req, res) => {

  try {

    await Project.findByIdAndDelete(req.params.id);

    res.json({
      msg: "Project Deleted"
    });

  } catch(err) {

    res.status(500).send("Server Error");

  }

});

module.exports = router;