const uuid = require('uuid')
const path = require('path');
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info, image } = req.body
            const img = image
            // let fileName = uuid.v4() + ".jpg"
            // img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({ name, price, brandId, typeId, img });

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async edit(req, res, next) {
        let { name, price, img } = req.body;
        const { id } = req.params;

        let device = await Device.update({ name, price, img }, { where: { id } })
        // device.save()



        // device.setDataValue("info", JSON.stringify(data.info));
        console.log(device);
        return res.json(device)
        //     await device.save()
        //     res.json(device)
        // device.info = data.info
        // device.save((err) => {
        //     if (err) throw err
        //     res.send("Succes")
        // })
        // console.log(device)
        // await device.save()
        // res.json(device)
        // if (data.info) {
        //     let clientInfos = JSON.parse(data.info);
        //     let dbInfos = device.info;
        //     console.log(dbInfos)

        // dbInfos.forEach(async dbInfo => {
        //     const clientInfo = clientInfos.find(i => i.id === dbInfo.id);
        // if (clientInfo) {
        //     let updatingInfo = await DeviceInfo.findOne(
        //         {
        //             where: { id: dbInfo.id },
        //         },
        //     )
        //     Object.entries(clientInfo).map(([key, value]) => {
        //         updatingInfo[key] = value;
        //     })
        //     await updatingInfo.save();
        // } else {
        //     DeviceInfo.create({
        //         title: clientInfo.title,
        //         description: clientInfo.description,
        //         deviceId: clientInfo.id
        //     })
        // }
        // })
        // }
        // delete data['info']
        // const updatedDevice = { ...device, ...data };
        // Object.entries(updatedDevice).map(([key, value]) => {
        //     device[key] = value;
        // })
        // await device.save();
        // return res.json(device)
    }

    // Don't working----------------------
    // async edit(req, res) {
    //     const { id } = req.params
    //     let {
    //         name, price,
    //     } = req.body
    //     const { img } = req.files
    //     let fileName = uuid.v4() + ".jpg"
    //     img.mv(path.resolve(__dirname, '..', 'static', fileName))
    //     const item = await Item.update({ name, price, img: fileName }, { where: { id } });
    //     return res.json(item)
    // }

    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query
        page = page || 1
        limit = limit || 6
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ limit, offset })
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset })
        }
        return res.json(devices)
    }

    async delete(req, res) {
        const { id } = req.params
        const device = await Device.destroy({
            where: {
                id
            }
        })
        return res.json(device)
    }

    async getOne(req, res) {
        const { id } = req.params
        const device = await Device.findOne(
            {
                where: { id },
                include: [{ model: DeviceInfo, as: 'info' }]
            },
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()