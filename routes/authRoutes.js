const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys')
        }
    )
    app.get('/auth/facebook', passport.authenticate('facebook',
        {
            scope: ['user_friends', 'user_events', 'email', 'user_photos', 'user_location', 'user_gender', 'user_birthday', 'user_age_range'],
        }
    ))
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/surveys',
        failureRedirect: '/'
    }))

    app.post('/auth/login', passport.authenticate('local', {failureRedirect: '/'}), (req, res) => res.redirect('/surveys'))

    app.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('/')
    })

    app.get('/api/current_user', (req, res) => {
        console.log('user.........', req.user)
        res.send(req.user)
    })
};
