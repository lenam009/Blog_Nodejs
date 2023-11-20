const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {

    //GET /stored/courses
    storedCourses(req, res, next) {

        let courseQuery = Course.find({})
        console.log(res.locals);

        if (res.locals._sort.enabled) {
            const isValidType = ['asc', 'desc'].includes(res.locals._sort.type)
            courseQuery = Course.find({}).sort({
                [res.locals._sort.column]: isValidType ? res.locals._sort.type : 'desc'
            })
        }

        Promise.all([courseQuery, Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                    deletedCount
                })
            )
            .catch(next)
    }

    //GET /trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted()
            .then(courses => res.render('me/trash-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }
}

module.exports = new MeController;