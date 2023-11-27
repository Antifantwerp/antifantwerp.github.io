# Antifantwerp

<img src="src/assets/antifa.svg" width="150px" alt="An antifa logo: a white circle with a black border. Within the circle is a black flag on the front, and left-below-behind it a red one. The top of the circle says Antifa, the bottom says Antwerp" />
A website collecting anti-fascist resources in Antwerp, Belgium.

## Reference
### Data
Feel free to use the data collected in this site

- Signs: [data](src/_data/fascist_emblems.yaml) & [images](src/assets/signs/)
- Political parties: [data](src/_data/parties/) & [images](src/assets/parties/)

## How-to
### Run locally
Requirements: node.js, yarn

```bash
git clone https://github.com/Antifantwerp/antifantwerp.github.io.git
cd antifantwerp.github.io
yarn install
```
Then run...
- `yarn build` to build into `dist/`
- `yarn dev` to run a dev server on [localhost:8080](http://localhost:8080).


### Update solidarity wall
```bash
curl -o ttic.py https://raw.githubusercontent.com/Denperidge/tumblr-tagged-image-collector/main/ttic.py
python ttic.py --blog antifantwerp --tag wall --output src/_data/solidaritywall.json --api-key APIKEY
```
