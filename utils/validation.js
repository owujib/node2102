const JOI = require('joi');

exports.registerValidation = (data) => {
  const schema = JOI.object({
    name: JOI.string().required().min(2).max(20),
    email: JOI.string().required().email(),
    role: JOI.string(),
    password: JOI.string().required().min(6).max(12),
  });

  return schema.validate(data);
};
