import * as express from 'express' // 1
const app = express();
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});