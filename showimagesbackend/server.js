const express = require("express");
// const cors = require("cors");
const sstk = require("shutterstock-api");

// https://stackoverflow.com/questions/6998355/including-javascript-class-definition-from-another-file-in-node-js
const immagineDTO = require('./immagine-dto.js');

const applicationConsumerId = process.env.SHUTTERSTOCK_CONSUMER_ID;
const applicationConsumerSecret = process.env.SHUTTERSTOCK_CONSUMER_SECRET;

console.log(applicationConsumerId);
console.log(applicationConsumerSecret);

sstk.setBasicAuth(applicationConsumerId, applicationConsumerSecret);

const imagesApi = new sstk.ImagesApi();


const app = express();
/*
var corsOptions = {
  origin: "http://localhost:8081"
};
*/

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
/*
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Show Images backend application." });
});
*/

app.get("/api/v1/immagini/ricerca", (req, res) => {

	// console.log(req.query);

	var termine = req.query.termine;
	if (!termine) {
		res.send([]);
		return;
	}
	var pagina = 1
	if (req.query.pagina) {
		pagina = req.query.pagina;
	}
	
	const queryParams = {
		"query": termine,
		"image_type": "photo",
		"page": pagina,
		"per_page": 20,
		"sort": "popular",
		"view": "minimal",
		"language": "it",
		"region": "it"
	};

	imagesApi.searchImages(queryParams).then(({data}) => {

		// console.log(data);

		var risultato = [];
		for(let item of data) {
			
			var dto = new immagineDTO.ImmagineDTO(
				item.id,
				item.assets.preview.width,
				item.assets.preview.height,
				item.assets.preview.url,
				item.description
			);
			risultato.push(dto);
			
		}

		res.send(risultato);
	})
	.catch((error) => {
		console.error(error);
	});
	
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
