const express = require('express');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        
            {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '홍길e',
            'birthday' : '99',
            'gender' : 'Male',
            'job' : 'univ'
          
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '홍길fff',
            'birthday' : '999',
            'gender' : 'Male',
            'job' : 'unive'
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '홍길g',
            'birthday' : '9999',
            'gender' : 'Male',
            'job' : 'univer'
          }
          
          
    ]);
});
app.listen(port, () => console.log(`Listening on port ${port}`));