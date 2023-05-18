const {z} = require("zod");

const loginValidator = z.object({
   username: z.string(),
   password: z.string().min(8)
});

const registerValidator = z.object({
   name: z.string(),
   role: z.enum(['Admin', "Member"])
}).and(loginValidator);

module.export = {
   loginValidator,
   registerValidator
}