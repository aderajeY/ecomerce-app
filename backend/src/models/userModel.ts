import mongoose, {Schema, model} from "mongoose";
export interface User{
    userId:mongoose.Types.ObjectId,
    username:string,
    password:string,
    availableMoney:number,
}
const UserSchema:Schema = new Schema<User>({
    userId: { type: Schema.Types.ObjectId, auto: true },
    username:{ type: String, required: true, unique:true},
    password:{ type: String, required: true},
    availableMoney:{ type: Number,default:5000}

})

export const user = model<User>('users',UserSchema);
