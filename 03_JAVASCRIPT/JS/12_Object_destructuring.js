// Object destructuring
const Course = {
    coursename : "Javascript",
    price : "999",
    courseInstructor : "Omkar Pomendkar"
}
// course.courseInstructor
const {courseInstructor : Instructor} = Course

// console.log(courseInstructor) 
console.log(Instructor) 