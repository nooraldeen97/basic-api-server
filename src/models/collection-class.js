
class Collection{
    constructor(model){
        this.model=model;
    }

    async readRecord(id){
        if(id){
            try{
                let oneRecord=await this.model.findOne({where:{id:id}});
                return oneRecord;
            }catch (e) {
                console.error('error in reading specific record for model: ', this.model.name);
            }
        }else{
            try{
                let allRecord=await this.model.findAll();
                return allRecord;
            }catch (e) {
                console.error('error reading the records for model: ', this.model.name);
            }
        }
    }

    async createRecord(obj){
        try{
            let addedRecord = await this.model.create(obj);
            return addedRecord;
        }catch (e) {
            console.error('error in creating a new record for model: ', this.model.name);
        }
    }

    async updateRecord(id,obj){
        try{
            let oneRecord=await this.model.findOne({where:{id:id}});
            let addedRecord = await oneRecord.update(obj);
            return addedRecord;
        }catch (e) {
            console.error('error in updating a record for model: ', this.model.name);
        }
    }

    async deleteRecord(id){
        if(id){
            try{
                let oneRecord=await this.model.findOne({where:{id:id}});
                let deletedRecord=await oneRecord.destroy();
                return deletedRecord;
            }catch (e) {
                console.error('error in deleting specific record for model: ', this.model.name);
            }
        }else{
            throw new Error('no id provided for model ', this.model)
        }
    }
}

module.exports=Collection;