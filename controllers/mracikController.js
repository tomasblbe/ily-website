const Mracik = require("../models/mracik");
const asyncHandler = require("express-async-handler");
const upload = require("../upload");
const fs = require('fs');



exports.mracik_detail = asyncHandler(async (req, res, next) => {
    const mracik = await Mracik.findById(req.params.id).exec()
    const vsetkyMraciky = await Mracik.find().sort({"datum":1}).exec()

    res.render('mracik_detail', {mracik: mracik, 
        vsetkyMraciky: vsetkyMraciky
    })
})


exports.mracik_create_get = asyncHandler(async (req, res, next) => {
    const vsetkyMraciky = await Mracik.find().sort({"datum":1}).exec()

    res.render('mracik_create',  {vsetkyMraciky: vsetkyMraciky})
})


exports.mracik_create_post = asyncHandler(async (req, res, next) => {
    
    
    function nazov_obrazka(){
        const all_files = fs.readdirSync('./public/images/').sort()
        if(all_files.length){
            return all_files[all_files.length-1]
        }else{
            return '1.png'
    }}

    leftMargin = Math.random()*0.7

    const mracik = new Mracik({
        text:req.body.text,
        datum:req.body.datum,
        nazov_obrazka:nazov_obrazka(),
        margin: leftMargin
    })

    await mracik.save()

    res.redirect('/')
    
})


exports.missing_info = asyncHandler(async(req, res, next) => {
    const vsetkyMraciky = await Mracik.find().sort({"datum":1}).exec()

    res.render('missing_info', { vsetkyMraciky: vsetkyMraciky})
})


exports.index = asyncHandler(async (req, res, next) => {
    const vsetkyMraciky = await Mracik.find().sort({"datum":1}).exec()

    res.render("main", {vsetkyMraciky: vsetkyMraciky})
})


