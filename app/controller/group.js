'use strict';

const Controller = require('egg').Controller;

/**
 * @controller group 分组接口
 */
class GroupController extends Controller {

  /**
   * @summary 创建分组
   * @description 创建分组
   * @router post /api/group/createGroup
   * @request body createGroupRequest *body
   * @response 200 createGroupResponse 创建成功
   */
  async createGroup() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(ctx.rule.createGroupRequest);

    let req = ctx.request.body;

    ctx.body = await service.group.createGroup(req.groupName);

  }

  /**
   * @ignore
   */
  async nothing() {
    const { ctx } = this;
    ctx.body = 'nothing';
  }

  /**
   * @summary 分组
   * @description 获取全部分组
   * @router get /api/group/getGroups
   * @response 200 getGroupsResponse 全部分组数据
   */
  async getGroups() {
    const { ctx, service } = this;

    ctx.body = await service.group.getGroups();
  }

}
module.exports = GroupController;
