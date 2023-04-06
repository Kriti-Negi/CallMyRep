const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

/* category numbers
 * miliatry application == 1, casework == 2,
 * complaint == 3, question about bill == 4,
 * other == 5
*/

mongoose.connect('mongodb://127.0.0.1:27017/myapp', {useNewUrlParser: true});

const congressManSchema = new mongoose.Schema({
    phoneNumber: String,
    name: String
})

const requestSchema = new mongoose.Schema({
    key: String,
    nameFirst: String,
    nameLast: String,
    zipCode: String,
    address: String,
    lastFourPhone: String,
    description: String,
    category: String,
    congressManInfo: congressManSchema
});

const Congressman = new mongoose.model("Congressman", congressManSchema);
const Request = new mongoose.model("request", requestSchema);

app.get("/api/stafferDash/:key/:phoneNumber", async (req, res) => {
    const secretKey = req.params.key;
    const phoneNumber = req.params.phoneNumber;
    try{
        const result = await Request.findOne({key: secretKey, lastFourPhone: phoneNumber}).exec()
        if(result){
            res.json({works: true, doc: result});
        } else{
            res.json({works: false, doc: null});
        }
    } catch (error){
        res.json({works: false, doc: {"error": error}});
    }
});

app.get("/api/:key/:fname/:lname/:zip/:address/:four/:description/:category/:cName/:cPhone", async (req, res) => {
    const congressMan = new Congressman({
        phoneNumber: req.params.cPhone,
        name: req.params.cName
    })
    const r = new Request({
        key: req.params.key,
        nameFirst: req.params.fname,
        nameLast: req.params.lname,
        zipCode: req.params.zip,
        address: req.params.address,
        lastFourPhone: req.params.four,
        description: req.params.description,
        category: req.params.category,
        congressManInfo: congressMan
    })
    r.save();
    res.json({works: r})
});

app.get("/api/findByName/:name", async (req, res) => {
    const name = req.params.name;

    axios.all([
        axios.get("https://whoismyrepresentative.com/getall_sens_byname.php?name=" + name + "&output=json"),
        axios.get("https://whoismyrepresentative.com/getall_reps_byname.php?name=" + name + "&output=json")
    ]).then(axios.spread((sens, reps) => {
        res.json({works: true, doc: [...sens.data.results, ...reps.data.results]})
    })).catch(error => {
        console.log(error);
    });
})

app.get("/api/findByZip/:zip", async (req, res) => {
    axios.all([
        axios.get("https://whoismyrepresentative.com/getall_mems.php?zip=" + req.params.zip + "&output=json")
    ]).then(axios.spread((response) => {
        res.json({works: true, doc: response.data.results});
    })).catch(error => {
        console.log(error);
    });
});



app.listen(5000);