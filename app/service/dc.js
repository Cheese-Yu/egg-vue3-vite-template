'use strict';

const Service = require('egg').Service;
const _ = require('lodash');
const { project: EVENT_PR, equipment: EQ_CONf } = require('../../config/event.config');
let full_event = {};
_.map(Object.values(EVENT_PR), el => {
    full_event = { ...full_event, ...el.event };
});

class DcService extends Service {
    async find(query = {}, type = 'equipment') {
        const { ctx } = this;
        const origin = await ctx.model.Dc.find(query);

        if (type === 'project') {
            return this._classifyByProject(origin);
        } else if (type === 'event') {
            return this._classifyByEvent(origin);
        }
        return this._classifyByEquipment(origin);
    }

    /**
     * 将数据根据项目归类
     * @param {Array} data 数据库原始数据
     * @return {Object} 归类后的对象
     * @author Ocean.Yu
    */
    _classifyByProject(data = []) {
        const hash = {};
        _.map(data, el => {
            const { type, data } = el;
            const [ project, event ] = type.split('@');
            const config = EVENT_PR[project] || {};
            const event_name = full_event[event] || 'Unknown';
            hash[project] = hash[project] || { project, name: config.name || '???' };
            hash[project][event] = hash[project][event] || { event, name: event_name, count: 0, data: [] };
            hash[project][event].count++;
            hash[project][event].data.push(data);
        });
        return hash;
    }

    /**
     * 将数据根据设备归类
     * @param {Array} data 数据库原始数据
     * @return {Object} 归类后的对象
     * @author Ocean.Yu
    */
    _classifyByEquipment(data = []) {
        const result = [];
        const group = _.groupBy(data, 'data.attach.device_id');
        for (const id in group) {
            if (!EQ_CONf[id]) continue;
            const device = { ...EQ_CONf[id] };
            const taEvent = device.taEvent;
            device.data = this._classifyByEvent(group[id]);
            device.taEvent = device.data[taEvent] || { name: full_event[taEvent], count: 0 };
            result.push(device);
        }
        return result.sort((a, b) => b.taEvent.count - a.taEvent.count);
    }

    /**
     * 将数据根据事件归类
     * @param {Array} data 数据库原始数据
     * @return {Object} 归类后的对象
     * @author Ocean.Yu
    */
    _classifyByEvent(data = []) {
        const hash = {};
        _.map(data, el => {
            const { type } = el;
            const [ , event ] = type.split('@');
            hash[event] = hash[event] || { event, name: full_event[event], count: 0 };
            hash[event].count++;
        });
        return hash;
    }
}

module.exports = DcService;
