'use strict';

const Controller = require('egg').Controller;

/**
 * @controller user 用户接口
 */
class UserController extends Controller {

  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router post /api/user/createUser
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async createUser() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(ctx.rule.createUserRequest);

    let user = ctx.request.body;

    ctx.body = await service.user.createUser(user);

  }

  /**
   * @summary 获取全部用户
   * @description 分页获取用户信息
   * @router get /api/user/getUsers
   * @request query integer pageNo 页码 默认 1
   * @request query integer pageSize 单页数量 默认 20
   * @response 200 getUsersResponse successed
   */
  async getUsers() {
    const { ctx, service } = this;

    let pageNo = Number(ctx.query.pageNo || 1);
    let pageSize = Number(ctx.query.pageSize || 20);

    ctx.body = await service.user.getUsers(pageNo, pageSize);
  }

  /**
   * @summary 获取用户详情
   * @description 获取用户信息
   * @router get /api/user/getDetail/{id}
   * @request path string *id
   * @response 200 getUserDetailResponse 用户信息
   */
  async getUserDetail() {
    const { ctx, service } = this;
    let id = ctx.params.id;

    ctx.body = await service.user.getUserDetail(id);
  }

  /**
   * @summary 删除用户
   * @description 删除用户信息
   * @router delete /api/user/deleteUser/{id}
   * @request path string *id
   * @response 200 baseResponse 删除成功
   */
  async deleteUser() {
    const { ctx, service } = this;

    let id = ctx.params.id;

    ctx.body = await service.user.deleteUser(id);
  }

  /**
   * @summary 更新用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router put /api/user/updateUser
   * @request path string *id
   * @request body updateUserRequest *body
   * @response 200 user 更新成功
   */
  async updateUser() {
    const { ctx, service } = this;
    let id = ctx.params.id;
    // 校验参数
    ctx.validate(ctx.rule.updateUserRequest);
    let req = ctx.request.body;

    ctx.body = await service.user.update(id, req.email, req.phoneNumber);
  }

  /**
   * @summary 上传图片
   * @description 上传图片 更新用户的头像
   * @router post /api/upload
   * @request formData string id 用户ID
   * @request formData file *file
   * @response 200 uploadResponse 更新成功
   */
  async upload() {
    const { ctx, service } = this;

    const stream = await ctx.getFileStream();
    const id = stream.fields.id;
    const origin = ctx.origin;

    ctx.body = await service.user.updateUser(origin, id, stream);
  }
}
module.exports = UserController;
