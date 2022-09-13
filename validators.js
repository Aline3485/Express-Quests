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
  

// const Joi = require("joi");

// const userSchema = Joi.object({
//   email: Joi.string().email().max(255).required(),
//   firstname: Joi.string().max(255).required(),
//   lastname: Joi.string().max(255).required(),
//   city: Joi.string().max(255),
//   language: Joi.string().max(255),
// });

// const validateUser = (req, res, next) => {
//   const { firstname, lastname, email, city, language } = req.body;
  
//   const { error } = userSchema.validate(
//     { firstname, lastname, email, city, language },
//     { abortEarly: false }
//   );

//   if (error) {
//     res.status(422).json({ validationErrors: error.details });
//   } else {
//     next();
//   }
// };

// const movieSchema = Joi.object({
//   title: Joi.string().max(255).required(),
//   director: Joi.string().max(255).required(),
//   year:Joi.string().max(255).required(),
//   color: Joi.string().max(255).required(),
//   duration:Joi.number().integer().required()
// })
 
// const validateMovie = (req, res, next) => {
//   const { title, director, year, color, duration } = req.body;
  
//   const {error} = movieSchema.validate(
//     { title, director, year, color, duration },
//     {abortEarly: false}
//   );

//   if (error) {
//     res.status(422).json({ validationErrors: error.details });
//   } else {
//     next();
//   }
// };

// module.exports = {
//   validateMovie,
//   validateUser,
// };

const Joi = require("joi");

const movieSchema = Joi.object({
    title: Joi.string().max(255).required(),
    director: Joi.string().max(255).required(),
    year: Joi.string().max(255).required(),
    color: Joi.string().max(255).required(),
    duration: Joi.number().integer().required()
})

const userSchema = Joi.object({
    firstname: Joi.string().max(255).required(),
    lastname: Joi.string().max(255).required(),
    email: Joi.string().email().max(255).required(),
    city: Joi.string().max(255),
    language: Joi.string().max(255).required(),
    hashedPassword: Joi.string().max(255).required(),
});

const validateMovie = (req, res, next) => {
    const {title, director, year, color, duration} = req.body;

    const { error } = movieSchema.validate(
        {title, director, year, color, duration},
        {abortEarly: false} 
    );

    if(error) {
        res.status(422).json({ validationErrors: error.details });
    } else {
        next();
    }
}

const validateUser = (req, res, next) => {
    const {firstname, lastname, email, city, language, hashedPassword} = req.body;

    const { error } = userSchema.validate(
        {firstname, lastname, email, city, language, hashedPassword},
        {abortEarly: false} 
    );

    if(error) {
        res.status(422).json({ validationErrors: error.details });
    } else {
        next();
    }
}

module.exports = {
    validateMovie,
    validateUser

}
