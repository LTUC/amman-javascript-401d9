'use strict';

class DataMngr {//data access lyer (DA)
    constructor(model) {//model from mongoose
        this.model = model;
    }

    read(id) {
        if (id) {
            return this.model.find({ _id: id });
        } else {
            return this.model.find({});
        }
    }

    create(obj) {
        const doc = new this.model(obj);
        return doc.save();
    }

    delete(id) {
        return this.model.findByIdAndDelete(id);
    }

    update(id, obj) {
        return this.model.findByIdAndUpdate(id, obj, { new: true });
    }
}

module.exports = DataMngr;