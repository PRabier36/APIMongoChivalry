const express = require('express');

const app = express();
const port = 3000;


// model
const db = require('./db');
// const players = require('./models/players');
// const setups = require('./model/setups')
const Knight = db.Knight;
// const Kclass = require('./models/player/kinght/class')



app.use(express.json())


app.get('/test', async (req, res) => {
    // let data = [];
    // data.name = "Arthur";
    // data.name = "Arthur";
    // console.log("test");
	let k = await Knight.find()
    console.log(k)
	res.send(k)
})
// app.get('/test2', async (req, res) => {
//     // let data = [];
//     // data.name = "Arthur";
//     // data.name = "Arthur";
//     // console.log("test");
//     new Knight({
//         name : "Arthur",
//     })
// 	const k = await Knight.save()
//     console.log(k)

// 	res.send(k)
// })


/*
// CRUD Player
//recup tout
app.get('/players', async (req, res) => {
    let src = paramas.src
    try {
        res.send(await players.get(src))
    } catch (err) {
        console.error("Get users ", err, "\n")
        if (err.stastusCode)
            res.status(err.stastusCode);
            res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
// recup un
app.get('players/:id', async (req, res) => {
	let src = req.params.src;
	try {
		res.send(await players.getOne(req.params.id, src));
	} catch (err) {
		console.error("Get /players/id ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}

})
// ajout
app.post('players/users', async (req, res) => {
	let data = req.body;
	let src = req.params.src;
	try {
		res.send(await players.create(data, src));
	} catch (err) {
		console.error("Post /players ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}
})

// modifier
app.put('players/:id', async (req, res) => {
	let id = req.params.id;
	let src = req.params.src;
	let data = req.body;
	try {
		res.send(await players.update(id, src, data));
	} catch (err) {
		console.error("Post /players/id ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}
})
//supprimer
app.delete('players/:id', async (req, res) => {
	let id = req.params.id;
	let src = req.params.src;
	try {
		res.send(await players.delete(id, src));
	} catch (err) {
		console.error("Delete players/id ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}
})

// CRUD Setups
app.get('/source/:src/setups', async (req, res) => {
	let src = req.params.src;
	try {
		res.send(await setups.get(src));
	} catch (err) {
		console.error("Get /setups ", err, "\n")
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}
})
app.get('/source/:src/setups/:id', async (req, res) => {
	let src = req.params.src;
	try {
		res.send(await setups.getOne(req.params.id, src));
	} catch (err) {
		console.error("Get /setups/id ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}

})
app.post('/source/:src/setups', async (req, res) => {
	let data = req.body;
	let src = req.params.src;
	try {
		res.send(await setups.create(data, src));
	} catch (err) {
		console.error("Post /setups ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}
})
app.put('/source/:src/setups/:id', async (req, res) => {
	let id = req.params.id;
	let src = req.params.src;
	let data = req.body;
	try {
		res.send(await setups.update(id, src, data));
	} catch (err) {
		console.error("Post /setups/id ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}
})
app.delete('/source/:src/setups/:id', async (req, res) => {
	let id = req.params.id;
	let src = req.params.src;
	try {
		res.send(await setups.delete(id, src));
	} catch (err) {
		console.error("Delete setups/id ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}
})
app.get('/source/:src/setups/:id_setup/users/', async (req, res) => {
	let id_setup = req.params.id_setup;
	let src = req.params.src;
	try {
		res.send(await setups.getUsersBySetup(id_setup, src));
	} catch (err) {
		console.error("Get /setups/:id_setup/users/ ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}
})
app.get('/source/:src/users/:id_user/setups', async (req, res) => {
	let id_user = req.params.id_user;
	let src = req.params.src;
	try {
		res.send(await setups.getSetupsByUser(id_user, src));
	} catch (err) {
		console.error("Get /setups/:id_setup/users/ ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}
})
app.post('/source/:src/setups/:id_setup/users/:id_user', async (req, res) => {
	let id_setup = req.params.id_setup;
	let id_user = req.params.id_user;
	let src = req.params.src;
	try {
		res.send(await setups.addUser(id_user, id_setup, src));
	} catch (err) {
		console.error("Post /setups/:id_setup/users/:id_user ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}
})
app.delete('/source/:src/setups/:id_setup/users/:id_user', async (req, res) => {
	let id_setup = req.params.id_setup;
	let id_user = req.params.id_user;
	let src = req.params.src;
	try {
		res.send(await setups.removeUser(id_user, id_setup, src));
	} catch (err) {
		console.error("Delete /setups/:id_setup/users/:id_user  ", err, "\n");
		if (err.statusCode)
			res.status(err.statusCode);
		res.json({ "name ": err.name, "message": err.message, "error": err.stack });
	}
})
*/


app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`)
})