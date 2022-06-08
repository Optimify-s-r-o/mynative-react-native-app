export default async (formValues: any, ...contexts: any) => {
  const email = formValues.email;
  const password = formValues.password;

  const res = await contexts.api.login(email, password);

  contexts.user.setToken(res.data.token);
};
