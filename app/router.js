'use strict';
module.exports = app => {
  const { router, controller } = app;
  const baseUrl = app.config.baseUrl;
  const home = app.controller.home;
  const group = app.controller.group;
  const user = app.controller.user;

  app.router.get('/', home.render);

  // group
  router.post(`${baseUrl}/group/createGroup`, group.createGroup);
  router.get(`${baseUrl}/group/getGroups`, group.getGroups);

  // user
  router.post(`${baseUrl}/user/createUser`, user.createUser);
  router.get(`${baseUrl}/user/getUsers`, user.getUsers);
  router.get(`${baseUrl}/user/getUserDetail`, user.getUserDetail);
  router.delete(`${baseUrl}/user/deleteUser`, user.deleteUser);
  router.put(`${baseUrl}/user/updateUser`, user.updateUser);

  // upload
  router.post(`${baseUrl}/upload`, user.upload);


};
