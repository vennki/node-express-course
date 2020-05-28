const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(8000, function(){
    console.log('server is running...');
});

const mockUserData = [
    {name: 'Venkat'},
    {name: 'Trishika'}
];

app.use(bodyParser.json());


app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    });
});

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    });
});

app.post('/login', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    const mockUserName = 'Venkat';
    const mockPassword = 'Password';

    if(userName === mockUserName && mockPassword === mockPassword){
        res.json({
            success: true,
            message: 'UserName and Password match!',
            token: 'encrypted token goes here'
        });
    } else{
        res.json({
            success: false,
            message: 'UserName and Password do not match'
        })
    }
});