import * as Yup from 'yup';


// contact_schema
export const contact_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  message: Yup.string().required().min(20).label("Message"),
});

export const signup_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  passwordConfirmation: Yup.string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return value === this.resolve(Yup.ref('password')) || value === null;
    }),
});

export const login_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
//forgot schema
export const forgotten_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email")
});
//blog comment schema
export const blogCommentSchema = Yup.object().shape({
  name: Yup.string().required().label("FirstName"),
  comment: Yup.string().required().min(20).label("Comment")
});


