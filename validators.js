// const validateMovie = (req, res, next) => {
//     const { title, director, year, color, duration } = req.body;
//     const errors = [];

//     // if (title == null) {
//     //   res.status(422).send("The field 'title' is required");
//     // } else if (director == null) {
//     //   res.status(422).send("The field 'director' is required");
//     // } else if (year == null) {
//     //   res.status(422).send("The field 'year' is required");
//     // } else if (color == null) {
//     //   res.status(422).send("The field 'color' is required");
//     // } else if (duration == null) {
//     //   res.status(422).send("The field 'duration' is required");
//     // } else {
//     //   next();
//     // }
//   {
//      if (title == null) {
//      console.log(errors.push({ field: "title", message: "This field is required" }));
//     }
//      if (director == null) {
//      console.log (errors.push({ field: "director", message: "This field is required" }));
//     }
//       console.log(errors.push({ field: "year", message: "This field is required" }));
//    }
//     if (color == null) {
//      console.log(errors.push({ field: "color", message: "This field is required" }));
//      }
//     if (duration == null) {
//        console.log(errors.push({ field: "duration", message: "This field is required" }));
//      }
   
//      if (errors.length) {
//        res.status(422).json({ validationErrors: errors });
//      } else {
//      next();
//      }
//     };
  
//   const validateUser = (req, res, next) => {
//     const { email } = req.body;
//     const errors = [];
  
//     // ...
  
//     const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  
//     if (!emailRegex.test(email)) {
//       errors.push({ field: 'email', message: 'Invalid email' });
//     }
  
//     // ...
  
//     if (errors.length) {
//       res.status(422).json({ validationErrors: errors });
//     } else {
//       next();
//     }
//   };
  
  
//   module.exports = {
//     validateMovie,
//     validateUser
//   };
  