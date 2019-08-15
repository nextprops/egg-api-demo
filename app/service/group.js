'use strict';
const Service = require('egg').Service;

let Group = [];
let GroupId = 1;

class GroupService extends Service {

  async createGroup(groupName) {

    let group = {
      id: GroupId++,
      groupName,
    };

    Group.push(group);

    return group;
  }

  async getGroups() {

    return {
      Groups: Group,
    };
  }
}

module.exports = GroupService;
