
class NewsController {

    //GET
    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send('NEWS DETAIL')
    }
}

module.exports = new NewsController;