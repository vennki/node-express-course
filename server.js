const express = require('express');
const app = express();

app.listen(8000, function(){
    console.log('server is running...');
})


const mockUserData = [
    {name: 'Venkat'},
    {name: 'Trishika'}
];

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    });
});

