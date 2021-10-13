'use strict';

const Controller = require('egg').Controller;
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

class DcController extends Controller {
    async queryToday() {
        const { ctx } = this;
        const now = dayjs();
        const stDate = now.startOf('date').utcOffset(8);
        const enDate = now.endOf('date').utcOffset(8);

        const result = await ctx.service.dc.find({
            type: /@/,
            createdDate: { $gte: stDate, $lte: enDate },
        });

        ctx.body = {
            result,
        };
    }
}

module.exports = DcController;
